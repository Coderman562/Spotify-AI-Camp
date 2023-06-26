from flask import Flask, render_template, request, jsonify, send_from_directory, Response
from flask_cors import CORS
import os
import requests

app = Flask(__name__, static_folder="static", template_folder="templates")

@app.route('/<path:path>')
def send_static(path):
    return send_from_directory(app.static_folder, path)

# CORS(app)

@app.route("/")
def index():
    response = send_from_directory(app.static_folder, "index.html")
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route("/get-5-songs", methods=["GET"])
def index():
    response = send_from_directory(app.static_folder, "index.html")
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

