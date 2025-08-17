// app/layout.js
"use client";
import "aos/dist/aos.css";
import { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline, } from "@mui/material";
import { getResponsiveTheme } from "./components/theme/theme";
import Sidebar from "./components/Sidebar";

export default function RootLayout({ children }) {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => getResponsiveTheme(mode), [mode]);
  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Sidebar mode={mode} toggleMode={toggleMode} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
