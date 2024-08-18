import React, { useContext } from 'react';
import Layout from '../components/Layout';
import TaskList from '../components/TaskList';
import { TaskContext } from '../context/TaskContext';

const TaskListPage: React.FC = () => {
    const taskContext = useContext(TaskContext);

    if (!taskContext) {
        throw new Error('TaskContext is not provided');
    }

    const { tasks, deleteTask } = taskContext;

    return (
        <Layout>
            <TaskList tasks={tasks} onDelete={deleteTask} />
        </Layout>
    );
};

export default TaskListPage;
