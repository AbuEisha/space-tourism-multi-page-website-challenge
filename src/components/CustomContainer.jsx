import { Container, styled } from "@mui/material";

const CustomContainer = styled(Container)({
  "&&": {
    maxWidth: "69.375rem",
  },
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  "@media (min-width:37.5rem)": {
    paddingLeft: "2.5rem",
    paddingRight: "2.5rem",
  },
  "@media (min-width:75rem)": {
    paddingLeft: 0,
    paddingRight: 0,
  },
});

export default CustomContainer;
