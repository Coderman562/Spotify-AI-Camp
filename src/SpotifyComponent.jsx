import React from 'react';
import './styles.css';

const SpotifyComponent = ({ previewUrl, imageUrl }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-64 h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <img className="w-full h-full object-cover" src={imageUrl} alt="Album Cover" />
      </div>
      <audio className="ml-4 audio-player" controls>
        <source src={previewUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default SpotifyComponent;
