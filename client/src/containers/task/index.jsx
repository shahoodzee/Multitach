import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TaskContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const mockTasks = [
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 1, title: "Task 1", description: "Description for Task 1" },
      ];
      setTasks(mockTasks);
      setLoading(false);
    }, 2000);
  }, []);

  const openModal = (task) => {
    setSelectedTask(task);
  };

  const closeModal = () => {
    setSelectedTask(null);
  };

  return (
    <div className="container mx-auto p-4 relative">
      <Link to="/post-task">
        <button className="bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden mx-6 px-4 py-2 rounded-md float-right z-10 hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <span className="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Start New Task
        </button>
      </Link>

      <div className="mx-4 my-4 px-2 py-2">
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {loading ? (
            <p>Loading tasks...</p>
          ) : tasks.length === 0 ? (
            <p>No tasks available.</p>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className="bg-slate-600 p-4 rounded-lg shadow-md cursor-pointer"
                onClick={() => openModal(task)}
              >
                <h2 className="text-xl font-bold text-white">{task.title}</h2>
                <p className="text-slate-300">{task.description}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {selectedTask && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-slate-600 rounded-lg p-8 z-30">
            <h2 className="text-xl font-bold text-white mb-4">
              {selectedTask.title}
            </h2>
            <p className="text-slate-300">{selectedTask.description}</p>
            <button
              className="bg-cyan-950 text-cyan-400 border border-cyan-400 px-4 py-2 rounded-md mt-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskContainer;
