import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
  body {
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    }
    ul,ol{
      padding: 0;
      margin: 0;
      list-style: none;
  }
  p{
    margin: 0;
  }
  *,
*::before,
*::after {
  box-sizing: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
