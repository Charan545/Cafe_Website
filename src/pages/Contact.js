// src/pages/Contact.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

const ContactContainer = styled.section`
  padding: 50px;
  text-align: center;
  max-width: 600px;
  margin: auto;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #27ae60;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;

  &:hover {
    background-color: #219150;
  }
`;

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactContainer>
        <h2>Contact Us</h2>
        <ContactForm>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <TextArea placeholder="Your Message" required></TextArea>
          <Button type="submit">Send Message</Button>
        </ContactForm>
      </ContactContainer>
      <Footer />
    </>
  );
};

export default Contact;
