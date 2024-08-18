import React, { useContext } from 'react';
import Layout from '../components/Layout';
import TaskForm from '../components/TaskForm';
import { TaskContext } from '../context/TaskContext';
import { Task } from '../types/Task';

const AddTaskPage: React.FC = () => {
    const taskContext = useContext(TaskContext);

    if (!taskContext) {
        throw new Error('TaskContext is not provided');
    }

    const { addTask } = taskContext;

    const handleAddTask = (task: Task) => {
        addTask(task);
    };

    return (
        <Layout>
            <h2>Add Task</h2>
            <TaskForm onSubmit={handleAddTask} />
        </Layout>
    );
};

export default AddTaskPage;
