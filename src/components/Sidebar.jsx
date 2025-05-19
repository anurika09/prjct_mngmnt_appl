// components/Sidebar.jsx
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <ul>
        <li className="mb-2 hover:underline cursor-pointer">Project A</li>
        <li className="mb-2 hover:underline cursor-pointer">Project B</li>
      </ul>
      <div className="mt-6">
        <h3 className="text-xl">Profile</h3>
      </div>
    </div>
  );
};

export default Sidebar;