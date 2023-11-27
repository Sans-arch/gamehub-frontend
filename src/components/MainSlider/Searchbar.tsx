import { useRef, useState } from 'react';
import lodash from 'lodash';

import { SearchGamesOptionsBox, SearchbarContainer } from './styles';
import apiCaller from '@/src/services/api';
import { SearchGameOption } from './SearchGameOption';
import { IGame } from '../types';

export default function SearchBar() {
  const [queriedGames, setQueriedGames] = useState<IGame[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const debouncedSearch = lodash.debounce(value => {
    if (value.length === 0) {
      setQueriedGames([]);
      return;
    }

    apiCaller
      .get(`/games/get-by-search-term`, {
        params: {
          searchTerm: value,
        },
      })
      .then(response => {
        setQueriedGames(response.data);
      });
  }, 300);

  const handleChange = (value: string) => {
    debouncedSearch(value);
  };

  return (
    <SearchbarContainer>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="What do you want to play?"
        onChange={e => handleChange(e.target.value)}
      />
      {queriedGames.length > 0 && (
        <SearchGamesOptionsBox>
          {queriedGames.map(game => {
            return <SearchGameOption key={game.id} data={game} />;
          })}
        </SearchGamesOptionsBox>
      )}
    </SearchbarContainer>
  );
}
