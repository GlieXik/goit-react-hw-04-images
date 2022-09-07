import { useEffect } from "react";
import * as SC from "./ModalItem.styled";

export const ModalItem = ({ largeImageURL, onClose }) => {
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return (
    <>
      <SC.Overlay onClick={handleBackdrop}>
        <SC.Modal>
          <SC.SExitCross onClick={onClose}></SC.SExitCross>

          <img src={largeImageURL} alt="" />
        </SC.Modal>
      </SC.Overlay>
    </>
  );
};
