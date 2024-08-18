import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  nav a {
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    nav a {
      display: block;
      margin-bottom: 0.5rem;
    }
  }
`;
