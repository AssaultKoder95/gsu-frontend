import React from "react";
import styled from "styled-components";

interface FilterProps {
  status: string;
  onStatusChange: (status: string) => void;
}

const Filter: React.FC<FilterProps> = ({ status, onStatusChange }) => {
  return (
    <FilterContainer>
      <Label>Filter by Status:</Label>
      <Select value={status} onChange={(e) => onStatusChange(e.target.value)}>
        <option value="">All</option>
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value="complete">Completed</option>
        <option value="blocked">Blocked</option>
        <option value="backlog">Backlog</option>
      </Select>
    </FilterContainer>
  );
};

export default Filter;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
`;
