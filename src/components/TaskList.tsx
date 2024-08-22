import React from "react";
import styled from "styled-components";
import { Task } from "../types/Task";
import Link from "next/link";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  statusFilter: string;
  searchQuery: string;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onDelete,
  statusFilter,
  searchQuery,
}) => {
  let filteredTasks: Task[] = tasks;

  if (statusFilter) {
    filteredTasks = filteredTasks.filter(
      (task) => task.status === statusFilter,
    );
  }

  if (searchQuery) {
    filteredTasks = filteredTasks.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  console.log(searchQuery, statusFilter, tasks);

  return (
    <ListContainer>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskItem key={task.id}>
            <TaskTitle>{task.title}</TaskTitle>
            <TaskDescription>{task.description}</TaskDescription>
            <TaskStatus>Status: {task.status}</TaskStatus>
            <ButtonGroup>
              <StyledLink href={`/edit-task/${task.id}`} passHref>
                <EditButton>Edit</EditButton>
              </StyledLink>
              <StyledLink href={""}>
                <DeleteButton onClick={() => onDelete(task.id)}>
                  Delete
                </DeleteButton>
              </StyledLink>
            </ButtonGroup>
            <TaskInfo>
              {task.createdAt &&
                `Created: ` + new Date(task.createdAt).toLocaleString()}
            </TaskInfo>
          </TaskItem>
        ))
      ) : (
        <NoTasksMessage>No tasks found.</NoTasksMessage>
      )}
    </ListContainer>
  );
};

export default TaskList;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px auto;
  max-width: 600px;
`;

const TaskItem = styled.li`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  position: relative;
`;

const TaskTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const TaskDescription = styled.p`
  font-size: 1em;
  margin-bottom: 15px;
`;

const TaskStatus = styled.p`
  font-size: 0.9em;
  font-weight: bold;
  color: #666;
  margin-bottom: 10px;
`;

const TaskInfo = styled.p`
  font-size: 0.7em;
  font-weight: bold;
  font-style: italic;
  color: #666;
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const EditButton = styled.button`
  background-color: #0070f3;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
  text-decoration: none;
  margin: 0.5em;

  &:hover {
    background-color: #005bb5;
  }
`;

const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;
  text-decoration: none;
  margin: 0.5em;

  &:hover {
    background-color: #cc0000;
  }
`;

const NoTasksMessage = styled.p`
  text-align: center;
  font-size: 1.2em;
  color: #666;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
