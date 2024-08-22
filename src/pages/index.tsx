import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import TaskList from "../components/TaskList";
import Filter from "../components/Filter";
import { TaskContext } from "../context/TaskContext";
import Link from "next/link";
import styled from "styled-components";
import SearchBar from "../components/Search";

const Home: React.FC = () => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    throw new Error("TaskContext is not provided");
  }

  const { tasks, deleteTask } = taskContext;
  const [statusFilter, setStatusFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      <HeaderGroup>
        <SearchBar query={searchQuery} onSearchChange={setSearchQuery} />
        <Filter status={statusFilter} onStatusChange={setStatusFilter} />
        <Link href="/add-task" passHref>
          <CreateButton>Create New Task</CreateButton>
        </Link>
      </HeaderGroup>
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        statusFilter={statusFilter}
        searchQuery={searchQuery}
      />
    </Layout>
  );
};

export default Home;

const CreateButton = styled.a`
  display: inline-block;
  background-color: #28a745;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

const HeaderGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
