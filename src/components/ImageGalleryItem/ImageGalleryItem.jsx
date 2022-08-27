import { PureComponent } from "react";
import { ModalItem } from "../Modal/ModalItem";
import * as SC from "./ImageGalleryItem.styled";

export class ImageGalleryItem extends PureComponent {
  state = {
    modal: false,
  };

  toggleModal = () => {
    this.setState(({ modal }) => ({ modal: !modal }));
  };
  render() {
    const { previewURL, restProps, largeImageURL } = this.props;
    return (
      <>
        <SC.ImageGalleryItem onClick={this.toggleModal}>
          <SC.ImageGalleryItemImage src={previewURL} alt="" {...restProps} />
        </SC.ImageGalleryItem>
        {this.state.modal && (
          <ModalItem
            largeImageURL={largeImageURL}
            onClose={this.toggleModal}
          ></ModalItem>
        )}
      </>
    );
  }
}

// previewURL,
// largeImageURL,
// modal,
// ...restProps
