import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import SideBar from "./SideBar";
import HomePage from "./HomePage";
import FormPage from "./FormPage";
import VolunteerPage from "./VolunteerPage"

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <main>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/form" element={<FormPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
