
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CampusSelector from "./components/CampusSelector";
import LostFoundPage from "./pages/LostFoundPage";
import MessagesPage from "./pages/MessagesPage";
import SchedulePage from "./pages/SchedulePage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app bg-gradient-to-b from-pink-200 to-purple-200 min-h-screen text-gray-800">
        <Navbar />
        <CampusSelector />
        <Routes>
          <Route path="/" element={<LostFoundPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
