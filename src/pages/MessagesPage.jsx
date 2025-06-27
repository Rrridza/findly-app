
import React, { useState } from "react";

export default function MessagesPage() {
  const [conversations] = useState([
    { id: 1, name: "Aisyah", preview: "Did you find the water bottle?" },
    { id: 2, name: "Farid", preview: "Thanks for returning my wallet!" }
  ]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-purple-700 mb-4">Messages</h2>
      <ul className="space-y-2">
        {conversations.map(c => (
          <li key={c.id} className="bg-white p-3 shadow rounded">
            <strong>{c.name}</strong>: {c.preview}
          </li>
        ))}
      </ul>
      {/* TODO: Integrate Firebase chat messaging (Firestore) */}
    </div>
  );
}
