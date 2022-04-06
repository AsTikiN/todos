import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  :root {
    --main-font: "Roboto";
    --white: #ffffff;
    --headline-color: #323232;
    --active-color: #4E4E4E;
    --inactive-color: #C4C4C4;
    --border-color: #ECECEC;
    --accent-color: #3D82EB;
    --error-color: #EB3D3D;
    --success-color: #4BB543;
    --checkbox-color: #CBCBCB;
  }

  body {
    margin: 0;
  }

  *,
  *:before, 
  *:after {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`