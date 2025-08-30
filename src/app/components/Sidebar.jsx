"use client";
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  Drawer,
  Button,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavLink from "next/link";
import ToggleTheme from "./ToggleTheme";
import { NAV_LINKS } from "../constants/PAGE_CONSTANT";

const Sidebar = ({ mode, toggleMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ px: 2, pt: 2 }}>
      <IconButton sx={{ float: "right" }}>
        <CloseIcon sx={{ color: "#fff" }} />
      </IconButton>
      <Typography
        variant="h6"
        sx={{ my: 3, fontWeight: "bold", color: "#fff" }}
      >
        My Website
      </Typography>
      <List>
        {NAV_LINKS.map((link, index) => (
          <ListItem key={index} disablePadding>
            <Button
              component={NavLink}
              href={link.path}
              sx={{
                width: "100%",
                textTransform: "none",
                color: "#fff",
                justifyContent: "flex-start",
                px: 2,
                py: 1.5,
                "&:hover": {
                  backgroundColor: "rgba(106, 121, 55, 0.1)",
                },
              }}
            >
              {link.title}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          background: "linear-gradient(to right, #1c1c1c, #333333)",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link
            href="#herosection"
            sx={{
              textDecoration: "none",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Portfolio
          </Link>
          <Box  sx={{ display: { xs: "none", sm: "flex" }, gap: 1.5 }}>
            {NAV_LINKS.map((link, index) => (
              <Button
              key={index}
                component={NavLink}
                href={link.path}
                sx={{
                  position: "relative",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 4,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "0%",
                    height: "3px",
                    borderRadius: "2px",
                    background: "linear-gradient(to right, #eeebebff, #e2afd9ff)",
                    transition: "width 0.3s ease-in-out",
                  },
                  "&:hover::after": {
                    width: "80%",
                  },
                }}
              >
                {link.title}
              </Button>
            ))}
            <ToggleTheme mode={mode} toggleMode={toggleMode} />
          </Box>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { xs: "70%", sm: "50%" },
            background: "linear-gradient(to bottom, #1c1c1c, #333333)",
            color: "#fff",
          },
        }}
      >
        {drawer}
        <Box sx={{ p: 2 }}>
          <ToggleTheme mode={mode} toggleMode={toggleMode} />
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
