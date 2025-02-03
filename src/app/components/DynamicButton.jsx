import React from "react";
import { Button as MuiButton } from "@mui/material";

const DynamicButton = ({
  label,
  variant = "contained",
  color = "primary",
  onClick,
  startIcon,
  endIcon,
  sx,
  href,
  ...props
}) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      href={href} 
      sx={{
        fontFamily: "-moz-initial",
        paddingX: { xs: 2, sm: 4 },
        ...sx,
      }}
      {...props}
    >
      {label}
    </MuiButton>
  );
};

export default DynamicButton;
