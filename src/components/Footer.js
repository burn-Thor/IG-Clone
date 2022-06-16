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

const FooterBanner = () => {
  return (
    <div>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinkTitle>Kat</FooterLinkTitle>

                <FooterLink to="">Testimonials</FooterLink>
                <FooterLink to="">Careers</FooterLink>
                <FooterLink to="">Investors</FooterLink>
                <FooterLink to="">About</FooterLink>
              </FooterLinksItems>

              <FooterLinksItems>
                <FooterLinkTitle>Olly</FooterLinkTitle>

                <FooterLink to="">Testimonials</FooterLink>
                <FooterLink to="">Careers</FooterLink>
                <FooterLink to="">Investors</FooterLink>
                <FooterLink to="">About</FooterLink>
              </FooterLinksItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinkTitle>Abdelbar</FooterLinkTitle>

                <FooterLink to="">Testimonials</FooterLink>
                <FooterLink to="">Careers</FooterLink>
                <FooterLink to="">Investors</FooterLink>
                <FooterLink to="">About</FooterLink>
              </FooterLinksItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
    </div>
  );
};

export default FooterBanner;
