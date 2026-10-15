import { useState } from "react";
import { NavLink, Outlet, Link as RouterLink } from "react-router";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";

import menuIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import logoIcon from "../assets/shared/logo.svg";

const drawerWidth = 254;
const navItems = [
  { num: "00", path: "/", title: "Home" },
  { num: "01", path: "/destination", title: "Destination" },
  { num: "02", path: "/crew", title: "Crew" },
  { num: "03", path: "/technology", title: "Technology" },
];

function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box>
      <Box sx={{ textAlign: "end", paddingInlineEnd: "1.5rem" }}>
        <IconButton
          disableRipple
          aria-label="Close Drawer"
          sx={{
            padding: "0",
            "&.Mui-focusVisible": {
              outline: "0.0625rem solid",
              outlineColor: "primary.main",
              outlineOffset: ".25rem",
            },
          }}
          onClick={handleDrawerToggle}
        >
          <Box component="img" src={closeIcon} alt="" />
        </IconButton>
      </Box>
      <List
        sx={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          marginBlockStart: "5rem",
        }}
      >
        {navItems.map((item) => (
          <ListItem key={item.num} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                height: "1.1875rem",
                padding: 0,
                gap: ".75rem",
                borderBottomWidth: "0.1875rem",
                borderStyle: "solid",
                borderColor: "transparent",
                transition:
                  "border-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                "&.Mui-focusVisible": {
                  backgroundColor: "transparent",
                  borderColor: "action.hover",
                },
                "&:hover": {
                  backgroundColor: "transparent",
                  borderColor: "action.hover",
                },
                "&.active": {
                  backgroundColor: "transparent",
                  borderColor: "primary.main",
                },
              }}
            >
              <Typography
                variant="button"
                sx={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: "0.16875rem",
                  color: "primary.main",
                }}
              >
                {item.num}
              </Typography>
              <Typography
                variant="button"
                sx={{
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: "0.125rem",
                  color: "primary.main",
                }}
              >
                {item.title}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          top: { xs: 0, md: "2.5rem" },
        }}
      >
        <Toolbar
          sx={{
            "&&": {
              height: { xs: "5.5rem", sm: "6rem" },
              paddingInline: "0",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              flexGrow: 1,
              lineHeight: 0,
              paddingInlineStart: { xs: "1.5rem", sm: "2.5rem", md: "4rem" },
              "&::after": {
                display: { xs: "none", lg: "block" },
                position: "absolute",
                content: "''",
                width: "35rem",
                height: "0.0625rem",
                backgroundColor: "primary.main",
                opacity: 0.25,
                right: "-2rem",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 4,
              },
            }}
          >
            <Link
              component={RouterLink}
              to="/"
              aria-label="Go to Home Page"
              sx={{ display: "block", width: "fit-content" }}
            >
              <Box
                component="img"
                src={logoIcon}
                alt=""
                sx={{ width: { xs: "2.5rem", sm: "auto" } }}
              />
            </Link>
          </Box>
          <List
            sx={{
              height: "100%",
              width: { sm: "40rem", md: "46rem" },
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              gap: "3rem",
              paddingBlock: 0,
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(40px)",
            }}
          >
            {navItems.map((item) => (
              <ListItem
                key={item.num}
                disablePadding
                sx={{ width: "auto", height: "100%" }}
              >
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  sx={{
                    height: "100%",
                    padding: 0,
                    gap: ".75rem",
                    borderBottomWidth: "0.1875rem",
                    borderStyle: "solid",
                    borderColor: "transparent",
                    transition:
                      "border-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    "&.Mui-focusVisible": {
                      backgroundColor: "transparent",
                      borderColor: "action.hover",
                    },
                    "&:hover": {
                      backgroundColor: "transparent",
                      borderColor: "action.hover",
                    },
                    "&.active": {
                      backgroundColor: "transparent",
                      borderColor: "primary.main",
                    },
                  }}
                >
                  <Typography
                    variant="button"
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      letterSpacing: "0.16875rem",
                      color: "primary.main",
                      display: { xs: "none", md: "inline" },
                    }}
                  >
                    {item.num}
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 400,
                      lineHeight: 1.2,
                      letterSpacing: "0.125rem",
                      color: "primary.main",
                    }}
                  >
                    {item.title}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box
            sx={{
              display: { sm: "none" },
              paddingInlineEnd: "1.5rem",
              lineHeight: 0,
            }}
          >
            <IconButton
              disableRipple
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                padding: "0",
                borderRadius: 0,
                "&.Mui-focusVisible": {
                  outline: "0.0625rem solid",
                  outlineColor: "primary.main",
                  outlineOffset: ".25rem",
                },
              }}
            >
              <Box component="img" src={menuIcon} alt="" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        anchor="right"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiBackdrop-root": {
            backgroundColor: "transparent",
          },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            padding: "2rem 0 0 2rem",
            background: "rgba(11,13,23,0.15)",
            backdropFilter: "blur(40px)",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Box
        component="main"
        sx={{
          position: "relative",
          width: "100%",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
