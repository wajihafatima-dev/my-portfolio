"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
