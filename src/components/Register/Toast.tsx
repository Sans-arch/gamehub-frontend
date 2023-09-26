import { Alert, Snackbar } from "@mui/material";

interface ToastProps {
  isSucessRegisterToastOpen: any;
  handleRegisterToast: any;
  responseMessage: any;
}

export function Toast({
  isSucessRegisterToastOpen,
  handleRegisterToast,
  responseMessage,
}: ToastProps) {
  console.log(responseMessage);

  return (
    <Snackbar
      classes={{
        root: "register-toast",
      }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      autoHideDuration={4000}
      open={isSucessRegisterToastOpen}
      onClose={() => handleRegisterToast(false)}
    >
      <>
        {responseMessage !== null && responseMessage?.status === 201 && (
          <Alert
            classes={{
              root: "register-toast-alert",
            }}
            severity="success"
          >
            Usuário criado com sucesso!
          </Alert>
        )}
      </>
    </Snackbar>
  );
}
