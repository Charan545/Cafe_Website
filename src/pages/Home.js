// src/pages/Home.js
import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for button navigation


// Fade-in animation for text
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HomeContainer = styled.div`
  background-color: #0d0d0d;
  color: #f8f8f8;
  font-family: "Playfair Display", serif;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  height: 100vh;
  background-image: url("/hero-bg.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column; /* Stack items vertically */
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
  background: rgba(0, 0, 0, 0.4); /* Dark overlay to enhance text visibility */
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center; /* Ensures both text and button are centered */
  gap: 20px; /* Adds spacing between heading and button */
`;

const HeroText = styled(motion.h1)`
  z-index: 10;
  font-family: "Roboto Slab", serif;
  font-size: 4.5rem;
  font-weight: 700;
  color: #d3a15c;
  text-transform: uppercase;
  letter-spacing: 6px;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 1.5s ease-in-out;
  margin-bottom: 20px; /* Space between text and button */
`;

const BookTableButton = styled(motion(Link))`
  padding: 12px 24px;
  background-color: #f4b400;
  color: #0d0d0d;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
  z-index: 10;
  
  &:hover {
    background-color: #e89c00;
    transform: scale(1.05);
  }
`;

const AboutSection = styled(motion.section)`
  padding: 80px 20px;
  max-width: 800px;
  margin: auto;
  text-align: center;
  font-size: 1.3rem;
  font-family: "Poppins", sans-serif; /* Clean sans-serif font */
  background: #1e1e1e;
  border-radius: 12px;
  padding: 50px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  color: #dcdcdc; /* Light grey color for body text */
  line-height: 1.6;
  margin-top: 80px; /* Added margin-top to create space between hero and about section */
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const AboutTitle = styled.h2`
  font-family: "Roboto Slab", serif;
  color: #ececec; /* Light silver color */
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
`;

const SpecialtiesSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 60px;
  flex-wrap: wrap;
`;

const SpecialItem = styled(motion.div)`
  background: linear-gradient(to right, #292929, #1e1e1e);
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  width: 320px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  color: #f8f8f8;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.8);
  }
`;

const SpecialItemTitle = styled.h3`
  font-family: "Roboto Slab", serif;
  color: #ececec; /* Soft light silver color */
  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 15px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #e89c00; /* Lighter gold on hover */
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
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #f4b400; /* Gold for emphasis */
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
`;

const CustomerName = styled.h4`
  font-family: "Roboto Slab", serif;
  font-weight: 700;
  color: #ececec; /* Soft off-white for customer names */
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <HeroSection>
        <Overlay />
        <HeroText
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Aurevra Cafe
        </HeroText>
        {/* Book My Table button directly under Hero Text with matching animation */}
        <BookTableButton 
          to="/book-table"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Book My Table
        </BookTableButton>
      </HeroSection>

      <AboutSection
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <AboutTitle>About Us</AboutTitle>
        <p>
          At **Aurevra Cafe**, we blend the world of automobiles and coffee culture. 
          Experience high-performance coffee in an ambiance designed for automotive enthusiasts.
        </p>
      </AboutSection>

      <SpecialtiesSection>
        <SpecialItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <SpecialItemTitle>🏎️ Turbo Espresso</SpecialItemTitle>
          <p>A high-powered espresso shot with a rich finish.</p>
        </SpecialItem>
        <SpecialItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <SpecialItemTitle>🚗 Vintage Latte</SpecialItemTitle>
          <p>A smooth and creamy latte, inspired by classic cars.</p>
        </SpecialItem>
        <SpecialItem whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <SpecialItemTitle>🔥 Nitro Cold Brew</SpecialItemTitle>
          <p>Chilled and packed with power, like a turbocharged engine.</p>
        </SpecialItem>
      </SpecialtiesSection>

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
