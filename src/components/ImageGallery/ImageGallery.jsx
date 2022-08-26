import { PureComponent } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import * as SC from "./ImageGallery.styled";
import { fetchData } from "../../api/fetchData";
import { Loader } from "../Loader/Loader";
export class ImageGallery extends PureComponent {
  state = {
    query: null,
    data: null,
    loading: false,
    error: null,
    status: "idle",
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ loading: true, data: null });
      setTimeout(() => {
        fetchData(this.props.query)
          .then(({ data }) => {
            this.setState({ data: data.hits, query: this.props.query });
          })
          .catch((error) => this.setState({ error }))
          .finally(() => this.setState({ loading: false }));
        debugger;
      }, 1000);
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
    const { loading, error, data } = this.state;
    // if (status === "idle"){
    //   return <div>vedid</div>
    // }

    // if (status === "pending"){
    //   return <div>vedid</div>
    // }

    // if (status === "rejected"){
    //   return <div>vedid</div>
    // }

    // if (status === "resolve"){
    //   return <div>vedid</div>
    // }
    return (
      <>
        {loading && <Loader></Loader>}
        {error && <h1>Not found</h1>}

        <SC.ImageGallery>
          {!this.props.query && <div>vedid</div>}
          {data && this.createItems()}
        </SC.ImageGallery>
      </>
    );
  }
}
