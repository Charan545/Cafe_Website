// src/pages/About.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

const AboutContainer = styled.section`
  padding: 50px;
  text-align: center;
  max-width: 800px;
  margin: auto;
`;

const About = () => {
  return (
    <>
      <Navbar />
      <AboutContainer>
        <h2>About Aurevra Cafe</h2>
        <p>
          Welcome to Aurevra Cafe, where we serve freshly brewed coffee, artisanal pastries, 
          and a cozy ambiance for all coffee lovers. Our cafe is designed to bring people 
          together over great conversations and delicious flavors.
        </p>
      </AboutContainer>
      <Footer />
    </>
  );
};

export default About;
