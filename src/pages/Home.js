// src/pages/Home.js
import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeContainer = styled.div`
  background-color: #121212;  /* Dark background for the rest of the page */
  color: #f8f8f8;  /* Light text */
  font-family: "Playfair Display", serif;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  height: 90vh;
  background-image: url("/assets/hero-bg.jpg"); /* Replace with actual image */
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #f8f8f8;
  font-size: 3rem;
  font-weight: bold;
  position: relative;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);  /* Dark overlay */
`;

const HeroText = styled.h1`
  z-index: 10;
  font-size: 3rem;
  font-weight: 600;
`;

const AboutSection = styled.section`
  padding: 60px 20px;
  max-width: 800px;
  margin: auto;
  text-align: center;
  font-size: 1.2rem;
  background: #1e1e1e;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
`;

const SpecialtiesSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 50px;
  flex-wrap: wrap;
`;

const SpecialItem = styled.div`
  background: #232323;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 250px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }
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
        <HeroText>Welcome to Aurevra Cafe</HeroText>
      </HeroSection>

      {/* About Section */}
      <AboutSection>
        <h2>About Us</h2>
        <p>
          At Aurevra Cafe, we believe in serving the perfect cup of coffee, brewed with passion and
          love. A cozy place to relax and enjoy handcrafted beverages and artisan pastries.
        </p>
      </AboutSection>

      {/* Specialties Section */}
      <SpecialtiesSection>
        <SpecialItem>
          <h3>☕ Signature Coffee</h3>
          <p>Rich and aromatic blends sourced from the best farms.</p>
        </SpecialItem>
        <SpecialItem>
          <h3>🍰 Handcrafted Desserts</h3>
          <p>Freshly baked goods to complement your coffee.</p>
        </SpecialItem>
        <SpecialItem>
          <h3>🎵 Cozy Ambience</h3>
          <p>Enjoy your coffee in a warm and artistic environment.</p>
        </SpecialItem>
      </SpecialtiesSection>

      {/* Testimonials Section */}
      <TestimonialsSection>
        <h2>What Our Customers Say</h2>
        <Quote>"Best coffee in town! Absolutely love the ambiance."</Quote>
        <CustomerName>- Sarah J.</CustomerName>
      </TestimonialsSection>

      <Footer />
    </HomeContainer>
  );
};

export default Home;
