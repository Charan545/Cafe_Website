// src/pages/BookTable.js
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

// Page Container with Transparent Background
const BookTableContainer = styled.div`
  background: rgba(0, 0, 0, 0.5); /* Transparent background */
  background-image: url("/booktable.jpg"); /* Add background image */
  background-size: cover;
  background-position: center;
  color: #f8f8f8;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* Overlay for better text visibility */
`;

const PageTitle = styled(motion.h1)`
  font-family: "Roboto Slab", serif;
  font-size: 3rem;
  font-weight: 700;
  color: #f4b400;
  text-align: center;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 4px;
  z-index: 1; /* Ensure title appears above overlay */
  animation: fadeIn 1s ease-in-out;
`;

const BookingForm = styled.form`
  background-color: rgba(41, 41, 41, 0.8); /* Semi-transparent form background */
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  width: 100%;
  max-width: 600px;
  z-index: 1; /* Ensure form appears above overlay */
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between form elements */
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
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

const SelectField = styled.select`
  width: 100%;
  padding: 12px;
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

const ConfirmationMessage = styled.div`
  background-color: #292929;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  max-width: 600px;
  margin-top: 40px;
  color: #ececec;
  font-size: 1.2rem;
`;

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    partySize: "2",
    specialRequests: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission logic (e.g., store data, send to server)
  };

  return (
    <BookTableContainer>
      <Overlay /> {/* Overlay to ensure content visibility */}
      <Navbar />
      <PageTitle initial="hidden" animate="visible" variants={fadeIn}>
        Book Your Table
      </PageTitle>

      {!submitted ? (
        <BookingForm onSubmit={handleSubmit}>
          <InputField
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <InputField
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <InputField
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
          <SelectField
            name="partySize"
            value={formData.partySize}
            onChange={handleChange}
            required
          >
            <option value="2">2 people</option>
            <option value="4">4 people</option>
            <option value="6">6 people</option>
            <option value="8">8 people</option>
            <option value="10">10 people</option>
          </SelectField>
          <TextArea
            name="specialRequests"
            placeholder="Any Special Requests?"
            value={formData.specialRequests}
            onChange={handleChange}
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </BookingForm>
      ) : (
        <ConfirmationMessage>
          <h3>Thank You for Your Reservation!</h3>
          <p>Your table has been booked. We look forward to serving you at Aurevra Cafe.</p>
        </ConfirmationMessage>
      )}

    </BookTableContainer>
  );
};

export default BookTable;
