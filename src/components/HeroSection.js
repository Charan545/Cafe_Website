// src/components/HeroSection.js
import React from "react";
import styled from "styled-components";

const HeroContainer = styled.section`
  background-image: url("/assets/images/hero-bg.jpg"); /* Replace with an actual image */
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const HeroText = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  
`;

const HeroSection = () => (
  <HeroContainer>
    <HeroText>Welcome to Aurevra Cafe</HeroText>
  </HeroContainer>
);

export default HeroSection;
