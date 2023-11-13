import { Alert, AlertColor, Snackbar } from '@mui/material';

interface ErrorSnackbarProps {
  isSnackbarOpen: boolean;
  handleClose: () => void;
  message: string;
  type: AlertColor;
}

export function NotificationSnackbar({ isSnackbarOpen, handleClose, message, type }: ErrorSnackbarProps) {
  return (
    <Snackbar
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'top',
      }}
      open={isSnackbarOpen}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
