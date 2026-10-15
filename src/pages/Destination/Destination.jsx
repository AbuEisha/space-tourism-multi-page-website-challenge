import {
  Box,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink, useLoaderData } from "react-router";
import PageTemplate from "../../components/PageTemplate";
import CustomContainer from "../../components/CustomContainer";

import mobileBg from "../../assets/destination/background-destination-mobile.jpg";
import tabletBg from "../../assets/destination/background-destination-tablet.jpg";
import desktopBg from "../../assets/destination/background-destination-desktop.jpg";

import data from "../../data/data.json";

const destData = data.destinations;

const destImages = import.meta.glob("../../assets/destination/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

export default function Destination() {
  const destination = useLoaderData();

  return (
    <PageTemplate
      mobile={mobileBg}
      tablet={tabletBg}
      desktop={desktopBg}
      sx={{
        height: "100vh",
        paddingBlock: {
          xs: "7rem 1.5rem",
          sm: "8.5rem 2.5rem",
          md: "11.5rem 3rem",
        },
      }}
    >
      <CustomContainer sx={{ height: "100%" }}>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: { xs: "center", sm: "flex-start" },
            gap: "1.5rem",
            marginBlockEnd: "1.5rem",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.75rem" },
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: {
                xs: "0.15rem",
                sm: "0.1875rem",
                md: "0.295625rem",
              },
              color: "primary.main",
              opacity: 0.25,
            }}
          >
            01
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.75rem" },
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: {
                xs: "0.15rem",
                sm: "0.1875rem",
                md: "0.25rem",
              },
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            Pick your destination
          </Typography>
        </Stack>

        <Grid
          container
          spacing="2rem"
          sx={{
            height: {
              xs: "calc(100% - 2.6875rem)",
              sm: "calc(100% - 3rem)",
              md: "calc(100% - 3.625rem)",
            },
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
          }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: { xs: 1, md: "initial" },
              flexShrink: { sm: 1, md: "initial" },
              flexBasis: { sm: 0, md: "auto" },
              minHeight: 0,
            }}
          >
            <Box
              component="img"
              src={destImages[`${destination.image}`]}
              alt={`${destination.name} Destination`}
              sx={{
                display: "block",
                width: { xs: "9.375rem", sm: "18.75rem", md: "auto" },
                maxWidth: "100%",
                marginInline: "auto",
              }}
            />
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flexGrow: { xs: "initial", sm: 1, md: "initial" },
              flexShrink: { sm: 1, md: "initial" },
              flexBasis: { sm: 0, md: "auto" },
              minHeight: 0,
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: { sm: "32.125rem", md: "27.8125rem" },
                marginInline: "auto",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              <List
                sx={{
                  padding: 0,
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  gap: "2rem",
                }}
              >
                {destData.map((dest) => (
                  <ListItem key={dest.name} sx={{ width: "auto", p: 0 }}>
                    <Link
                      component={NavLink}
                      to={`/destination/${dest.name.toLowerCase()}`}
                      sx={{
                        display: "block",
                        height: "2rem",
                        borderBottom: "3px solid transparent",
                        color: "secondary.main",
                        textDecoration: "none",
                        "&:hover": {
                          color: "primary.main",
                          borderBottomColor: "action.hover",
                        },
                        "&.Mui-focusVisible": {
                          color: "primary.main",
                          borderBottomColor: "action.hover",
                        },
                        "&.active": {
                          color: "primary.main",
                          borderBottomColor: "primary.main",
                        },
                      }}
                    >
                      <Typography
                        variant="button"
                        sx={{
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                          fontWeight: 400,
                          lineHeight: 1.2,
                          letterSpacing: { xs: "0.13125rem", sm: "0.125rem" },
                        }}
                      >
                        {dest.name}
                      </Typography>
                    </Link>
                  </ListItem>
                ))}
              </List>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "3.5rem", sm: "5rem", md: "6rem" },
                  fontWeight: 400,
                  lineHeight: 1.146,
                  letterSpacing: 0,
                  textTransform: "uppercase",
                  color: "primary.main",
                  marginBlock: { xs: "1.5rem 1rem", md: "2.5rem 1rem" },
                }}
              >
                {destination.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.9375rem", sm: "1rem", md: "1.125rem" },
                  fontWeight: 400,
                  lineHeight: 1.8,
                  letterSpacing: 0,
                  color: "secondary.main",
                  height: { xs: "8.5rem", sm: "auto" },
                  overflowY: { xs: "auto", sm: "hidden" },
                }}
              >
                {destination.description}
              </Typography>
              <Divider
                sx={{
                  display: "block",
                  opacity: 0.25,
                  borderColor: "primary.main",
                  marginBlock: { xs: "1.5rem", md: "2.5rem" },
                }}
              />
              <Stack sx={{ flexDirection: { sm: "row" }, gap: "1.5rem" }}>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 400,
                      lineHeight: 1.2,
                      letterSpacing: "0.125rem",
                      textTransform: "uppercase",
                      color: "secondary.main",
                    }}
                  >
                    {"Avg. distance"}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      fontSize: "1.75rem",
                      fontWeight: 400,
                      lineHeight: 1.146,
                      letterSpacing: 0,
                      textTransform: "uppercase",
                      color: "primary.main",
                      marginBlockStart: ".75rem",
                    }}
                  >
                    {destination.distance}
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 400,
                      lineHeight: 1.2,
                      letterSpacing: "0.125rem",
                      textTransform: "uppercase",
                      color: "secondary.main",
                    }}
                  >
                    {"Est. travel time"}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      fontSize: "1.75rem",
                      fontWeight: 400,
                      lineHeight: 1.146,
                      letterSpacing: 0,
                      textTransform: "uppercase",
                      color: "primary.main",
                      marginBlockStart: ".75rem",
                    }}
                  >
                    {destination.travel}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </CustomContainer>
    </PageTemplate>
  );
}
