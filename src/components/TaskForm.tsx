import React, { useState, useEffect } from 'react';
import { Task } from '../types/Task';

interface TaskFormProps {
    onSubmit: (task: Task) => void;
    initialTask?: Task;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialTask }) => {
    const [title, setTitle] = useState(initialTask?.title || '');
    const [description, setDescription] = useState(initialTask?.description || '');
    const [status, setStatus] = useState(initialTask?.status as Task['status'] || 'pending');

    useEffect(() => {
        if (initialTask) {
            setTitle(initialTask.title);
            setDescription(initialTask.description);
            setStatus(initialTask.status);
        }
    }, [initialTask]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ id: initialTask?.id || `${Date.now()}`, title, description, status });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label>Status</label>
                <select value={status} onChange={(e) => setStatus(e.target.value as Task['status'])}>
                    <option value="todo">Pending</option>
                    <option value="inprogress">In Progress</option>
                    <option value="complete">Completed</option>
                    <option value="backlog">Backlog</option>
                    <option value="blocked">Blocked</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TaskForm;
