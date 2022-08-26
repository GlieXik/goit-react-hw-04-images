import * as SC from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({
  previewURL,
  largeImageURL,
  ...restProps
}) => (
  <>
    <SC.ImageGalleryItem>
      <SC.ImageGalleryItemImage src={previewURL} alt="" {...restProps} />
    </SC.ImageGalleryItem>
  </>
);
