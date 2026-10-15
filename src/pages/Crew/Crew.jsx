import {
  Box,
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

import mobileBg from "../../assets/crew/background-crew-mobile.jpg";
import tabletBg from "../../assets/crew/background-crew-tablet.jpg";
import desktopBg from "../../assets/crew/background-crew-desktop.jpg";

import data from "../../data/data.json";

const crewData = data.crew;

const crewImages = import.meta.glob("../../assets/crew/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

export default function Crew() {
  const crew = useLoaderData();

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
        overflow: "hidden",
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
            02
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
            Meet your crew
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
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "stretch",
          }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Stack
              sx={{
                textAlign: { xs: "center", md: "start" },
                maxWidth: { sm: "32rem", md: "100%" },
                marginInline: { sm: "auto", md: 0 },
                marginBlock: { xs: "2.5rem 1.5rem", md: "auto" },
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
                  marginBlock: {
                    xs: ".5rem 1.5rem",
                    sm: "1rem 1.5rem",
                    md: "1rem 1.625rem",
                  },
                }}
              >
                {crew.name}
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
                {crew.role}
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
                  height: { xs: "10.25rem", sm: "7.25rem", md: "auto" },
                  overflowY: { xs: "auto", sm: "hidden" },
                }}
              >
                {crew.bio}
              </Typography>
            </Stack>
            <List
              sx={{
                height: { sm: "auto", md: "3.9375rem" },
                padding: 0,
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "flex-start",
                gap: { xs: "1rem", md: "2.5rem" },
                marginBlockStart: { md: "2.5rem" },
              }}
            >
              {crewData.map((partner) => (
                <ListItem key={partner.name} sx={{ width: "auto", p: 0 }}>
                  <Link
                    aria-label={`Choose ${partner.name}`}
                    component={NavLink}
                    to={`/crew/${partner.name.toLowerCase().replaceAll(" ", "-")}`}
                    sx={{
                      display: "block",
                      width: { xs: "0.625rem", md: "0.9375rem" },
                      height: { xs: "0.625rem", md: "0.9375rem" },
                      borderRadius: "50%",
                      opacity: 0.17,
                      backgroundColor: "primary.main",
                      textDecoration: "none",
                      "&:hover": {
                        opacity: 0.5,
                      },
                      "&.Mui-focusVisible": {
                        opacity: 0.5,
                      },
                      "&.active": {
                        opacity: 1,
                      },
                    }}
                  ></Link>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: { xs: 1, md: "initial" },
              height: { md: "100%" },
            }}
          >
            <Box
              component="img"
              src={crewImages[`${crew.image}`]}
              alt={`${crew.name} Image`}
              sx={{
                display: "block",
                maxWidth: "100%",
                height: { xs: "21.25rem", sm: "35rem", md: "100%" },
                marginInline: "auto",
                marginBlockEnd: { sm: "-5.96875rem", md: 0 },
                objectFit: "contain",
              }}
            />
          </Grid>
        </Grid>
      </CustomContainer>
    </PageTemplate>
  );
}
