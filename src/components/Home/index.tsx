import { FeaturedGames } from './FeaturedGames';
import { Footer } from './Footer';
import { MainSlider } from './MainSlider';

export function HomeLayout() {
  return (
    <>
      <MainSlider />
      <FeaturedGames />
      <Footer />
    </>
  );
}
