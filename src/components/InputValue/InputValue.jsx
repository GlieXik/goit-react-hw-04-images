import { PureComponent } from "react";
import { InputValueS } from "./InputValue.styled";
export class InputValue extends PureComponent {
  render() {
    return (
      <>
        <InputValueS
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.props.value}
          onChange={this.props.onChange}
        />
        ;
      </>
    );
  }
}
