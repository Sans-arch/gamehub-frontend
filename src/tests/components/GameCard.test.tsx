import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { MemoryRouter } from 'react-router-dom';

describe('GameCard Test suite', () => {
  it('should render GameCard component correctly', () => {
    const props: GameCardProps = {
      title: 'The Witcher 3: Wild Hunt',
      cover: {
        id: 1,
        game: 1,
        height: 300,
        width: 800,
        url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1s7a.jpg',
      },
      genres: 'Action, Adventure, Role-playing (RPG)',
      originInfo: 'PC (Microsoft Windows), PlayStation 4, Xbox One, Nintendo Switch, PlayStation 5, Xbox Series',
      rating: 4.5,
      slug: 'the-witcher-3-wild-hunt',
    };

    render(
      <MemoryRouter>
        <GameCard {...props} />
      </MemoryRouter>
    );

    const gameCardContainer = screen.getByTestId('gamecard-container');

    expect(gameCardContainer).toBeInTheDocument();
  });

  it('should navigate to the game page when clicked', async () => {
    const props: GameCardProps = {
      title: 'The Witcher 3: Wild Hunt',
      cover: {
        id: 1,
        game: 1,
        height: 300,
        width: 800,
        url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1s7a.jpg',
      },
      genres: 'Action, Adventure, Role-playing (RPG)',
      originInfo: 'PC (Microsoft Windows), PlayStation 4, Xbox One, Nintendo Switch, PlayStation 5, Xbox Series',
      rating: 4.5,
      slug: 'the-witcher-3-wild-hunt',
    };

    render(
      <MemoryRouter>
        <GameCard {...props} />
      </MemoryRouter>
    );

    const gameCardContainer = screen.getByTestId('gamecard-container');

    fireEvent.click(gameCardContainer);

    expect(gameCardContainer).toBeInTheDocument();
  });
});
