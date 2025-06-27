
import React, { useState } from "react";

export default function LostFoundPage() {
  const [showMap, setShowMap] = useState(true);
  const [items, setItems] = useState([
    { id: 1, title: "Black Wallet", status: "Lost", location: "Library", date: "2025-06-20" },
    { id: 2, title: "UiTM ID Card", status: "Found", location: "Cafeteria", date: "2025-06-22" }
  ]);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-purple-700">Lost & Found Items</h2>
        <button onClick={() => setFormOpen(!formOpen)} className="bg-purple-500 text-white px-3 py-1 rounded">
          {formOpen ? "Close" : "Report Item"}
        </button>
      </div>

      {formOpen && (
        <form className="bg-white p-4 my-4 rounded shadow space-y-2">
          <input type="text" placeholder="Item Title" className="w-full border p-2 rounded" />
          <select className="w-full border p-2 rounded">
            <option>Lost</option>
            <option>Found</option>
          </select>
          <input type="text" placeholder="Location Found/Lost" className="w-full border p-2 rounded" />
          <input type="date" className="w-full border p-2 rounded" />
          <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
      )}

      <div className="my-4">
        <button onClick={() => setShowMap(!showMap)} className="text-purple-600 underline mb-2">
          {showMap ? "Hide Map" : "Show Map"}
        </button>
        {showMap && (
          <iframe
            title="Map Preview"
            src="https://www.google.com/maps?q=3.0738,101.5183&z=15&output=embed"
            width="100%"
            height="300"
            className="rounded"
            loading="lazy"
          ></iframe>
        )}
      </div>

      <ul className="space-y-2">
        {items.map(item => (
          <li key={item.id} className="bg-white p-3 shadow rounded">
            <strong>{item.status}:</strong> {item.title} <br />
            <small>{item.location} – {item.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
