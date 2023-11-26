import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { CreateListModal } from '../../../components/CreateListModal';
import { MemoryRouter, Navigate } from 'react-router-dom';
import { AuthContext, AuthContextProps } from '@/src/contexts/auth';

describe('CreateListModal test suite', () => {
  const renderCreateListModal = (
    isCreateListModalOpen: boolean,
    userMock: AuthContextProps = {
      user: {
        id: 1,
        email: '',
        name: '',
      },
      signed: true,
      signIn: () => Promise.resolve(),
      signOut: () => <Navigate to="/" />,
      signUp: () => Promise.resolve(),
    }
  ) => {
    return render(
      <AuthContext.Provider value={userMock}>
        <MemoryRouter>
          <CreateListModal isCreateListModalOpen={isCreateListModalOpen} handleCreateListModal={vi.fn()} />
        </MemoryRouter>
      </AuthContext.Provider>
    );
  };

  it('should render the modal', () => {
    renderCreateListModal(true);

    const modal = screen.getByTestId('create-list-modal');
    expect(modal).toBeInTheDocument();
  });

  it('should not render modal with isCreateListModalOpen is false', async () => {
    renderCreateListModal(false);

    const modal = screen.queryByTestId('create-list-modal');
    expect(modal).not.toBeInTheDocument();
  });

  it('should render CircularProgress when the games are loading', async () => {
    renderCreateListModal(true);

    const circularProgress = screen.getByRole('progressbar');

    expect(circularProgress).toBeInTheDocument();
  });

  it('should not render NotificationSnackbar when a list is not created', async () => {
    renderCreateListModal(true);

    const notificationSnackbar = screen.queryByTestId('notification-snackbar');

    expect(notificationSnackbar).not.toBeInTheDocument();
  });

  it('should render Games when fetched', async () => {
    renderCreateListModal(true);

    await waitFor(async () => {
      const games = await screen.findAllByTestId('gamecard-container');
      expect(games).toHaveLength(2);
    });
  });

  it('should select a game when click it', async () => {
    renderCreateListModal(true);

    await waitFor(async () => {
      const games = await screen.findAllByTestId('gamecard-container');
      expect(games).toHaveLength(2);

      const firstGame = games[0];
      await user.click(firstGame);

      expect(firstGame).toHaveStyle('opacity: 0.1;');
    });
  });

  it('should create a new list when form is submitted', async () => {
    renderCreateListModal(true);

    await waitFor(async () => {
      const games = await screen.findAllByTestId('gamecard-container');
      expect(games).toHaveLength(2);

      const firstGame = games[0];
      await user.click(firstGame);
    });

    const form = screen.getByRole('form');
    const input = form.querySelector('input') as HTMLInputElement;

    await user.click(input);
    await user.keyboard('Lista dos top games');

    expect(input.value).toBe('Lista dos top games');

    const formSubmitButton = screen.getByRole('button', { name: /Criar/i });
    await user.click(formSubmitButton);

    const notificationSuccesful = await screen.findByTestId('notification-snackbar');

    expect(notificationSuccesful).toBeInTheDocument();
  });

  it('should close NotificationSnackbar when closed', async () => {
    renderCreateListModal(true);

    await waitFor(async () => {
      const games = await screen.findAllByTestId('gamecard-container');
      expect(games).toHaveLength(2);

      const firstGame = games[0];
      await user.click(firstGame);
    });

    const form = screen.getByRole('form');
    const input = form.querySelector('input') as HTMLInputElement;

    await user.click(input);
    await user.keyboard('Lista dos top games');

    expect(input.value).toBe('Lista dos top games');

    const formSubmitButton = screen.getByRole('button', { name: /Criar/i });
    await user.click(formSubmitButton);

    const notificationSuccesful = await screen.findByTestId('notification-snackbar');

    await waitFor(async () => {
      const closeButton = notificationSuccesful.querySelector('button[title="Close"]') as HTMLElement;

      await user.click(closeButton);
    });

    expect(notificationSuccesful).not.toBeInTheDocument();
  });

  it('should not create a new list when user is not authenticated and token does not exists', async () => {
    vi.spyOn(Storage.prototype, 'getItem');

    const userMock = {
      user: null,
      signed: false,
      signIn: () => Promise.resolve(),
      signOut: () => <Navigate to="/" />,
      signUp: () => Promise.resolve(),
    };

    renderCreateListModal(true, userMock);

    await waitFor(async () => {
      const games = await screen.findAllByTestId('gamecard-container');
      expect(games).toHaveLength(2);

      const firstGame = games[0];
      await user.click(firstGame);
    });

    const form = screen.getByRole('form');
    const input = form.querySelector('input') as HTMLInputElement;

    await user.click(input);
    await user.keyboard('Lista dos top games');

    expect(input.value).toBe('Lista dos top games');

    const formSubmitButton = screen.getByRole('button', { name: /Criar/i });
    await user.click(formSubmitButton);

    const notificationSuccesful = screen.queryByTestId('notification-snackbar');
    expect(notificationSuccesful).not.toBeInTheDocument();
    expect(localStorage.getItem).toHaveBeenCalledWith('@Auth:token');
  });
});
