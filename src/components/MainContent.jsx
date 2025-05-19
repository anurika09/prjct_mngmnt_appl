// components/MainContent.jsx
import React from "react";

const MainContent = () => {
  return (
    <div className="p-4 overflow-auto">
      <h2 className="text-2xl font-bold mb-4">Upcoming Deadlines</h2>
      <ul className="list-disc pl-6">
        <li>Project A - Task 1: 5th May</li>
        <li>Project B - Scrum Review: 10th May</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">Resources</h2>
      <ul className="list-disc pl-6">
        <li><a href="https://example.com/resource1.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600">Project Guidelines</a></li>
        <li><a href="https://example.com/scrum-guide.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600">Scrum Guide</a></li>
      </ul>
    </div>
  );
};

export default MainContent;
