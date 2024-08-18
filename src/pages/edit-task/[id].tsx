import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import TaskForm from '../../components/TaskForm';
import { TaskContext } from '../../context/TaskContext';
import { Task } from '../../types/Task';

const EditTaskPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const taskContext = useContext(TaskContext);

    if (!taskContext) {
        throw new Error('TaskContext is not provided');
    }

    const { getTaskById, editTask } = taskContext;

    const task = getTaskById(id as string);

    const handleEditTask = (updatedTask: Task) => {
        editTask(updatedTask);
        router.push('/');
    };

    return (
        <Layout>
            <h2>Edit Task</h2>
            {task ? <TaskForm onSubmit={handleEditTask} initialTask={task} /> : <p>Loading...</p>}
        </Layout>
    );
};

export default EditTaskPage;
