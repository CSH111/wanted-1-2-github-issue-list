import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 10px;
  }
  *{
  list-style: none;
  box-sizing: border-box;
    
  }
  body{
      margin:0;
      overflow-y:scroll;
      font-size: 1.6rem;
    }
  ul{
    padding: 0;
  }
`;

export default GlobalStyles;
