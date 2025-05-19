// components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <button className="bg-green-500 text-white px-4 py-2 rounded">+ New Task</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">+ New Project</button>
      <div>🔔 Notifications</div>
    </div>
  );
};

export default Header;