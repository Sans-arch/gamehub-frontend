import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { GameCard, GameCardProps } from '../../../components/CreateListModal/GameCard';

describe('GameCard from CreateListModal test suite', () => {
  it('should render GameCard selected when isSelected', async () => {
    const mockHandleSelectGame = vi.fn();

    const props: GameCardProps = {
      title: 'The Witcher 3: Wild Hunt',
      isSelected: true,
      handleSelectGame: mockHandleSelectGame,
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

    render(<GameCard {...props} />);

    const game = screen.getByTestId('gamecard-container');
    expect(game).toHaveStyle('opacity: 0.1;');
  });

  it('should render GameCard not selected when not clicked without opacity', async () => {
    const props: GameCardProps = {
      title: 'The Witcher 3: Wild Hunt',
      isSelected: false,
      handleSelectGame: vi.fn(),
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

    render(<GameCard {...props} />);

    const game = screen.getByTestId('gamecard-container');
    expect(game).not.toHaveStyle('opacity: 0.1;');
  });

  it('should select a game when clicked', async () => {
    const mockHandleSelectGame = vi.fn();

    const props: GameCardProps = {
      title: 'The Witcher 3: Wild Hunt',
      isSelected: true,
      handleSelectGame: mockHandleSelectGame,
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

    render(<GameCard {...props} />);

    const game = screen.getByTestId('gamecard-container');

    await user.click(game);

    expect(mockHandleSelectGame).toHaveBeenCalledWith(props.slug);
  });
});
