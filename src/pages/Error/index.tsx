import { Link } from 'react-router-dom';
import { Container } from './styles';

import gameHubLogo from '@assets/logo/logo-white-removebg-preview.png';

export default function ErrorPage() {
  return (
    <Container>
      <Link to="/">
        <img src={gameHubLogo} alt="Logotipo" width={100} height={100} />
      </Link>
      <h1>Oops!</h1>
      <p>Página não encontrada.</p>
    </Container>
  );
}
