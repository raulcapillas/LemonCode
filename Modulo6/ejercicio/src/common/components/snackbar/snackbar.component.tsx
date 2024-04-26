import React from "react";
import { Box, Snackbar } from "@mui/material";

interface Props {
  message: string;
}

export const SnackbarComponent: React.FC<Props> = ({ message }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isOpen}
        onClose={handleClose}
        message={message}
        key="snackbar"
        autoHideDuration={6000}
      />
    </Box>
  );
};
