import Image from 'next/image';
import { Container, Navbar } from './styles';

import gameHubLogo from '@assets/logo/logo-white-removebg-preview.png';
import Link from 'next/link';

export function ListsLayout() {
  return (
    <Container>
      <Navbar>
        <Link href="/">
          <Image src={gameHubLogo.src} alt="Logotipo" width={100} height={100} />
        </Link>
      </Navbar>

      <h1>Minhas listas</h1>
    </Container>
  );
}
