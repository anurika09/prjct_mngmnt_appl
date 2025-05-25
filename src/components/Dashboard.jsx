import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MainContent from "./MainContent";
import ProjectPage from "./ProjectPage"; // ← You'll create this
import TaskForm from "./TaskForm"; // ← You'll create this


const Dashboard = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project A",
      tasks: [],
    },
    {
      id: 2,
      title: "Project B",
      tasks: [],
    },
  ]);

  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const addProject = (data) => {
    const newProj = {
      id: Date.now(),
      title: data.title,
      tasks: [], // ✅ make sure this always exists
    };
    setProjects([...projects, newProj]);
  };
  

  const addTaskToProject = (task) => {
    const updated = projects.map((proj) =>
      proj.id === selectedProjectId
        ? { ...proj, tasks: [...proj.tasks, task] }
        : proj
    );
    setProjects(updated);
  };

  const selectedProject = projects.find((p) => p.id === selectedProjectId);

  return (
    <div className="flex h-screen">
      {selectedProjectId ? (
        <ProjectPage
          project={selectedProject}
          onAddTask={addTaskToProject}
          goBack={() => setSelectedProjectId(null)}
        />
      ) : (
        <>
          <Sidebar
            projects={projects}
            onSelect={(id) => setSelectedProjectId(id)}
          />
          <div className="flex flex-col flex-grow">
            <Header addProject={addProject} />
            <MainContent />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
