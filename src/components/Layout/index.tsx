import { FeaturedGame } from "../FeaturedGame";
import { Footer } from "../Footer";
import { MainSlider } from "../MainSlider";
import { NewArrival } from "../NewArrival";
import { Container } from "./styles";

export function Layout() {
  return (
    <>
      <MainSlider />
      <Container>
        <FeaturedGame />
        {/* <NewArrival /> */}
        <Footer />
      </Container>
    </>
  );
}
