import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import List from '../../components/List';

describe('List test suite', () => {
  beforeEach(() => {
    const location: Location = window.location;

    window.location = {
      ...location,
      reload: vi.fn(),
    };
  });

  afterEach(() => {
    window.location = location;
  });

  it('should render List component', () => {
    const listId = 1;
    const description = 'Lista de jogos 01';
    const gamesList = [
      {
        id: 1,
        gameid: 2,
        listid: 1,
        profileid: 1,
        game: {
          id: 2,
          id_igdb: '72',
        },
      },
      {
        id: 2,
        gameid: 3,
        listid: 1,
        profileid: 1,
        game: {
          id: 3,
          id_igdb: '1942',
        },
      },
      {
        id: 3,
        gameid: 1,
        listid: 1,
        profileid: 1,
        game: {
          id: 1,
          id_igdb: '1020',
        },
      },
    ];

    render(<List id={listId} description={description} gamesList={gamesList} />);

    const listContainer = screen.getByTestId('list-container');

    expect(listContainer).toBeInTheDocument();
  });

  it('should delete List when delete button is clicked', () => {
    const listId = 1;
    const description = 'Lista de jogos 01';
    const gamesList = [
      {
        id: 1,
        gameid: 2,
        listid: 1,
        profileid: 1,
        game: {
          id: 2,
          id_igdb: '72',
        },
      },
      {
        id: 2,
        gameid: 3,
        listid: 1,
        profileid: 1,
        game: {
          id: 3,
          id_igdb: '1942',
        },
      },
      {
        id: 3,
        gameid: 1,
        listid: 1,
        profileid: 1,
        game: {
          id: 1,
          id_igdb: '1020',
        },
      },
    ];

    render(<List id={listId} description={description} gamesList={gamesList} />);

    const deleteListButton = screen.getByTestId('delete-list-button');

    fireEvent.click(deleteListButton);

    expect(deleteListButton).toBeInTheDocument();
  });
});
