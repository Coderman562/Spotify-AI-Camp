from flask import Flask, render_template, request
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["mydatabase"]
users = db["users"]

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/submit-form", methods=["POST"])
def submit_form():
    name = request.json["name"]
    email = request.json["email"]
    user = {"name": name, "email": email}
    result = users.insert_one(user)
    return {"message": "Success!"}

if __name__ == "__main__":
    app.run(debug=True)
