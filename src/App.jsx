import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import HomePage from "./HomePage";
import FormPage from "./FormPage";
import VolunteerPage from "./VolunteerPage"
import AudioComponent from "./AudioComponent";
import SpotifyComponent from "./SpotifyComponent";

function App() {
  const previewUrl = 'https://p.scdn.co/mp3-preview/5d4c6f0b903074f5cc6cef58d2c2f67abb179d75?cid=f74d125a75774bb886fea891b2324a1a';
  const imageUrl = 'https://i.scdn.co/image/ab67616d0000b2732aa56b66dfc0e631ceca0ce2';


  return (
    // <Router>
    //   <div className="App">
    //     <SideBar />
    //     <TopBar />
    //     <main>
    //       <Routes>
    //         <Route index element={<HomePage />} />
    //         <Route path="/volunteer" element={<VolunteerPage />} />
    //         <Route path="/form" element={<FormPage />} />
    //       </Routes>
    //     </main>
    //   </div>
    // </Router>
    <div>
      {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="flex items-center justify-center w-full max-w-md p-8 space-x-4 bg-white rounded shadow">
          The Song Name (clickable as link to song)
          <audio controls className="w-full">
            <source src="https://p.scdn.co/mp3-preview/cf7ea7d5486cfbe29b8d8c5236e582d8cc580afc?cid=f74d125a75774bb886fea891b2324a1a" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div> */}
      {/* <AudioComponent
        previewUrl="https://p.scdn.co/mp3-preview/699577d8301cf40f0739d03d34939c2a183ae933?cid=f74d125a75774bb886fea891b2324a1a"
        spotifyUrl="https://open.spotify.com/track/5Ju1yW3DwkRueqfGU7jQWi"
        imageUrl="https://i.scdn.co/image/ab67616d0000b27363cc00a0b6faa32c06528716"
      /> */}
      
      <SpotifyComponent previewUrl={previewUrl} imageUrl={imageUrl} />

    </div>

  );
}

export default App;
