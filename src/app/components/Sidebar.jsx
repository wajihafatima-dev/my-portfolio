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
import NavLink from "next/link"; // Your NavLink component
import { NAV_LINKS } from "../constants/PAGE_CONSTANT"; // Your nav links array

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{}}>
      <IconButton sx={{ float: "right", m: 1 }}>
        <CloseIcon />
      </IconButton>

      <Typography variant="h6" sx={{ my: 2 }}>
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
                color: "inherit",
                // justifyContent: "flex-start",
                px: 0,
                py: 1.5,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
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
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        mx: "auto",
        px: 4,
        py: 1,
      }}
    >
      <AppBar
        component="nav"
        sx={{
          background: "linear-gradient(to right, #1c1c1c, #333333)",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link
            href="/"
            sx={{
              textDecoration: "none",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Portfolio
          </Link>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {NAV_LINKS.map((link, index) => (
              <Button
                key={index}
                component={NavLink}
                href={link.path}
                sx={{
                  color: "#fff",

                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                {link.title}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
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

      {/* Mobile Drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: {
                xs: "70%", // 70% width on small screens
                sm: "50%", // 50% width on small-medium screens
              },
              background: "linear-gradient(to bottom, #1c1c1c, #333333)",
              color: "#fff",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Sidebar;
