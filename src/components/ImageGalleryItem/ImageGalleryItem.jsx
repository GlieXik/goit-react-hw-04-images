import { useState } from "react";
import { ModalItem } from "../Modal/ModalItem";
import * as SC from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ previewURL, restProps, largeImageURL }) => {
  const [modal, setmodal] = useState(false);

  const toggleModal = () => {
    setmodal(!modal);
  };

  return (
    <>
      <SC.ImageGalleryItem onClick={toggleModal}>
        <SC.ImageGalleryItemImage src={previewURL} alt="" {...restProps} />
      </SC.ImageGalleryItem>
      {modal && (
        <ModalItem
          largeImageURL={largeImageURL}
          onClose={toggleModal}
        ></ModalItem>
      )}
    </>
  );
};

// previewURL,
// largeImageURL,
// modal,
// ...restProps
