import { PureComponent } from "react";
import * as SC from "./ModalItem.styled";

export class ModalItem extends PureComponent {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  handleBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { largeImageURL, onClose } = this.props;

    return (
      <>
        <SC.Overlay onClick={this.handleBackdrop}>
          <SC.Modal>
            <SC.SExitCross onClick={onClose}></SC.SExitCross>

            <img src={largeImageURL} alt="" />
          </SC.Modal>
        </SC.Overlay>
      </>
    );
  }
}
