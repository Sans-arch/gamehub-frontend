import { AuthContext } from '@/src/contexts/auth';
import { FeaturedGames } from '@components/FeaturedGames';
import { Footer } from '@components/Footer';
import { MainSlider } from '@components/MainSlider';
import { useContext } from 'react';

export default function Home() {
  const { signed, signOut } = useContext(AuthContext);

  return (
    <>
      {signed && <button onClick={signOut}>Deslogar</button>}
      <MainSlider />
      <FeaturedGames />
      <Footer />
    </>
  );
}
