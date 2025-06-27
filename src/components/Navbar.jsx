
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex justify-around py-4 bg-white shadow text-purple-700">
      <Link to="/" className={location.pathname === "/" ? "font-bold" : ""}>🔍 Lost & Found</Link>
      <Link to="/messages" className={location.pathname === "/messages" ? "font-bold" : ""}>💬 Messaging</Link>
      <Link to="/schedule" className={location.pathname === "/schedule" ? "font-bold" : ""}>📅 Schedule</Link>
      <Link to="/profile" className={location.pathname === "/profile" ? "font-bold" : ""}>👤 Profile</Link>
    </nav>
  );
}
