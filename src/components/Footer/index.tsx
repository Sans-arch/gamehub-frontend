import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Author, Container, PageLinks, SocialMedia } from "./styles";

export function Footer() {
    return (
        <Container>
            <SocialMedia>
                <FaFacebookSquare />
                <FaInstagram />
                <FaTwitter />
                <FaYoutube />
            </SocialMedia>

            <PageLinks>
                <a href='#'>Conditions of Use</a>
                <a href='#'>Privacy & Policy</a>
                <a href='#'>Press Room</a>
            </PageLinks>

            <Author>© 2023 MovieAPI by Santiago Negreira</Author>
        </Container>        
    );
}