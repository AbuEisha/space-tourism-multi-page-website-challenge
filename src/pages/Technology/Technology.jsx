import {
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink, useLoaderData } from "react-router";
import PageTemplate from "../../components/PageTemplate";

import mobileBg from "../../assets/technology/background-technology-mobile.jpg";
import tabletBg from "../../assets/technology/background-technology-tablet.jpg";
import desktopBg from "../../assets/technology/background-technology-desktop.jpg";

import data from "../../data/data.json";

const technologyData = data.technology;

const technologyImages = import.meta.glob("../../assets/technology/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});

export default function Technology() {
  const technology = useLoaderData();

  return (
    <PageTemplate
      mobile={mobileBg}
      tablet={tabletBg}
      desktop={desktopBg}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingBlock: {
          xs: "7rem 3rem",
          sm: "8.5rem 2.5rem",
          md: "11.5rem 3rem",
        },
      }}
    >
      <Container
        sx={{
          flexGrow: 1,
          maxWidth: { lg: "79.6875rem" },
          paddingInline: { xs: "1.5rem", sm: "2.5rem", lg: 0 },
          marginInline: { lg: "auto 0" },
          display: "flex",
          flexDirection: "column",
        }}
      >
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
            03
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
            Space launch 101
          </Typography>
        </Stack>

        <Grid
          container
          spacing="2rem"
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" },
            flexGrow: 1,
          }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "2.5rem", md: "4rem" },
              flexGrow: { md: 1 },
              flexShrink: { md: 0 },
              order: { xs: 2, md: 1 },
            }}
          >
            <List
              sx={{
                padding: 0,
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "flex-start",
                gap: { xs: "1rem", md: "2rem" },
              }}
            >
              {technologyData.map((tech, index) => (
                <ListItem key={tech.name} sx={{ width: "auto", p: 0 }}>
                  <Link
                    aria-label={`Choose ${tech.name}`}
                    component={NavLink}
                    to={`/technology/${tech.name.toLowerCase().replaceAll(" ", "-")}`}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: { xs: "2.5rem", sm: "3.5rem", md: "5rem" },
                      height: { xs: "2.5rem", sm: "3.5rem", md: "5rem" },
                      borderRadius: "50%",
                      backgroundColor: "transparent",
                      color: "primary.main",
                      border: "1px  solid rgba(255,255,255,0.25)",
                      textDecoration: "none",

                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "primary.main",
                        borderColor: "primary.main",
                      },
                      "&.Mui-focusVisible": {
                        backgroundColor: "transparent",
                        color: "primary.main",
                        borderColor: "primary.main",
                      },
                      "&.active": {
                        backgroundColor: "primary.main",
                        color: "#0b0d17",
                        borderColor: "primary.main",
                      },
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: { xs: "1.5rem", md: "2rem" },
                        fontWeight: 400,
                        lineHeight: 1.146,
                        letterSpacing: 0,
                        textTransform: "uppercase",
                      }}
                    >
                      {index + 1}
                    </Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
            <Stack
              sx={{
                textAlign: { xs: "center", md: "start" },
                maxWidth: { xs: "32rem", md: "100%" },
                marginInline: "auto",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  order: 2,
                  fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3.5rem" },
                  fontWeight: 400,
                  lineHeight: 1.146,
                  letterSpacing: 0,
                  textTransform: "uppercase",
                  color: "primary.main",
                  marginBlock: { xs: "1rem", md: "1rem 1.5rem" },
                }}
              >
                {technology.name}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  order: 1,
                  fontSize: { xs: "1.125rem", sm: "1.5rem", md: "2rem" },
                  fontWeight: 400,
                  lineHeight: 1.146,
                  letterSpacing: 0,
                  textTransform: "uppercase",
                  opacity: 0.5,
                  color: "primary.main",
                }}
              >
                {"The Terminology…"}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  order: 3,
                  fontSize: { xs: "0.9375rem", sm: "1rem", md: "1.125rem" },
                  fontWeight: 400,
                  lineHeight: 1.8,
                  letterSpacing: 0,
                  color: "secondary.main",
                  height: { xs: "auto", sm: "9rem", md: "auto" },
                  overflowY: { xs: "auto", md: "hidden" },
                }}
              >
                {technology.description}
              </Typography>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: "auto" }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
              order: { xs: 1, md: 2 },
              paddingBlockStart: { xs: "4rem", md: 0 },
              maxWidth: { md: "38rem" },
              width: {
                xs: "calc(100% + 3rem)",
                sm: "calc(100% + 5rem)",
                md: "100%",
              },
              flexGrow: { md: 0 },
              flexShrink: {
                md: 1,
              },
              flexBasis: { md: "38rem" },

              minWidth: { md: 0 },
              marginInline: { xs: "-1.5rem", sm: "-2.5rem", md: 0 },
            }}
          >
            <Box
              component="picture"
              sx={{
                display: "block",
                width: "100%",
                lineHeight: 0,
              }}
            >
              <source
                media="(max-width: 599px)"
                srcSet={technologyImages[`${technology.images.mobile}`]}
              />
              <source
                media="(min-width: 600px) and (max-width: 899px)"
                srcSet={technologyImages[`${technology.images.tablet}`]}
              />
              <Box
                component="img"
                src={technologyImages[`${technology.images.desktop}`]}
                alt={`${technology.name}`}
                sx={{
                  width: "100%",
                  height: { xs: "16.1669rem", sm: "22.4169rem", md: "auto" },
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </PageTemplate>
  );
}
