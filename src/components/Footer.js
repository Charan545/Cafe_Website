// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #181818;
  color: #f4b400;
  padding: 40px 20px;
  text-align: center;
  width: 100%;
  margin-top: auto; /* Ensures the footer stays at the bottom */
`;


const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  color: #f4b400; /* Gold color for the links */
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ececec; /* Lighter color on hover */
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: #f4b400;
  transition: color 0.3s ease;

  &:hover {
    color: #ececec; /* Lighter color on hover */
  }
`;

const CopyrightText = styled.p`
  font-size: 1rem;
  color: #dcdcdc; /* Light grey color for copyright */
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      {/* Footer Links */}
      <FooterLinks>
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/menu">Menu</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
      </FooterLinks>

      {/* Social Media Icons */}
      <SocialIcons>
        <SocialIcon href="https://www.instagram.com" target="_blank">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="https://www.facebook.com" target="_blank">
          <FaFacebookF />
        </SocialIcon>
        <SocialIcon href="https://twitter.com" target="_blank">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com" target="_blank">
          <FaLinkedin />
        </SocialIcon>
      </SocialIcons>

      {/* Copyright Text */}
      <CopyrightText>
        &copy; 2025 Aurevra Cafe. All Rights Reserved.
      </CopyrightText>
    </FooterContainer>
  );
};


export default Footer;
