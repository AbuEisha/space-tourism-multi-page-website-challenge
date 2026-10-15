import { Box } from "@mui/material";
export default function PageTemplate({
  mobile,
  tablet,
  desktop,
  children,
  ...props
}) {
  return (
    <Box
      component="section"
      {...props}
      sx={{
        width: "100%",
        backgroundImage: {
          xs: `url(${mobile})`,
          sm: `url(${tablet})`,
          md: `url(${desktop})`,
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
}
