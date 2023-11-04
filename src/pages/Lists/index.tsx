import { Link } from 'react-router-dom';
import { Container, Navbar } from './styles';

import gameHubLogo from '@assets/logo/logo-white-removebg-preview.png';

export default function Lists() {
  return (
    <Container>
      <Navbar>
        <Link to="/">
          <img src={gameHubLogo} alt="Logotipo" width={100} height={100} />
        </Link>
      </Navbar>

      <h1>Minhas listas</h1>
    </Container>
  );
}
