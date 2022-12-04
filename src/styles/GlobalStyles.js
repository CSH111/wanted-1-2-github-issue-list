import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
  list-style: none;
  box-sizing: border-box;
    
  }
  body{
      margin:0;
      overflow-y:scroll;
    }
  ul{
    padding: 0;
  }
`;

export default GlobalStyles;
