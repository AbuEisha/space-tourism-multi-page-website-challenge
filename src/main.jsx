import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Bellefair",
    },
    h2: {
      fontFamily: "Bellefair",
    },
    body1: {
      fontFamily: "Barlow Condensed",
    },
    body2: {
      fontFamily: "Barlow",
    },
    button: {
      fontFamily: "Barlow Condensed",
    },
    caption: {
      fontFamily: "Bellefair",
    },
  },
  palette: {
    primary: { main: "#fff" },
    secondary: { main: "#d0d6f9" },
    action: {
      hover: "rgba(255,255,255,0.5)",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
