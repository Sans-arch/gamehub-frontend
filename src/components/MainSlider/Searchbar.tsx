import { useState } from 'react';
import { SearchbarContainer } from './styles';

export default function SearchBar() {
  const [input, setInput] = useState('');

  const handleChange = (value: string) => {
    setInput(value);
  };

  return (
    <SearchbarContainer>
      <input
        type="text"
        placeholder="What do you want to play?"
        value={input}
        onChange={e => handleChange(e.target.value)}
      />
    </SearchbarContainer>
  );
}
