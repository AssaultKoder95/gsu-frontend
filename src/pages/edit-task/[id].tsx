import React, { useContext } from "react";
import Layout from "../../components/Layout";
import TaskForm from "../../components/TaskForm";
import { TaskContext } from "../../context/TaskContext";
import { useRouter } from "next/router";
import { Task } from "@/src/types/Task";

const EditTask: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    throw new Error("TaskContext is not provided");
  }

  const { getTaskById, editTask } = taskContext;

  const task = getTaskById(id as string);

  const handleSubmit = (updatedTask: Partial<Task>) => {
    editTask(updatedTask);
    router.push("/");
  };

  if (!task) return <Layout>Task not found</Layout>;

  return (
    <Layout>
      <h2>Edit Task</h2>
      <TaskForm onSubmit={handleSubmit} initialTask={task} />
    </Layout>
  );
};

export default EditTask;
