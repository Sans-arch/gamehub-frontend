import { useNavigate } from 'react-router-dom';
import { QueriedGame } from './Searchbar';
import { SearchGameOptionContainer } from './styles';

interface SearchGameOptionProps {
  readonly data: QueriedGame;
}

export function SearchGameOption({ data }: SearchGameOptionProps) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/game/${data.slug}`);
  }

  return (
    <SearchGameOptionContainer>
      <p onClick={handleClick}>{data.name}</p>
    </SearchGameOptionContainer>
  );
}
