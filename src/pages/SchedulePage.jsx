
import React, { useState } from "react";

export default function SchedulePage() {
  const [events, setEvents] = useState([
    { id: 1, title: "Final Exam: Web Dev", date: "2025-06-30", time: "09:00" },
    { id: 2, title: "Class: AI Project", date: "2025-07-01", time: "14:00" }
  ]);

  const handleImport = () => {
    // TODO: Add CSV or .ics import
    alert("Import feature coming soon!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-purple-700 mb-4">Class & Exam Schedule</h2>
      <button onClick={handleImport} className="bg-pink-500 text-white px-4 py-2 rounded mb-4">Import Schedule</button>
      <ul className="space-y-2">
        {events.map(e => (
          <li key={e.id} className="bg-white p-3 shadow rounded">
            <strong>{e.date} @ {e.time}</strong><br />{e.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
