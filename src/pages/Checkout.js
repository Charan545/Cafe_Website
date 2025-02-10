// src/pages/Checkout.js
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

// Sample Order Items
const orderItems = [
  { id: 1, name: "Turbo Espresso", price: 4.50, quantity: 1 },
  { id: 2, name: "Nitro Cold Brew", price: 5.00, quantity: 2 },
];

// Speedometer Animation (for progress)
const speedometer = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;

// Styled Components
const CheckoutContainer = styled.div`
  background-color: #0d0d0d;
  color: #f8f8f8;
  min-height: 100vh;
  padding: 80px 20px;
  text-align: center;
`;

const OrderSummary = styled.div`
  background: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: auto;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
`;

const SpeedometerBar = styled.div`
  background: linear-gradient(to right, #f4b400, #e89c00);
  height: 10px;
  width: 0%;
  animation: ${speedometer} 3s linear forwards;
`;

const CheckoutButton = styled(motion.button)`
  background: #f4b400;
  color: #0d0d0d;
  border: none;
  padding: 12px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #ffcc00;
    transform: scale(1.1);
  }
`;

const Checkout = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      alert("🚗 Order Placed! Your coffee is on the way!");
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <CheckoutContainer>
      <Navbar />
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>🏁 Final Lap: Checkout</h2>

      <OrderSummary>
        <h3>Order Summary</h3>
        {orderItems.map((item) => (
          <p key={item.id}>
            {item.name} - ${item.price.toFixed(2)} x {item.quantity}
          </p>
        ))}
        <h3>Total: ${orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h3>
        
        {isProcessing && <SpeedometerBar />}
        <CheckoutButton whileTap={{ scale: 0.9 }} onClick={handleCheckout}>
          {isProcessing ? "🚗 Processing..." : "🏎️ Place Order"}
        </CheckoutButton>
      </OrderSummary>

    </CheckoutContainer>
  );
};

export default Checkout;
