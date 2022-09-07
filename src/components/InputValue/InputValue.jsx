import { InputValueS } from "./InputValue.styled";
export const InputValue = ({ value, onChange }) => {
  return (
    <>
      <InputValueS
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={value}
        onChange={onChange}
      />
      ;
    </>
  );
};
