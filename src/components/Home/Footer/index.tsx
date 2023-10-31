import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Author, Container, PageLinks, SocialMedia } from './styles';

export function Footer() {
  return (
    <Container>
      <SocialMedia>
        <FaFacebookSquare data-testid="facebook-icon" />
        <FaInstagram data-testid="instagram-icon" />
        <FaTwitter data-testid="twitter-icon" />
        <FaYoutube data-testid="youtube-icon" />
      </SocialMedia>

      <PageLinks>
        <a href="#" data-testid="conditions_of_use">
          Conditions of Use
        </a>
        <a href="#" data-testid="privacy_and_policy">
          Privacy & Policy
        </a>
        <a href="#" data-testid="press_room">
          Press Room
        </a>
      </PageLinks>

      <Author>© 2023 - GameHub</Author>
    </Container>
  );
}
