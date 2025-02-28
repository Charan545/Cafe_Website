// src/pages/Menu.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

// Card Layout for menu items
const MenuContainer = styled.div`
  background-color: #0d0d0d;
  color: #f8f8f8;
  font-family: "Poppins", sans-serif;
  padding: 60px 20px;
  min-height: 100vh;
`;

const MenuTitle = styled(motion.h1)`
  font-family: "Roboto Slab", serif;
  font-size: 3rem;
  font-weight: 700;
  color: #f4b400;
  text-align: center;
  margin-bottom: 40px;
  letter-spacing: 4px;
  text-transform: uppercase;
  animation: fadeIn 1s ease-in-out;
`;

const MenuItemsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Responsive grid with auto-fill */
  gap: 40px;
  padding: 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* 2-column layout on smaller screens */
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Single column on very small screens */
    gap: 15px;
  }
`;

const MenuItemCard = styled(motion.div)`
  background-color: #292929;
  color: #ececec;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  }
`;

const MenuItemTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #f4b400;
`;

const MenuItemDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #dcdcdc;
`;

const MenuItemPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ececec;
  margin-top: 15px;
`;

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

const Menu = () => {
  return (
    <MenuContainer>
      <Navbar />
      <MenuTitle
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        Our Menu
      </MenuTitle>

      <MenuItemsSection>
        <MenuItemCard
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <MenuItemTitle>🏎️ Turbo Espresso</MenuItemTitle>
          <MenuItemDescription>
            A high-powered espresso shot with a rich finish. A bold start to your day.
          </MenuItemDescription>
          <MenuItemPrice>₹249</MenuItemPrice>
        </MenuItemCard>

        <MenuItemCard
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <MenuItemTitle>🏁 Drag Race Mocha</MenuItemTitle>
          <MenuItemDescription>
          A rich chocolate-infused coffee for high-speed energy.
          </MenuItemDescription>
          <MenuItemPrice>₹279</MenuItemPrice>
        </MenuItemCard>

        <MenuItemCard
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <MenuItemTitle>🛞 Alloy Wheels Cappuccino</MenuItemTitle>
          <MenuItemDescription>
          Perfectly balanced cappuccino with a velvety texture.
          </MenuItemDescription>
          <MenuItemPrice>₹259</MenuItemPrice>
        </MenuItemCard>

        <MenuItemCard
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <MenuItemTitle>🚗 Vintage Latte</MenuItemTitle>
          <MenuItemDescription>
            Smooth and creamy, inspired by the elegance of classic cars. Perfect for a relaxing afternoon.
          </MenuItemDescription>
          <MenuItemPrice>₹199</MenuItemPrice>
        </MenuItemCard>

        <MenuItemCard
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <MenuItemTitle>🛞 Alloy Wheels Cappuccino</MenuItemTitle>
          <MenuItemDescription>
          Perfectly balanced cappuccino with a velvety texture.
          </MenuItemDescription>
          <MenuItemPrice>₹259</MenuItemPrice>
        </MenuItemCard>

        <MenuItemCard
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <MenuItemTitle>🚦 Signal Stop Iced Tea</MenuItemTitle>
          <MenuItemDescription>
          A refreshing iced tea with a hint of citrus.
          </MenuItemDescription>
          <MenuItemPrice>₹199</MenuItemPrice>
        </MenuItemCard>

        <MenuItemCard
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <MenuItemTitle>🛢️ Engine Oil Hot Chocolate</MenuItemTitle>
          <MenuItemDescription>
          A dark, rich, and creamy hot chocolate.
          </MenuItemDescription>
          <MenuItemPrice>₹279</MenuItemPrice>
        </MenuItemCard>

        <MenuItemCard
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <MenuItemTitle>🔥 Nitro Cold Brew</MenuItemTitle>
          <MenuItemDescription>
            Smooth, chilled, and packed with energy like a turbocharged engine. Refreshing and powerful.
          </MenuItemDescription>
          <MenuItemPrice>₹299</MenuItemPrice>
        </MenuItemCard>

        <MenuItemCard
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <MenuItemTitle>☕️ Classic Cappuccino</MenuItemTitle>
          <MenuItemDescription>
            The perfect balance of espresso, steamed milk, and foam for an iconic coffee experience.
          </MenuItemDescription>
          <MenuItemPrice>₹249</MenuItemPrice>
        </MenuItemCard>

        <MenuItemCard
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <MenuItemTitle>🍩 Gourmet Donut</MenuItemTitle>
          <MenuItemDescription>
            Freshly baked, with a touch of sweetness to complement your coffee. A perfect pairing.
          </MenuItemDescription>
          <MenuItemPrice>₹129</MenuItemPrice>
        </MenuItemCard>
      </MenuItemsSection>

    </MenuContainer>
  );
};


export default Menu;


