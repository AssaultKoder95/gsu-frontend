import React from "react";
import styled from "styled-components";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container>
      <Header>
        <h1>Task Management Dashboard</h1>
      </Header>
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  padding: 20px 0;
  margin-bottom: 20px;

  h1 {
    font-size: 2.5em;
    color: #333;
  }
`;

const Main = styled.main`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;
