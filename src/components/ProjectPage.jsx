// components/ProjectPage.jsx
import React, { useState } from "react";
import TaskForm from "./TaskForm";

const ProjectPage = ({ project, onAddTask, goBack }) => {
  const [showForm, setShowForm] = useState(false);

  // Safe default in case project.tasks is undefined
  const tasks = project?.tasks ?? [];

  return (
    <div className="flex flex-col flex-grow p-6 bg-gray-50">
      {/* Back button */}
      <button
        onClick={goBack}
        className="mb-4 text-blue-500 hover:underline text-left"
      >
        ← Back to Dashboard
      </button>

      {/* Project title */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{project.title}</h2>

      {/* Create Task Button */}
      <button
        onClick={() => setShowForm(true)}
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-max"
      >
        + Create New Task
      </button>

      {/* Task Form */}
      {showForm && (
        <TaskForm
          onClose={() => setShowForm(false)}
          onSubmit={(task) => {
            onAddTask(task);     // ✅ Add task to current project
            setShowForm(false);  // ✅ Close popup
          }}
        />
      )}

      {/* Tasks list */}
      <div className="space-y-4">
        {tasks.length === 0 ? (
          <p className="text-gray-500 italic">No tasks yet.</p>
        ) : (
          tasks.map((task, i) => (
            <div key={i} className="p-4 bg-white rounded shadow">
              <h4 className="font-semibold text-lg">{task.name}</h4>
              <p className="text-sm text-gray-600">{task.details}</p>
              <p className="text-xs text-gray-400 mt-1">
                Deadline: {task.deadline}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
