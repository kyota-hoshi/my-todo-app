import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
    padding: 0;
    border: none;
    background-color: white;
    font-size: 20px;
    font-weight: normal;
  }

  body {
    margin: 0;
  }
`