import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, ListContainer, Navbar } from './styles';

import gameHubLogo from '@assets/logo/logo-white-removebg-preview.png';
import apiCaller from '@/src/services/api';
import List from '@/src/components/List';

interface ListFromResponse {
  id: number;
  description: string;
  gamelist: {
    game: {
      id: number;
      id_igdb: string;
    };
    gameid: number;
    id: number;
    listid: number;
    profileid: number;
  }[];
}

export default function Lists() {
  const [lists, setLists] = useState<ListFromResponse[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('@Auth:token');

    if (token) {
      const parsed: string = JSON.parse(token);
      apiCaller.defaults.headers.common.Authorization = `Bearer ${parsed}`;
    }

    const fetchLists = async () => {
      const response = await apiCaller.get('/lists');
      const lists = response.data as ListFromResponse[];

      setLists(lists);
    };

    fetchLists();
  }, []);

  return (
    <Container>
      <Navbar>
        <Link to="/">
          <img src={gameHubLogo} alt="Logotipo" width={100} height={100} />
        </Link>
      </Navbar>

      <h1>Minhas listas</h1>

      <ListContainer>
        {lists.map(list => {
          return <List key={list.id} description={list.description} gamesList={list.gamelist} />;
        })}
      </ListContainer>
    </Container>
  );
}
