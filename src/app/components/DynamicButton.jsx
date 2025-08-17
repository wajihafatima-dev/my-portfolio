import React from "react";
import { Button as MuiButton } from "@mui/material";

const DynamicButton = ({
  label="text",
  variant = "contained",
  color = "primary",
  onClick,
  startIcon,
  endIcon,
  sx,
  target,
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
      target={target}
      sx={{
        textTransform: "lowercase",
        fontFamily: "-moz-initial",
        ...sx,
      }}
      {...props}
    >
      {label}
    </MuiButton>
  );
};

export default DynamicButton;
