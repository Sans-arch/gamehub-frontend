import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Review } from '../../components/Review';
import { AuthContext } from '../../contexts/auth';
import { Navigate } from 'react-router-dom';

describe('Review Test suite', () => {
  it('should render Review component correctly', () => {
    const content: string = 'Such a nice game, I love it!';
    const createdAt: string = '2021-10-10T00:00:00.000Z';
    const name = 'John Doe';
    const rating = 4.5;
    const userId = 1;

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
        <Review content={content} createdAt={createdAt} name={name} rating={rating} userId={userId} />
      </AuthContext.Provider>
    );
    const reviewContainer = screen.getByTestId('review-container');
    const nameHeading = screen.queryByRole('heading', { level: 3 });

    expect(reviewContainer).toBeInTheDocument();
    expect(nameHeading).toHaveTextContent(name);
  });

  it('should render the tag "(you)" when the logged user is the author of a review', () => {
    const content: string = 'Such a nice game, I love it!';
    const createdAt: string = '2021-10-10T00:00:00.000Z';
    const name = 'John Doe';
    const rating = 4.5;
    const userId = 1;

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
        <Review content={content} createdAt={createdAt} name={name} rating={rating} userId={userId} />
      </AuthContext.Provider>
    );

    const nameHeading = screen.getByText(/John Doe/);

    expect(nameHeading).toHaveTextContent(name);
    expect(nameHeading.textContent?.trim()).toEqual(`${name} (you)`);
  });
});
