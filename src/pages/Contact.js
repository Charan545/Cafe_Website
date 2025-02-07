// src/pages/Contact.js
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaEnvelope, FaPhone, FaInstagram, FaFacebookF } from "react-icons/fa"; // Icons for social/contact

// Page Container
const ContactContainer = styled.div`
  background-color: #0d0d0d; /* Dark theme background */
  color: #f8f8f8;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContactTitle = styled(motion.h1)`
  font-family: "Roboto Slab", serif;
  font-size: 3rem;
  font-weight: 700;
  color: #f4b400; /* Gold color */
  text-align: center;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 4px;
  animation: fadeIn 1s ease-in-out;
`;

const ContactForm = styled.form`
  background-color: #292929;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  max-width: 600px;
  width: 100%;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin: 15px 0;
  background-color: #181818;
  border: 1px solid #f4b400;
  border-radius: 8px;
  color: #ececec;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #f4b400;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 15px 0;
  background-color: #181818;
  border: 1px solid #f4b400;
  border-radius: 8px;
  color: #ececec;
  font-size: 1rem;
  min-height: 150px;
  resize: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #f4b400;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #f4b400;
  color: #0d0d0d;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e89c00;
    transform: scale(1.05);
  }
`;

const ContactInfoSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 60px;
`;

const ContactInfoItem = styled.div`
  text-align: center;
`;

const ContactInfoIcon = styled.div`
  font-size: 2rem;
  color: #f4b400;
  margin-bottom: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #ececec;
  }
`;

const ContactInfoText = styled.p`
  color: #ececec;
  font-size: 1.1rem;
`;

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Message sent!");
  };

  return (
    <ContactContainer>
      <Navbar />
      <ContactTitle
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        Contact Us
      </ContactTitle>

      <ContactForm onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <InputField
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Feedback"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>

      <ContactInfoSection>
        <ContactInfoItem>
          <ContactInfoIcon>
            <FaEnvelope />
          </ContactInfoIcon>
          <ContactInfoText>info@aurevra.com</ContactInfoText>
        </ContactInfoItem>
        <ContactInfoItem>
          <ContactInfoIcon>
            <FaPhone />
          </ContactInfoIcon>
          <ContactInfoText>7416287202</ContactInfoText>
        </ContactInfoItem>
        <ContactInfoItem>
          <ContactInfoIcon>
            <FaInstagram />
          </ContactInfoIcon>
          <ContactInfoText>@aurevra.cafe</ContactInfoText>
        </ContactInfoItem>
        <ContactInfoItem>
          <ContactInfoIcon>
            <FaFacebookF />
          </ContactInfoIcon>
          <ContactInfoText>/aurevra.cafe</ContactInfoText>
        </ContactInfoItem>
      </ContactInfoSection>

      <Footer />
    </ContactContainer>
  );
};

export default Contact;
