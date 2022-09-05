import React from "react";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../Images/queirozImages/logos/02_Exports/02_PNG/CMJN/Logo_Queiroz.png";
import {
  FooterContainer,
  FooterWrapper,
  // FooterLinksContainer,
  // FooterLinksWrapper,
  // FooterLinkItems,
  // FooterLinkTitle,
  // FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterLogo,
  // FooterAddy,
} from "./FooterElements";
import { Container } from "../../globalStyles";

const Footer = () => {
  return (
    <>
      <Container>
        <FooterContainer>
          <FooterWrapper>
            <SocialMedia>
              <SocialMediaWrapper>
                <SocialLogo to="/">
                  {" "}
                  <FooterLogo src={logo} alt="wassup" />
                </SocialLogo>

                <WebsiteRights>72 rue Truffaut-75017 Paris</WebsiteRights>
                <SocialIcons>
                  <SocialIconLink
                    href="//www.facebook.com"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </SocialIconLink>
                  <SocialIconLink
                    href="//www.instagram.com"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink
                    href="//www.youtube.com"
                    target="_blank"
                    aria-label="Youtube"
                  >
                    <FaYoutube />
                  </SocialIconLink>
                  <SocialIconLink
                    href="//www.twitter.com"
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </SocialIconLink>
                </SocialIcons>
              </SocialMediaWrapper>
            </SocialMedia>
          </FooterWrapper>
        </FooterContainer>
      </Container>
    </>
  );
};

export default Footer;
