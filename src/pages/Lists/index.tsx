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

        <h1>My Lists</h1>
      </Navbar>

      <ListContainer>
        {!lists.length && <h2>You don't have lists, create some!</h2>}

        {lists.map(list => {
          return <List key={list.id} id={list.id} description={list.description} gamesList={list.gamelist} />;
        })}
      </ListContainer>
    </Container>
  );
}
