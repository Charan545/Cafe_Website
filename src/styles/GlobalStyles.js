// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #f9f9f9; /* light background */
    color: #333;  /* dark text for good readability */
    line-height: 1.6;
    padding: 0 20px;
  }

  h1, h2, h3 {
    font-family: 'Playfair Display', serif;
    color: #333;
  }
`;

export default GlobalStyles;
