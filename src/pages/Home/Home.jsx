import { Box, Button, Grid, Typography } from "@mui/material";
import PageTemplate from "../../components/PageTemplate";
import CustomContainer from "../../components/CustomContainer";

import mobileBg from "../../assets/home/background-home-mobile.jpg";
import tabletBg from "../../assets/home/background-home-tablet.jpg";
import desktopBg from "../../assets/home/background-home-desktop.jpg";

export default function Home() {
  return (
    <PageTemplate
      mobile={mobileBg}
      tablet={tabletBg}
      desktop={desktopBg}
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "flex-end",
        paddingBlock: {
          xs: "7rem 1.5rem",
          sm: "0 8rem",
        },
      }}
    >
      <CustomContainer sx={{ height: { xs: "100%", sm: "auto" } }}>
        <Grid
          container
          spacing={{ xs: "3rem", sm: "4.1875rem", md: "3rem" }}
          direction={{ xs: "column", md: "row" }}
          sx={{ alignItems: "stretch", height: "100%" }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                maxWidth: "27.5rem",
                marginInline: { xs: "auto", md: 0 },
                textAlign: { xs: "center", md: "start" },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.75rem" },
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: { xs: "0.15rem", sm: ".25rem" },
                  textTransform: "uppercase",
                  color: "secondary.main",
                }}
              >
                {"So, you want to travel to"}
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "5rem", sm: "9rem" },
                  fontWeight: 400,
                  lineHeight: 1.146,
                  letterSpacing: 0,
                  textTransform: "uppercase",
                  color: "primary.main",
                  marginBlock: "1.5rem",
                }}
              >
                {"Space"}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.9375rem", sm: "1rem", md: "1.125rem" },
                  fontWeight: 400,
                  lineHeight: 1.8,
                  letterSpacing: 0,
                  color: "secondary.main",
                }}
              >
                {
                  "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
                }
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-end" },
              flexGrow: { xs: 1, sm: "initial" },
            }}
          >
            <Button
              disableRipple
              sx={{
                width: { xs: "9rem", sm: "17rem" },
                height: { xs: "9rem", sm: "17rem" },
                borderRadius: "50%",
                backgroundColor: "primary.main",
                color: "#0b0d17",
                outline: "5.5rem solid transparent",
                "&:hover": {
                  outlineColor: "rgba(255,255,255,0.1)",
                  "& .MuiTypography-caption": {
                    opacity: 0.5,
                  },
                },
                "&.Mui-focusVisible": {
                  outlineColor: "rgba(255,255,255,0.1)",
                  "& .MuiTypography-caption": {
                    opacity: 0.5,
                  },
                },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontSize: { xs: "1.125rem", sm: "2rem" },
                  fontWeight: 400,
                  lineHeight: 1.146,
                  letterSpacing: 0,
                }}
              >
                Explore
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </CustomContainer>
    </PageTemplate>
  );
}
