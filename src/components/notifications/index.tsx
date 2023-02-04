import { Alert, AlertColor, Snackbar, Typography } from "@mui/material";
import React from "react";

type NotificationProps = {
  open: boolean;
  msg: string;
  severiry: AlertColor | undefined;
  handleClouse: () => void;
};

export const Notification: React.FC<NotificationProps> = ({
  open,
  msg,
  severiry,
  handleClouse,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={4000}
      open={open}
      onClose={handleClouse}
    >
      <Alert onClose={handleClouse} severity={severiry}>
        <Typography>{msg}</Typography>
      </Alert>
    </Snackbar>
  );
};
