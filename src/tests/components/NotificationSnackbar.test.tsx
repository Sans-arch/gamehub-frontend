import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NotificationSnackbar } from '../../components/NotificationSnackbar';
import { AlertColor } from '@mui/material';

describe.only('NotificationSnackbar Test suite', () => {
  it('should render NotificationSnackbar component correctly', () => {
    const notificationType: AlertColor = 'success';
    const notificationMessage: string = 'Notification message displayed correctly.';
    let isSnackbarOpen: boolean = true;

    const handleClose = () => {
      isSnackbarOpen = false;
    };

    render(
      <NotificationSnackbar
        handleClose={handleClose}
        isSnackbarOpen={isSnackbarOpen}
        message={notificationMessage}
        type={notificationType}
      />
    );

    const notificationSnackbarElement = screen.getByTestId('notification-snackbar');
    const closeButtonElement = screen.getByRole('button', { name: /close/i });

    expect(notificationSnackbarElement).toBeInTheDocument();
    expect(notificationMessage).toBe(notificationSnackbarElement.textContent);
    expect(closeButtonElement).toBeInTheDocument();
  });
});
