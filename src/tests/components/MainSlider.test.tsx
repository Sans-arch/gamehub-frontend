import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { MainSlider } from '../../components/MainSlider';
import { MemoryRouter, Navigate } from 'react-router-dom';
import { AuthContext } from '@/src/contexts/auth';

describe('MainSlider test suite', () => {
  it('should render MainSlider component', async () => {
    render(<MainSlider />);

    const mainSliderContainer = screen.getByTestId('main-slider-container');

    expect(mainSliderContainer).toBeInTheDocument();
  });

  it('should open the drawer when clicked', async () => {
    render(
      <MemoryRouter>
        <MainSlider />
      </MemoryRouter>
    );

    const signInButton = screen.getByRole('button');
    await user.click(signInButton);

    const drawer = screen.getByRole('presentation');

    expect(drawer).toBeInTheDocument();
  });

  it('should render the Link component to /lists when signed', async () => {
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
          <MainSlider />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const signInButton = screen.getByRole('button');
    await user.click(signInButton);

    const link = screen.getByText(/Minhas listas/);

    expect(link).toBeInTheDocument();
  });

  it('should not render the Link component to /lists when not signed', async () => {
    render(
      <AuthContext.Provider
        value={{
          user: {
            id: 1,
            email: '',
            name: '',
          },
          signed: false,
          signIn: () => Promise.resolve(),
          signOut: () => <Navigate to="/" />,
          signUp: () => Promise.resolve(),
        }}
      >
        <MemoryRouter>
          <MainSlider />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const signInButton = screen.getByRole('button');
    await user.click(signInButton);

    const link = screen.queryByText(/Minhas listas/);

    expect(link).not.toBeInTheDocument();
  });

  it('should render MainSlider component with a searchbar', async () => {
    render(<MainSlider />);

    const searchbar = screen.getByPlaceholderText(/What do you want to play?/);

    expect(searchbar).toBeInTheDocument();
  });

  it('should render MainSlider component with a searchbar and change its value', async () => {
    render(<MainSlider />);

    const searchbar = screen.getByPlaceholderText(/What do you want to play?/);

    await user.click(searchbar);
    await user.keyboard('Cyberpunk 2077');

    expect(searchbar).toHaveValue('Cyberpunk 2077');
  });
});
