import { FeaturedGames } from '@components/FeaturedGames';
import { Footer } from '@components/Footer';
import { MainSlider } from '@components/MainSlider';

export default function Home() {
  return (
    <>
      <MainSlider />
      <FeaturedGames />
      <Footer />
    </>
  );
}
