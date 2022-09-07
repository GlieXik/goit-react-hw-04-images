import { GlobalStyle } from "./utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.jsx";
import { SearchBar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const [query, setQuery] = useState("");

  // const handleFormSubmit = (query) => {
  //   this.setState({ query });
  // };
  const handleFormSubmit = (q) => {
    console.log(q);
    setQuery(q);
  };

  return (
    <>
      <ToastContainer autoClose={3000} />

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SearchBar onSubmit={handleFormSubmit}></SearchBar>
        <ImageGallery query={query}></ImageGallery>
      </ThemeProvider>
    </>
  );
};
