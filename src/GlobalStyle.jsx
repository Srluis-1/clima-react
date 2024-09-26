import { createGlobalStyle } from 'styled-components';
import fundo from "./assets/iamgen/fundo.jpg";

const GlobalStyle = createGlobalStyle`
body {
    background-image: url(${fundo});
    background-size: cover;
    background-position: center;
    align-items: center;
    display: flex;
    justify-content: center;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    width: 100%;
  }

`
export default GlobalStyle
