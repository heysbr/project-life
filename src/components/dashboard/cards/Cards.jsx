import React from "react";

export default function Cards({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.name} className="bg-gray-900">
          {item.name}
        </div>
      ))}
    </div>
  );
}
