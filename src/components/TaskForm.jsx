// components/TaskForm.jsx
import React, { useState } from "react";

const TaskForm = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    details: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h3 className="text-lg font-semibold mb-4">Create New Task</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Task Name"
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <textarea
            name="details"
            placeholder="Task Details"
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <label className="block mb-1">Deadline</label>
          <input
            type="date"
            name="deadline"
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
