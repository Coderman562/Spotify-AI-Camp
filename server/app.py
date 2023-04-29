from flask import Flask, render_template, request, jsonify, send_from_directory, Response
from flask_cors import CORS
from pymongo import MongoClient
from test_database import get_database
from mongodb_engine import DB
import os
import requests

# Note: Always use /api in react fetches before each route

# client = MongoClient("mongodb://localhost:27017/")
# db = client["mydatabase"]
db = get_database()
use_py_monogo_engine = True

app = Flask(__name__, static_folder="static", template_folder="templates")
#app = Flask(__name__, static_folder="../src", template_folder="templates")

@app.route('/<path:path>')
def send_static(path):
    return send_from_directory(app.static_folder, path)

# CORS(app)

@app.route("/")
def index():
    response = send_from_directory(app.static_folder, "index.html")
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route("/submit-form", methods=["POST"])
def submit_form():
    data = request.json
    firstName = data["firstName"]
    middleName = data.get("middleName", "")
    lastName = data["lastName"]
    hoursVolunteered = float(data["hoursVolunteered"])
    date = data["date"]
    phoneNumber = data.get("phoneNumber", "")
    email = data.get("email", "")
    address = data.get("address", "")
    notes = data.get("notes", "")
    
    # Do something with the data (e.g. store it in a database)
    user_doc_id = db.add_user(firstName, middleName, lastName, phoneNumber, email, address, None)
    db.add_hours_logged_entry(user_doc_id, hoursVolunteered, date)
    
    print(db.logs_db[user_doc_id])
    return jsonify({"message": "Success!"})

@app.route('/get-table-data', methods=["GET"])
@app.route('/api/get-table-data', methods=["GET"])
def get_table_data():
    if ( use_py_monogo_engine ):
        # Get the data from the database
        users = []
        with DB() as db:
            users = db.get_users({})

        return jsonify(users)
    else:
        try:
            response = requests.get('https://cuf0l744pj.execute-api.us-east-1.amazonaws.com/default/get_users')
            if response.status_code == 200:
                # Create a new response with the Access-Control-Allow-Origin header
                flask_response = jsonify(response.json())
                flask_response.headers.add("Access-Control-Allow-Origin", "*")
                return flask_response
            else:
                return Response('Error fetching data from the API', status=500)
        except Exception as e:
            print(e)
            return Response('Error fetching data from the API', status=500)        


if __name__ == "__main__":
    app.run(debug=True, port=6173)
