import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { NotificationSnackbar } from '../../components/NotificationSnackbar';
import { AlertColor } from '@mui/material';

describe('NotificationSnackbar Test suite', () => {
  it('should render correctly', () => {
    const notificationType: AlertColor = 'success';
    const notificationMessage: string = 'Notification message displayed correctly.';
    let isSnackbarOpen: boolean = true;

    const handleClose = () => {
      isSnackbarOpen = false;
    };

    // Render desired component
    render(
      <NotificationSnackbar
        handleClose={handleClose}
        isSnackbarOpen={isSnackbarOpen}
        message={notificationMessage}
        type={notificationType}
      />
    );

    // Find the element that we want to interact with our rendered component

    expect(isSnackbarOpen).toBe(true);
  });
});
