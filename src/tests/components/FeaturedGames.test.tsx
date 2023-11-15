import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { FeaturedGames } from '../../components/FeaturedGames';
import { MemoryRouter, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

describe('FeaturedGames test suite', () => {
  it('should render FeaturedGames component', () => {
    render(
      <AuthContext.Provider
        value={{
          user: {
            id: 1,
            email: '',
            name: '',
          },
          signed: true,
          signIn: () => Promise.resolve(),
          signOut: () => <Navigate to="/" />,
          signUp: () => Promise.resolve(),
        }}
      >
        <MemoryRouter>
          <FeaturedGames />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const featuredGamesTitle = screen.getByText(/Featured Games/);
    expect(featuredGamesTitle).toBeInTheDocument();
  });

  it('should render the create list modal button if user is signed', () => {
    const user = {
      id: 1,
      email: '',
      name: '',
    };
    const signed = !!user;

    render(
      <AuthContext.Provider
        value={{
          user: user,
          signed: signed,
          signIn: () => Promise.resolve(),
          signOut: () => <Navigate to="/" />,
          signUp: () => Promise.resolve(),
        }}
      >
        <MemoryRouter>
          <FeaturedGames />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const createListButton = screen.queryByText(/Criar nova lista/);

    expect(createListButton).toBeInTheDocument();
  });

  it('should not render the create list modal button if user is not signed', () => {
    const userDoesntExistsOrNotLoggedIn = null;
    const signed = !!userDoesntExistsOrNotLoggedIn;

    render(
      <AuthContext.Provider
        value={{
          user: userDoesntExistsOrNotLoggedIn,
          signed: signed,
          signIn: () => Promise.resolve(),
          signOut: () => <Navigate to="/" />,
          signUp: () => Promise.resolve(),
        }}
      >
        <MemoryRouter>
          <FeaturedGames />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const createListButton = screen.queryByText(/Criar nova lista/);

    expect(createListButton).not.toBeInTheDocument();
  });

  it('should render a list of games', async () => {
    render(
      <AuthContext.Provider
        value={{
          user: {
            id: 1,
            email: '',
            name: '',
          },
          signed: true,
          signIn: () => Promise.resolve(),
          signOut: () => <Navigate to="/" />,
          signUp: () => Promise.resolve(),
        }}
      >
        <MemoryRouter>
          <FeaturedGames />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const gamesRenderedAndFetchedFromAPI = await screen.findAllByTestId('gamecard-container');

    expect(gamesRenderedAndFetchedFromAPI).toHaveLength(2);
    expect(gamesRenderedAndFetchedFromAPI[0]).toBeInTheDocument();
    expect(gamesRenderedAndFetchedFromAPI[1]).toBeInTheDocument();
  });

  it('should open the create list modal when the button is clicked', () => {
    const user = {
      id: 1,
      email: '',
      name: '',
    };
    const signed = !!user;

    render(
      <AuthContext.Provider
        value={{
          user: user,
          signed: signed,
          signIn: () => Promise.resolve(),
          signOut: () => <Navigate to="/" />,
          signUp: () => Promise.resolve(),
        }}
      >
        <MemoryRouter>
          <FeaturedGames />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const createListButton = screen.queryByText(/Criar nova lista/) as HTMLElement;
    fireEvent.click(createListButton);

    const openedModalRenderedInScreen = screen.getByRole('presentation');

    expect(openedModalRenderedInScreen).toBeInTheDocument();
  });
});
