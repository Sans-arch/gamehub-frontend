import { render, screen } from '@testing-library/react';
import { Footer } from '../../components/Footer';

describe('Footer test suite', () => {
  it('should be rendered correctly', () => {
    render(<Footer />);

    const footerAuthor = screen.getByText('© 2023 - GameHub');

    expect(footerAuthor).toBeInTheDocument();
  });

  it('should render correctly the links', () => {
    render(<Footer />);

    const conditionsOfUseText = screen.getByTestId('conditions_of_use');
    const privacyAndPolicyText = screen.getByTestId('privacy_and_policy');
    const pressRoomText = screen.getByTestId('press_room');

    expect(conditionsOfUseText).toBeInTheDocument();
    expect(privacyAndPolicyText).toBeInTheDocument();
    expect(pressRoomText).toBeInTheDocument();
  });

  it('should render social media icons', () => {
    render(<Footer />);

    const facebookIcon = screen.getByTestId('facebook-icon');
    const instagramIcon = screen.getByTestId('instagram-icon');
    const twitterIcon = screen.getByTestId('twitter-icon');
    const youtubeIcon = screen.getByTestId('youtube-icon');

    expect(facebookIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(youtubeIcon).toBeInTheDocument();
  });
});
