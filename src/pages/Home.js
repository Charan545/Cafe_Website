// src/pages/Home.js
import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Container for the whole page
const HomeContainer = styled.div`
  background-color: #0d0d0d; /* Dark automotive theme */
  color: #f8f8f8;
  font-family: "Playfair Display", serif;
  min-height: 100vh;
`;

// Hero Section
const HeroSection = styled.section`
  height: 90vh;
  background-image: url("/assets/hero-bg.jpg"); /* Replace with an actual image */
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Dark overlay for readability */
`;

const HeroText = styled(motion.h1)`
  z-index: 10;
  font-size: 3.5rem;
  font-weight: 600;
  color: #f4b400;
  text-transform: uppercase;
  letter-spacing: 3px;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

// About Section
const AboutSection = styled(motion.section)`
  padding: 60px 20px;
  max-width: 800px;
  margin: auto;
  text-align: center;
  font-size: 1.2rem;
  background: #1e1e1e;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  animation: ${fadeIn} 1.5s ease-in-out;
`;

// Specialties Section
const SpecialtiesSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 50px;
  flex-wrap: wrap;
`;

const SpecialItem = styled(motion.div)`
  background: linear-gradient(to right, #292929, #1e1e1e);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 280px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
  color: #f8f8f8;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(255, 255, 255, 0.2);
  }
`;

const SpecialItemTitle = styled.h3`
  font-size: 1.5rem;
  color: #f4b400;
`;

const TestimonialsSection = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-color: #181818;
`;

const Quote = styled.p`
  font-style: italic;
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #f4b400;
`;

const CustomerName = styled.h4`
  font-weight: bold;
  color: #f8f8f8;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />

      {/* Hero Section */}
      <HeroSection>
        <Overlay />
        <HeroText
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Aurevra Cafe
        </HeroText>
      </HeroSection>

      {/* About Section */}
      <AboutSection
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h2>About Us</h2>
        <p>
          Inspired by speed, precision, and craftsmanship, **Aurevra Cafe** blends the world of 
          automobiles with gourmet coffee. Experience the thrill of high-performance coffee in 
          an environment designed for car enthusiasts and coffee lovers alike.
        </p>
      </AboutSection>

      {/* Specialties Section */}
      <SpecialtiesSection>
        <SpecialItem
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <SpecialItemTitle>🏎️ Turbo Espresso</SpecialItemTitle>
          <p>A high-powered espresso shot with a rich finish.</p>
        </SpecialItem>
        <SpecialItem
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <SpecialItemTitle>🚗 Vintage Latte</SpecialItemTitle>
          <p>A smooth and creamy latte, inspired by classic cars.</p>
        </SpecialItem>
        <SpecialItem
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <SpecialItemTitle>🔥 Nitro Cold Brew</SpecialItemTitle>
          <p>Served chilled, packed with power like a turbocharged engine.</p>
        </SpecialItem>
      </SpecialtiesSection>

      {/* Testimonials Section */}
      <TestimonialsSection>
        <h2>What Our Customers Say</h2>
        <Quote>"The ambiance is like stepping into a high-end car showroom, but with the aroma of great coffee!"</Quote>
        <CustomerName>- Alex R.</CustomerName>
      </TestimonialsSection>

      <Footer />
    </HomeContainer>
  );
};

export default Home;
