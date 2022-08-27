import { GlobalStyle } from "./utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.jsx";
import { SearchBar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { PureComponent } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class App extends PureComponent {
  state = {
    query: "",
  };
  handleFormSubmit = (query) => {
    this.setState({ query });
  };
  render() {
    const { query } = this.state;
    return (
      <>
        <ToastContainer autoClose={3000} />

        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <SearchBar onSubmit={this.handleFormSubmit}></SearchBar>
          <ImageGallery query={query}></ImageGallery>
        </ThemeProvider>
      </>
    );
  }
}
