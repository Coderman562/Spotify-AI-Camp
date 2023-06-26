import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import pandas as pd
import random
import requests
import base64
from 
    
client_id = 'f74d125a75774bb886fea891b2324a1a'
client_secret = '4f5e9dc1a61e442bb5f6d3aa83b4d185'

df = pd.read_csv('spotify_songs.csv')

class spotify:
    def __init__(self, client_id, client_secret):
        self.client_id = client_id
        self.client_secret = client_secret
        self.client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
        self.sp = spotipy.Spotify(client_credentials_manager=self.client_credentials_manager)
        self.token = self.get_spotify_token()

    def get_spotify_token(self):
        # Encode the credentials in base64
        credentials = base64.b64encode(
            f"{self.client_id}:{self.client_secret}".encode()).decode()

        headers = {"Authorization": f"Basic {credentials}"}

        data = {"grant_type": "client_credentials"}

        response = requests.post("https://accounts.spotify.com/api/token",
                                headers=headers,
                                data=data)
        response.raise_for_status()

        return response.json()["access_token"]
    
    def get_recommendations_from_genre(self, seed_genres):
        limit = len(seed_genres)
        
        base_url = "https://api.spotify.com/v1/recommendations"
        headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.token}"
        }
        params = {
            "seed_genres": ','.join(seed_genres),
            "limit": limit
        }

        response = requests.get(base_url, headers=headers, params=params)

        if response.status_code != 200:
            raise Exception(f"Request failed with status code {response.status_code}")

        data = response.json()
        tracks = data['tracks']

        return tracks

    def get_track_details(self, track_id):
        # Get the track details
        track = self.sp.track(track_id)

        # Get the preview URL
        preview_url = track['preview_url']

        # Get the Spotify song URL
        spotify_url = track['external_urls']['spotify']

        # Get the image of the song
        image_url = track['album']['images'][0]['url']

        return preview_url, spotify_url, image_url
    
    def get_track_features(self, track_id):
        # Get the audio features for the track
        audio_features = self.sp.audio_features([track_id])[0]

        # Extract the desired attributes
        danceability = audio_features['danceability']
        energy = audio_features['energy']
        key = audio_features['key']
        loudness = audio_features['loudness']
        mode = audio_features['mode']
        speechiness = audio_features['speechiness']
        acousticness = audio_features['acousticness']
        instrumentalness = audio_features['instrumentalness']
        liveness = audio_features['liveness']
        valence = audio_features['valence']
        tempo = audio_features['tempo']

        return danceability, energy, key, loudness, mode, speechiness, acousticness, instrumentalness, liveness, valence, tempo

s = spotify(client_id, client_secret)
seed_genres = ["pop", "rock", "country", "hip-hop", "jazz"]
recommendations = s.get_recommendations_from_genre(seed_genres)

track_features_list = []

for track in recommendations:
    track_name = track['name']
    preview_url = track['preview_url']
    track_image = track['album']['images'][0]['url'] if track['album']['images'] else None
    track_id = track['id']
    explicit = track['explicit']
    danceability, energy, key, loudness, mode, speechiness, acousticness, instrumentalness, liveness, valence, tempo = s.get_track_features(track_id)

    print(f"Track Name: {track_name}")
    print(f"Preview URL: {preview_url}")
    print(f"Track Image: {track_image}")
    print(f"Track ID: {track_id}")
    print(f"Explicit: {explicit}")
    print(f"Danceability: {danceability}")
    print(f"Energy: {energy}")
    print(f"Key: {key}")
    print(f"Loudness: {loudness}")
    print(f"Mode: {mode}")
    print(f"Speechiness: {speechiness}")
    print(f"Acousticness: {acousticness}")
    print(f"Instrumentalness: {instrumentalness}")
    print(f"Liveness: {liveness}")
    print(f"Valence: {valence}")
    print(f"Tempo: {tempo}")
    print("\n")
    
    # Create a dictionary with track features
    track_features = {
        'Explicit': explicit,
        'Danceability': danceability,
        'Energy': energy,
        'Key': key,
        'Loudness': loudness,
        'Mode': mode,
        'Speechiness': speechiness,
        'Acousticness': acousticness,
        'Instrumentalness': instrumentalness,
        'Liveness': liveness,
        'Valence': valence,
        'Tempo': tempo
    }

    # Add the dictionary to the list
    track_features_list.append(track_features)

# Convert the list of dictionaries into a DataFrame
df = pd.DataFrame(track_features_list)

print(df.head(5))

predicted_genres = predict_genre(df)

for genre in predicted_genres:
  print(genre)
    
def get_random_song_id_from_genre(df, genre):
    # Filter the DataFrame to only include songs of the specified genre
    genre_df = df[df['track_genre'] == genre]

    # If there are no songs of the specified genre, return None
    if genre_df.empty:
        print(f"No songs of genre '{genre}' found.")
        return None

    # Select a random song ID from the genre DataFrame
    random_song_id = random.choice(genre_df['track_id'].values)

    return random_song_id



# get_random_song_id_from_genre(df, 'edm')