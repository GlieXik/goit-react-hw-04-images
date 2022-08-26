import { PureComponent } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import * as SC from "./ImageGallery.styled";
import { fetchData } from "../../api/fetchData";
import { Loader } from "../Loader/Loader";
export class ImageGallery extends PureComponent {
  state = {
    data: null,
    error: null,
    status: "idle",
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ status: "pending" });

      fetchData(this.props.query)
        .then(({ data }) => {
          this.setState({
            data: data.hits,
            status: "resolved",
          });
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
    const { error, status } = this.state;
    if (status === "idle") {
      return <h1>{error}</h1>;
    }

    if (status === "pending") {
      return <Loader></Loader>;
    }

    if (status === "rejected") {
      return <h1>Not found</h1>;
    }

    if (status === "resolved") {
      return <SC.ImageGallery>{this.createItems()}</SC.ImageGallery>;
    }
  }
}
