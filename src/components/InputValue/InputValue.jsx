import { PureComponent } from "react";
import { InputValueS } from "./InputValue.styled";
export class InputValue extends PureComponent {
  state = {
    query: "",
  };
  handleChenge = (event) => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <>
        <InputValueS
          type="text"
          autocomplete="off"
          autoFocus
          value={this.state.query}
          onChange={this.handleChenge}
          placeholder="Search images and photos"
        />
        ;
      </>
    );
  }
}
