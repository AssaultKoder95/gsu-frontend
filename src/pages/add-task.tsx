import React, { useContext } from "react";
import Layout from "../components/Layout";
import TaskForm from "../components/TaskForm";
import { TaskContext } from "../context/TaskContext";
import { useRouter } from "next/router";
import { Task } from "../types/Task";

const CreateTask: React.FC = () => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    throw new Error("TaskContext is not provided");
  }

  const { addTask } = taskContext;
  const router = useRouter();

  const handleSubmit = (task: Task) => {
    addTask(task);
    router.push("/");
  };

  return (
    <Layout>
      <h2>Create New Task</h2>
      <TaskForm onSubmit={handleSubmit} />
    </Layout>
  );
};

export default CreateTask;
