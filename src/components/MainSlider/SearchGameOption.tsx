import { useNavigate } from 'react-router-dom';

import { SearchGameOptionContainer } from './styles';
import { IGame } from '../types';

interface SearchGameOptionProps {
  readonly data: IGame;
}

export function SearchGameOption({ data }: SearchGameOptionProps) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/game/${data.slug}`);
  }

  return (
    <SearchGameOptionContainer>
      <p aria-hidden="true" onClick={handleClick}>
        {data.name}
      </p>
    </SearchGameOptionContainer>
  );
}
