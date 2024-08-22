import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Helvetica', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
