import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIcon,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            Fique por dentro das mais novas atualizações e notícias
          </FooterSubHeading>
          <FooterSubText> Você pode cancelar a inscrição a qualquer momento.</FooterSubText>
          <Form>
            <FormInput name="email" type="email" placeholder="Seu email" />
            <Button fontBig>Inscrever</Button>
          </Form>
        </FooterSubscription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre nós</FooterLinkTitle>
              <FooterLink to="/cadastro">DevGo</FooterLink>
              <FooterLink to="/">DevGo</FooterLink>
              <FooterLink to="/">DevGo</FooterLink>
              <FooterLink to="/">DevGo</FooterLink>
              <FooterLink to="/">DevGo</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>DevGo</FooterLinkTitle>
              <FooterLink to="/cadastro">DevGo</FooterLink>
              <FooterLink to="/">DevGo</FooterLink>
              <FooterLink to="/">DevGo</FooterLink>
              <FooterLink to="/">DevGo</FooterLink>
              <FooterLink to="/">DevGo</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/cadastro">DevGo</FooterLink>
              <FooterLink to="/">DevGo</FooterLink>
              <FooterLink to="/">DevGo</FooterLink>
              <FooterLink to="/">DevGo</FooterLink>
              <FooterLink to="/">DevGo</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Mídias Sociais</FooterLinkTitle>
              <FooterLink to="/">Github</FooterLink>
              <FooterLink to="/cadastro">Facebook</FooterLink>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
              <FooterLink to="/">Linkedin</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <SocialIcon />
              DevGo
            </SocialLogo>
            <WebsiteRights>DevGo 2021</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Github">
                <FaGithub/>
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    </>
  );
};

export default Footer;
