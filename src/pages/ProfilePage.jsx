
import React from "react";

export default function ProfilePage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-purple-700 mb-4">My Profile</h2>
      <div className="bg-white p-4 rounded shadow">
        <p><strong>Name:</strong> UiTM Student</p>
        <p><strong>Campus:</strong> Shah Alam</p>
        {/* TODO: Integrate Firebase Auth (Google Sign-In / UiTM Email) */}
        <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">Log Out</button>
      </div>
    </div>
  );
}
