// components/Sidebar.jsx
import React, { useState } from "react";

const Sidebar = ({ projects, onSelect }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <ul>
        {projects.map((proj) => (
          <li key={proj.id} className="mb-2">
            <div
              className="cursor-pointer font-semibold hover:underline"
              onClick={() =>
                setOpenDropdown(openDropdown === proj.id ? null : proj.id)
              }
            >
              {proj.title}
            </div>

            {openDropdown === proj.id && (
              <ul className="ml-4 mt-1 text-sm">
                {proj.tasks && proj.tasks.length > 0 ? (
                  proj.tasks.map((task, i) => (
                    <li key={i} className="text-gray-300">• {task.name}</li>
                  ))
                ) : (
                  <li className="text-gray-400 italic">No tasks yet</li>
                )}
                <li
                  className="mt-2 text-blue-400 hover:underline cursor-pointer"
                  onClick={() => onSelect(proj.id)}
                >
                  ➤ Open Project
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
