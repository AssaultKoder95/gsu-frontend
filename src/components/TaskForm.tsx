import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Task } from "../types/Task";

interface TaskFormProps {
  onSubmit: (task: Partial<Task>) => void;
  initialTask?: Task;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialTask }) => {
  const [title, setTitle] = useState(initialTask?.title || "");
  const [description, setDescription] = useState(
    initialTask?.description || "",
  );
  const [status, setStatus] = useState(
    (initialTask?.status as Task["status"]) || "todo",
  );

  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title);
      setDescription(initialTask.description);
      setStatus(initialTask.status);
    }
  }, [initialTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: initialTask?.id,
      title,
      description,
      status,
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormRow>
        <Label>Title</Label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </FormRow>
      <FormRow>
        <Label>Description</Label>
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </FormRow>
      <FormRow>
        <Label>Status</Label>
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value as Task["status"])}
          required
        >
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="complete">Completed</option>
          <option value="backlog">Backlog</option>
          <option value="blocked">Blocked</option>
        </Select>
      </FormRow>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
};

export default TaskForm;

const FormContainer = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 500px;
`;

const FormRow = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;
