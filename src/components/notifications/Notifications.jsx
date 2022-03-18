import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notifications({ alertOnUser, alertOnWalker }) {
  const [openUser, setOpenUser] = React.useState(alertOnUser);
  const [openWalker, setOpenWalker] = React.useState(alertOnWalker);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenUser(false);
    setOpenWalker(false);
    alertOnUser(false);
    alertOnWalker(false);
  };
  React.useEffect(() => {
    setOpenUser(alertOnUser);
    setOpenWalker(alertOnWalker);
  }, [alertOnUser, alertOnWalker]);

  return (
    <Snackbar
      open={openUser || openWalker}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        Correo o Contraseña Incorrectos
      </Alert>
    </Snackbar>
  );
}
