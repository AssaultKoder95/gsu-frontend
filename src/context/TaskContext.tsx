import React, { createContext, useState, ReactNode, useEffect } from "react";
import { Task } from "../types/Task";

interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  editTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  getTaskById: (id: string) => Task | undefined;
}

export const TaskContext = createContext<TaskContextProps | undefined>(
  undefined,
);

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/tasks`;

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setTasks(data);
  };

  const addTask = async (task: Task) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const newTask = await response.json();
    setTasks([newTask, ...tasks]);
  };

  const editTask = async (updatedTask: Task) => {
    const response = await fetch(`${API_URL}/${updatedTask.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    const updatedTaskResponse = await response.json();
    setTasks(
      tasks.map((task) =>
        task.id === updatedTaskResponse.id ? updatedTaskResponse : task,
      ),
    );
  };

  const deleteTask = async (id: string) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const getTaskById = (id: string) => tasks.find((task) => task.id === id);

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, editTask, deleteTask, getTaskById }}
    >
      {children}
    </TaskContext.Provider>
  );
};
