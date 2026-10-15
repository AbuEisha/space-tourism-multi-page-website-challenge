import { Link, Typography } from "@mui/material";
import { Link as RouteLink } from "react-router";
import CustomContainer from "../../components/CustomContainer";
import PageTemplate from "../../components/PageTemplate";

// ========================== Home Images ============================

import homeMBg from "../../assets/home/background-home-mobile.jpg";
import homeTBg from "../../assets/home/background-home-tablet.jpg";
import homeDBg from "../../assets/home/background-home-desktop.jpg";

// ========================== Destination Images ============================

import destMBg from "../../assets/destination/background-destination-mobile.jpg";
import destTBg from "../../assets/destination/background-destination-tablet.jpg";
import destDBg from "../../assets/destination/background-destination-desktop.jpg";

// ========================== Crew Images ============================

import crewMBg from "../../assets/crew/background-crew-mobile.jpg";
import crewTBg from "../../assets/crew/background-crew-tablet.jpg";
import crewDBg from "../../assets/crew/background-crew-desktop.jpg";

// ========================== Technology Images ============================

import techMBg from "../../assets/technology/background-technology-mobile.jpg";
import techTBg from "../../assets/technology/background-technology-tablet.jpg";
import techDBg from "../../assets/technology/background-technology-desktop.jpg";

export default function NotFound({ msg, path }) {
  return (
    <PageTemplate
      mobile={
        path === "destination"
          ? destMBg
          : path === "/"
            ? homeMBg
            : path === "crew"
              ? crewMBg
              : techMBg
      }
      tablet={
        path === "destination"
          ? destTBg
          : path === "/"
            ? homeTBg
            : path === "crew"
              ? crewTBg
              : techTBg
      }
      desktop={
        path === "destination"
          ? destDBg
          : path === "/"
            ? homeDBg
            : path === "crew"
              ? crewDBg
              : techDBg
      }
      sx={{
        height: "100vh",
        paddingBlock: {
          xs: "7rem 1.5rem",
          sm: "8.5rem 2.5rem",
          md: "11.5rem 3rem",
        },
      }}
    >
      <CustomContainer sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "3rem", sm: "6rem", md: "8rem" },
            fontWeight: 400,
            letterSpacing: ".25rem",
            textTransform: "uppercase",
            color: "primary.main",
          }}
        >
          {"404 Error"}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem" },
            fontWeight: 400,
            letterSpacing: "0.125rem",
            color: "secondary.main",
          }}
        >
          {msg}
        </Typography>
        <Link
          component={RouteLink}
          to={path === "/" ? path : `/${path}`}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "18rem",
            height: "3.5rem",
            borderRadius: ".5rem",
            margin: "2rem auto 0",
            border: ".125rem solid",
            borderColor: "primary.main",
            backgroundColor: "primary.main",
            fontSize: "1.5rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: ".125rem",
            color: "#0b0d17",
            "&:hover": {
              backgroundColor: "transparent",
              color: "primary.main",
            },
            "&.Mui-focusVisible": {
              outline: 0,
              backgroundColor: "transparent",
              textDecorationColor: "#fff",
              color: "primary.main",
            },
          }}
        >{`Back To ${path === "/" ? "Home" : `${path}`}`}</Link>
      </CustomContainer>
    </PageTemplate>
  );
}
