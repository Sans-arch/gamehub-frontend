import { useState } from 'react';
import { SearchbarContainer } from './styles';

interface SearchBarProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar() {
  const [input, setInput] = useState('');

  const fetchData = (value: string) => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //   });
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
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
