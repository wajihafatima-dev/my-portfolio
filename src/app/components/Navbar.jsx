"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { NAV_LINKS } from "../constants/PAGE_CONSTANT";
import Menu from "./Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, List, ListItem } from "@mui/material";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        mx: "auto",
        border: "1px solid #33353F",
        backgroundColor: "#121212",
        opacity: 1,
      }}
    >
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
        <Link href="/" className="text-xl text-white font-semibold">
          LOGO
        </Link>
        
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          {!navbarOpen ? (
            <IconButton
              onClick={() => setNavbarOpen(true)}
              sx={{
                padding: 1,
                border: "1px solid #cbd5e0", 
                color: "#cbd5e0",
                "&:hover": {
                  color: "white",
                  borderColor: "white",
                },
              }}
            >
              <MenuIcon sx={{ fontSize: 20, color: "white" }} />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => setNavbarOpen(false)}
              sx={{
                padding: 1,
                border: "1px solid #cbd5e0", 
                color: "#cbd5e0",
                "&:hover": {
                  color: "white",
                  borderColor: "white",
                },
              }}
            >
              <CloseIcon sx={{ fontSize: 20, color: "white" }} />
            </IconButton>
          )}
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "block" }, 
            width: "auto",
          }}
        >
          <List sx={{ display: "flex",paddingRight:5, margin: 0 }}>
            {NAV_LINKS.map((link, index) => (
              <ListItem
                key={index}
                sx={{ 
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)", 
                  },
                }}
              >
                <NavLink href={link.path} title={link.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      {navbarOpen && <Menu links={NAV_LINKS} />}
    </Box>
  );
};

export default Navbar;
