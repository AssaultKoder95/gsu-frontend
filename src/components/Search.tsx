// src/components/SearchBar.tsx
import React from "react";
import styled from "styled-components";

interface SearchBarProps {
  query: string;
  onSearchChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSearchChange }) => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search by title..."
      />
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 750px;
  font-size: 1em;
`;
