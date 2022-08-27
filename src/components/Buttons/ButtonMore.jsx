import { Box } from "../../utils/Box";
import * as SC from "./ButtonMore.styled";
export const ButtonMore = ({ onClick }) => {
  return (
    <>
      <Box display="flex" justifyContent="center" mb={5}>
        <SC.ButtonMore onClick={onClick}>more</SC.ButtonMore>
      </Box>
    </>
  );
};
