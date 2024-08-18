import React from 'react';
import { Task } from '../types/Task';
import Link from 'next/link';

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>Status: {task.status}</p>
                    <Link href={`/edit-task/${task.id}`}>
                        <button>Edit</button>
                    </Link>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
