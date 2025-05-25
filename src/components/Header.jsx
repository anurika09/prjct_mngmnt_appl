// components/Header.jsx
import React, { useState } from "react";
import NewProjectForm from "./newprojectform";

const Header = ({ addProject }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <button className="bg-green-500 text-white px-4 py-2 rounded">+ New Task</button>

      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        + New Project
      </button>

      {showForm && (
        <NewProjectForm
          onClose={() => setShowForm(false)}
          onSubmit={(data) => {
            addProject(data);
            setShowForm(false);
          }}
        />
      )}

      <div>🔔 Notifications</div>
    </div>
  );
};

export default Header;
