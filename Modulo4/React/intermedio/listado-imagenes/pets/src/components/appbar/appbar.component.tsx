import React from "react";
import { IconButton, Toolbar, Typography } from "@mui/material";
import { AppBar } from "./appbar.styles";
import MenuIcon from "@mui/icons-material/Menu";

interface appbarProps {
  open: boolean;
  handleDrawer: () => void;
}

export const AppBarComponent: React.FC<appbarProps> = ({
  open,
  handleDrawer,
}) => {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawer}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Pet Shop
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
