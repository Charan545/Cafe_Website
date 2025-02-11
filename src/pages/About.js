// src/pages/About.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

// Page Container
const AboutContainer = styled.div`
  background-color: #0d0d0d; /* Dark background for an aesthetic look */
  color: #f8f8f8;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 20px;
`;


// Animated Title
const Title = styled(motion.h1)`
  font-family: "Playfair Display", serif;
  font-size: 3rem;
  font-weight: bold;
  color: #f4b400; /* Gold color */
  text-transform: uppercase;
  margin-bottom: 20px;
  text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.1);
`;

// Animated Content Block
const Content = styled(motion.div)`
  max-width: 800px;
  background: rgba(255, 255, 255, 0.05);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px); /* Frosted glass effect */
`;

// Paragraph Styling
const Paragraph = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  color: #dcdcdc;
`;

// Animated Image Section
const ImageContainer = styled(motion.div)`
  margin-top: 40px;
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);
`;

// Framer Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

const About = () => {
  return (
    <>
      <Navbar />
      <AboutContainer>
        {/* Animated Title */}
        <Title initial="hidden" animate="visible" variants={fadeInUp}>
          About Aurevra Cafe
        </Title>

        {/* Animated Content Block */}
        <Content initial="hidden" animate="visible" variants={fadeInUp}>
          <Paragraph>
            Welcome to **Aurevra Cafe**, where **automobile passion meets gourmet coffee**.
            Our cafe is inspired by the thrill of speed, precision, and high-performance design.
            We bring you **a luxurious coffee experience**, just like the craftsmanship of a **classic car**.
          </Paragraph>
          <Paragraph>
            Every detail, from the **interior decor** to the **specialty coffee menu**, is carefully crafted
            to offer a **unique experience**. Whether you're a car enthusiast or a coffee lover, you'll
            feel at home at **Aurevra Cafe**.
          </Paragraph>
        </Content>

        {/* Animated Image */}
        <ImageContainer initial="hidden" animate="visible" variants={fadeInUp}>
          <AboutImage src="/about-cafe.jpg" alt="Aurevra Cafe Interior" />
        </ImageContainer>
      </AboutContainer>
    </>
  );
};

export default About;
