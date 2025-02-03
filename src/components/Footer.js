// src/components/Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: 50px;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2025 Aurevra Cafe. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
