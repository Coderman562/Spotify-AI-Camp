import joblib
import numpy as np
import pandas as pd
import os
import json
from sklearn.preprocessing import LabelEncoder, StandardScaler


def predict_genre(input_data):
    # Load the trained model
    model = joblib.load('trained_model.joblib')

    # Load the label encoder
    label_encoder = joblib.load('label_encoder.joblib')

    # Select the non-numerical columns
    non_numerical_cols = input_data.select_dtypes(include=['object']).columns

    # Perform one-hot encoding on the non-numerical columns
    input_data_encoded = pd.get_dummies(input_data, columns=non_numerical_cols)

    # Standardize the features
    scaler = StandardScaler()
    input_data_scaled = scaler.fit_transform(input_data_encoded)

    # Make predictions on the input data
    y_pred_encoded = model.predict(input_data_scaled)

    # Inverse transform the encoded predictions
    y_pred = label_encoder.inverse_transform(y_pred_encoded)

    return y_pred