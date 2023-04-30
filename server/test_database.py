from datetime import datetime, timedelta

class database:
    def __init__(self):
        self.users_db=[]
        self.logs_db={}

    # Add informations
    def add_user(self, firstName, middleName, lastName, phoneNumber, email, address, socialNetworkUrl):
        four_weeks_of_daily_log = [[0 for x in range(7)] for y in range(4)]
        weekly_log_of_a_year = [0 for x in range(52)]
        log_of_10_years = [0 for x in range(10)]
        user = {"fn": firstName, 
                "mn": middleName, 
                "ln": lastName, 
                "phn": phoneNumber, 
                "eml": email, 
                "addr": address, 
                "sc": [{"url": socialNetworkUrl}],
                "ld": four_weeks_of_daily_log,
                'lw': weekly_log_of_a_year,
                'ly': log_of_10_years
                }
        self.users_db.append(user)

        self.logs_db[str(len(self.users_db)-1)] = { "fn": firstName, 
                "mn": middleName, 
                "ln": lastName, 
                "phn": phoneNumber, 
                "l" : []
                }
        return str(len(self.users_db)-1)
    
    def add_log_entry(self, user_doc_id, start_time, end_time):
        self.logs_db[user_doc_id]["l"].append({"st": start_time, "et": end_time})
    
    def add_hours_logged_entry(self, user_doc_id, hoursVolunteered, date):
        # Parse the date input and create a datetime object with a time of midnight
        end_time = datetime.strptime(date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
        
        # Convert hours to minutes and subtract the time from the end_time to get the start_time
        minutes_volunteered = timedelta(minutes=(hoursVolunteered * 60))
        start_time = end_time - minutes_volunteered
        
        # Add the log entry to the database
        self.add_log_entry(user_doc_id, start_time, end_time)

    # Get informations
    def get_user(self, user_doc_id):
        return self.users_db[user_doc_id]

    def get_log_entry(self, user_doc_id, log_entry_id):
        return self.logs_db[user_doc_id]["l"][log_entry_id]
    
    def get_user_log_entry(self, user_doc_id):
        return self.logs_db[user_doc_id]["l"]

data = database()

def get_database():
    return data

# data.add_user("John", "Doe", "Smith", "1234567890", "john@gmail.com", "1234 Main St", "https://www.facebook.com/john.smith")
# data.add_log_entry("0", "2019-01-01 00:00:00", "2019-01-01 00:00:00")

# print(data.logs_db["0"]["l"][0]["st"])

