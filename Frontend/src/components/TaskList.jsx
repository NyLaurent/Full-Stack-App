// src/components/TaskList.jsx
import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/TaskService';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Title</th>
            <th className="py-2">Description</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="py-2">{task.title}</td>
              <td className="py-2">{task.description}</td>
              <td className="py-2">{task.status}</td>
              <td className="py-2">
                <Link to={`/edit/${task.id}`} className="text-blue-500">Edit</Link>
                <button className="text-red-500 ml-2" onClick={() => deleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
