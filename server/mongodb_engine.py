from datetime import datetime, timedelta
from pymongo.mongo_client import MongoClient
from bson.objectid import ObjectId

class DB:
    def __init__(self, is_unit_testing = False) -> None:
        self.NUM_OF_WEEKS_TO_TRACK = 4
        self.NUM_OF_YEARS_TO_TRACK = 20
        self.URI = "mongodb+srv://yipeng:tur1ng@it.82wrl7o.mongodb.net/?retryWrites=true&w=majority"
        self.DB = "test_db"

        KEY_HASH_CONST = bytes.fromhex("a2b766471b61d03c50fa553dce7d00c9")
        self.KEY_HASH = bytearray(KEY_HASH_CONST)
        self.KEY_HASH_LEN = len(self.KEY_HASH)

        self.USER_DOC_FIELDS_TO_COPY = ["fn", "mn", "ln", "phn", "eml", "addr", "sc", "ut"]

        self.log_stats = {}
        self.is_unit_testing = is_unit_testing
        self.client = None
        self.user_col = None
        self.log_col = None
        
    def __enter__(self):
        self.client = MongoClient(self.URI)
        db = self.client.get_database(self.DB)
        user_col = db.get_collection("users")
        self.user_col = user_col
        log_col = db.get_collection("logs")
        self.log_col = log_col

        # Warning:  
        # This will delete all the data in the collection!!!
        # Used for testing only!!!
        if self.is_unit_testing:
            self.user_col.delete_many({})
            self.log_col.delete_many({})

        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.client.close()

    def add_user(self, user_immutable):
        user = user_immutable.copy()
        user_oid = None
        self._populate_log_stats_entries(user)
        with self.client.start_session() as session:
            with session.start_transaction():
                try:
                    result = self.user_col.insert_one(user, session=session)
                    user_oid = result.inserted_id
                    log = {"oid": user_oid, 
                            "fn": user["fn"],
                            "ln": user["ln"],
                            "phn": user["phn"]}
                    result = self.log_col.insert_one(log, session=session)
                    log_oid = result.inserted_id

                    user_to_update = {"_id": user_oid}
                    user_log_append = {"$push": {"ll": log_oid}}
                    self.user_col.update_one(user_to_update, user_log_append, session=session)

                    session.commit_transaction()
                    
                except Exception as e:
                    session.abort_transaction()
                    print(e)
                    return None
                
        return user_oid

    # Get object id from the hashed user id
    def get_user_oid(self, user_id):
        user_id = self._xor_encode_decode(user_id)
        return ObjectId(user_id)

    # Get the hashed user id from the object id
    def get_user_id(self, user_oid):
        user_id = self._xor_encode_decode(str(user_oid))
        return user_id

    def get_users(self, filter={}):
        cursor = self.user_col.find(filter)
        users = []
        for user in cursor:
            user_info = {}
            user_info["uid"] = self.get_user_id(user["_id"])

            for field in self.USER_DOC_FIELDS_TO_COPY:
                if field in user:
                    user_info[field] = user[field]
            users.append(user_info)

        return users

    def update_user(self, user_oid, user):
        with self.client.start_session() as session:
            with session.start_transaction():
                try:
                    user_to_update = {"_id": user_oid}
                    user_info = {"$set": user}
                    self.user_col.update_one(user_to_update, user_info, session=session)
                    
                    session.commit_transaction()
                except Exception as e:
                    session.abort_transaction()
                    print(e)
                    return False
        return True

    def append_user_log(self, user_oid, logs):
        self._calculate_log_time_stat(logs)
        
        with self.client.start_session() as session:
            with session.start_transaction():
                try:
                    log_to_update = {"oid": user_oid}
                    log_append = {"$push": {"l": {"$each": logs}}}
                    self.log_col.update_one(log_to_update, log_append, session=session)

                    user_to_update = {"_id": user_oid}
                    for key, value in self.log_stats.items():
                        (year, ww, weekday) = key
                        ld_week_index = ww % self.NUM_OF_WEEKS_TO_TRACK
                        user_update = {"$inc": {f"ly.{year}": value, f"lw.{ww}": value, f"ld.{ld_week_index}.{weekday}": value}}
                        self.user_col.update_one(user_to_update, user_update, session=session)
                    
                    session.commit_transaction()
                except Exception as e:
                    session.abort_transaction()
                    print(e)
                    return False
        return True

    def get_user_all_log_entries(self, user_oid):
        result = self.user_col.find_one({"_id": user_oid})
        if result is None:
            return None
        log_oid_list = result["ll"]
        log_entries = []
        for log_oid in log_oid_list:
            log_result = self.log_col.find_one({"_id": log_oid})
            if log_result is None:
                continue
            for log in log_result["l"]:
                log_entries.append(log)

        return log_entries

    def _calculate_log_time_stat(self, logs):
        for log in logs:
            start_time = log["st"]
            end_time = log["et"]
            duration_in_min = int((end_time - start_time).total_seconds() / 60)
            (year, ww, weekday) = start_time.isocalendar()
            year = year - 2023
            ww = ww - 1
            weekday = weekday - 1
            if (year, ww, weekday) not in self.log_stats:
                self.log_stats[(year, ww, weekday)] = duration_in_min
            else:
                self.log_stats[(year, ww, weekday)] += duration_in_min

    def _populate_log_stats_entries(self, user):
        user["ly"] = [0 for _ in range(self.NUM_OF_YEARS_TO_TRACK)]
        user["lw"] = [0 for _ in range(53)]
        user["ld"] = [[0 for _ in range(7)] for _ in range(self.NUM_OF_WEEKS_TO_TRACK)]
        user["ll"] = []

    def _xor_encode_decode(self, input):
        input_bytes = bytes.fromhex(input)
        output_bytes = bytearray(len(input_bytes))
        for i in range(len(input_bytes)):
                output_bytes[i] = input_bytes[i] ^ self.KEY_HASH[i % self.KEY_HASH_LEN]
        return output_bytes.hex()

    def get_user_and_log_for_unit_testing(self):
        user = list(self.user_col.find({}))
        log = list(self.log_col.find({}))
        return {"user": user, "log": log}
