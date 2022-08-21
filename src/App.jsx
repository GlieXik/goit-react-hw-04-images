import { GlobalStyle } from "./utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.jsx";
import { SearchBar } from "./components/Searchbar/Searchbar";
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SearchBar></SearchBar>
      </ThemeProvider>
    </>
  );
};
