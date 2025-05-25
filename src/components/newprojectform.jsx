import React, { useState } from 'react';

const NewProjectForm = ({ onClose,onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    duration: '',
    guide: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // send to Header ➝ Dashboard
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">New Project Details</h2>
        <form onSubmit={handleSubmit}>
          <input name="title" placeholder="Title" onChange={handleChange} className="w-full mb-2 p-2 border rounded" required />
          <input name="duration" placeholder="Duration" onChange={handleChange} className="w-full mb-2 p-2 border rounded" required />
          <input name="guide" placeholder="Guide Name" onChange={handleChange} className="w-full mb-2 p-2 border rounded" required />
          <label className="block mb-1">Start Date:</label>
          <input name="startDate" type="date" onChange={handleChange} className="w-full mb-2 p-2 border rounded" required />
          <label className="block mb-1">End Date:</label>
          <input name="endDate" type="date" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required />
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProjectForm;
