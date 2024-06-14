"use client";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Icon, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "@/context/AppContext";

const ToggleTheme = () => {
  const { theme, toggle } = useContext(AppContext);
  return (
    <div>
      <IconButton style={{ color: "white" }} onClick={toggle}>
        {theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </div>
  );
};

export default ToggleTheme;
