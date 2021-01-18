import React from 'react';
import {
  FooterContainer,
  FooterWrap,
  SocialIcon,
  SocialIconLink,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
} from './FooterElements';
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Cake</SocialLogo>
            <SocialIcon>
              <SocialIconLink
                href='/'
                target='_blank'
                aria-label='Facebook'
                rel='noopener noreferrer'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='/'
                target='_blank'
                aria-label='Instagram'
                rel='noopener noreferrer'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='/'
                target='_blank'
                aria-label='Twitter'
                rel='noopener noreferrer'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href='/'
                target='_blank'
                aria-label='Github'
                rel='noopener noreferrer'
              >
                <FaGithub />
              </SocialIconLink>
            </SocialIcon>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
