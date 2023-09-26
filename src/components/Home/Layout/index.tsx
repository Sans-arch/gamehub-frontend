import { FeaturedGame } from "../FeaturedGame";
import { Footer } from "../Footer";
import { MainSlider } from "../MainSlider";
import { Container } from "./styles";

export function Layout() {
  return (
    <>
      <MainSlider />
      <Container>
        <FeaturedGame />
        <Footer />
      </Container>
    </>
  );
}
