import { Oval } from "react-loader-spinner";
import { Box } from "../../utils/Box";
export const Loader = () => {
  return (
    <Box mt={4} display="flex" justifyContent="center">
      <Oval
        height={80}
        width={80}
        color="#3f51b5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#3f51b5"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Box>
  );
};
