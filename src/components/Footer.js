import {
  Footer,
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
} from "../css/Footer.styled";

const FooterBanner = ({ name, github }) => {
  return (
    <div>
      <Footer>Kat | Olly | Abdelbar</Footer>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>

                <FooterLink to="/About">Testimonials</FooterLink>
                <FooterLink to="/About">Careers</FooterLink>
                <FooterLink to="/About">Investors</FooterLink>
                <FooterLink to="/About">About</FooterLink>
              </FooterLinksItems>

              <FooterLinksItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>

                <FooterLink to="/About">Testimonials</FooterLink>
                <FooterLink to="/About">Careers</FooterLink>
                <FooterLink to="/About">Investors</FooterLink>
                <FooterLink to="/About">About</FooterLink>
              </FooterLinksItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>

                <FooterLink to="/About">Testimonials</FooterLink>
                <FooterLink to="/About">Careers</FooterLink>
                <FooterLink to="/About">Investors</FooterLink>
                <FooterLink to="/About">About</FooterLink>
              </FooterLinksItems>

              <FooterLinksItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>

                <FooterLink to="/About">Testimonials</FooterLink>
                <FooterLink to="/About">Careers</FooterLink>
                <FooterLink to="/About">Investors</FooterLink>
                <FooterLink to="/About">About</FooterLink>
              </FooterLinksItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
    </div>
  );
};

export default FooterBanner;
