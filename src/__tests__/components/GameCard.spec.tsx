import { render, screen } from '@testing-library/react';
import { GameCard, GameCardProps } from '@components/GameCard';

describe('GameCard test suite', () => {
  it('should render GameCard correctly with all props passed', () => {
    const mockData: GameCardProps = {
      cover: {
        game: 10,
        height: 300,
        id: 540,
        url: 'vasco',
        width: 400,
      },
      genres: 'Action, Drama',
      originInfo: 'Vasco',
      rating: 8.5,
      slug: 'teste-teste',
      title: 'Teste Card',
    };

    render(<GameCard {...mockData} />);

    const actual = screen.getByText(mockData.title);

    expect(actual).toBeInTheDocument();
  });
});
