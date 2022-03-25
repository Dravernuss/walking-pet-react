import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function NotificationRegister({ alert }) {
  const [open, setOpen] = React.useState(alert);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    alert(false);
  };
  React.useEffect(() => {
    setOpen(alert);
  }, [alert]);

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        Este correo ya existe.
      </Alert>
    </Snackbar>
  );
}
