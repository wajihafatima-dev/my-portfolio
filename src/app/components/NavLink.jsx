import React from "react";
import Link from "next/link";
import { Typography } from "@mui/material";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href}  passHref>
      <Typography
        sx={{
          display: "block",
          paddingY:{ lg:0, md:0,sm:1,xs:1},
          
          color: "#ADB7BE",
          fontSize: "1rem", 
          "&:hover": {
            color: "white",
          },
        }}
        variant="body1"
      >
        {title}
      </Typography>
    </Link>
  );
};

export default NavLink;
