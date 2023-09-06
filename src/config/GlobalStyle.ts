import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #B8B8FF;
    --lightPurple: #9381FF;
    --grey: #50514F;
    --black: #272D2D;
    --white: #F8F7FF;
  }

  * {
    border: none;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    margin: 0;
    padding: 0;
  }

`


export default GlobalStyle
