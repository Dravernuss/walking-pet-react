import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notifications({ alertOn }) {
  const [open, setOpen] = React.useState(alertOn);

  console.log(alertOn);
  console.log(open);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    alertOn = false;
  };
  React.useEffect(() => {
    setOpen(alertOn);
  }, [alertOn]);

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        Correo o Contraseña Incorrectos
      </Alert>
    </Snackbar>
  );
}
