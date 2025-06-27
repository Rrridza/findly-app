
import React, { useState } from "react";

const campuses = [
  "Shah Alam", "Puncak Alam", "Puncak Perdana", "Arau", "Machang", "Lendu",
  "Jengka", "Kota Samarahan", "Sri Iskandar", "Dungun", "Alor Gajah", "Kuala Pilah",
  "Kuala Terengganu", "Raub", "Segamat", "Tapah", "Bukit Besi", "Kota Bharu",
  "Kuantan", "Melaka City", "Penang", "Sabak Bernam"
];

export default function CampusSelector() {
  const [selected, setSelected] = useState("Shah Alam");

  return (
    <div className="overflow-x-auto p-2 bg-purple-100 flex space-x-2">
      {campuses.map(campus => (
        <button
          key={campus}
          className={\`px-3 py-1 rounded-full \${selected === campus ? "bg-purple-500 text-white" : "bg-white"}\`}
          onClick={() => setSelected(campus)}
        >
          {campus}
        </button>
      ))}
    </div>
  );
}
