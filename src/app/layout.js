// app/layout.js
"use client";
import "aos/dist/aos.css";
import { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { getResponsiveTheme } from "./components/theme/theme";
import Sidebar from "./components/Sidebar";

export default function RootLayout({ children }) {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => getResponsiveTheme(mode), [mode]);
  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const sidebarHeight = 64;

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ height: sidebarHeight }}>
            <Sidebar mode={mode} toggleMode={toggleMode} />
          </Box>
          <Box
            component="main"
            sx={{
              height: `calc(100vh - ${sidebarHeight}px)`,
              overflowY: "auto",
              px: {xs:1,md:0}, 
              py: 2,
            }}
          >
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
