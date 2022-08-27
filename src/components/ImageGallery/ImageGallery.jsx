import { PureComponent } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import * as SC from "./ImageGallery.styled";
import { fetchData } from "../../api/fetchData";
import { Loader } from "../Loader/Loader";
import { ButtonMore } from "../Buttons/ButtonMore";

export class ImageGallery extends PureComponent {
  state = {
    data: null,
    error: null,
    status: "idle",
    page: 1,
  };
  loadMore = (e) => {
    e.preventDefault();

    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevProps.query !== this.props.query
    ) {
      this.setState({ status: "pending", page: 1 });

      fetchData(this.props.query, this.state.page)
        .then(({ data }) => {
          // this.setState({
          //   data: data.hits,
          //   status: "resolved",
          // });
          this.setState((prevState) => ({
            data: data.hits,
            status: "resolved",
          }));
        })
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }
  createItems = () => {
    return this.state.data.map((item) => (
      <ImageGalleryItem
        key={item.id}
        previewURL={item.webformatURL}
        largeImageURL={item.largeImageURL}
      ></ImageGalleryItem>
    ));
  };
  render() {
    const { status } = this.state;
    if (status === "idle") {
      return;
    }

    if (status === "pending") {
      return <Loader></Loader>;
    }

    if (status === "rejected") {
      return <h1>Not found</h1>;
    }

    if (status === "resolved") {
      return (
        <>
          <SC.ImageGallery>{this.createItems()}</SC.ImageGallery>
          <ButtonMore onClick={this.loadMore}></ButtonMore>
        </>
      );
    }
  }
}
