// src/pages/Menu.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

const MenuContainer = styled.section`
  padding: 50px;
  text-align: center;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: auto;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ItemName = styled.h3`
  font-weight: 600;
`;

const ItemPrice = styled.span`
  color: #27ae60;
  font-weight: 600;
`;

const Menu = () => {
  return (
    <>
      <Navbar />
      <MenuContainer>
        <h2>Our Menu</h2>
        <MenuList>
          <MenuItem>
            <ItemName>Espresso</ItemName>
            <ItemPrice>$3.00</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Cappuccino</ItemName>
            <ItemPrice>$4.50</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Latte</ItemName>
            <ItemPrice>$5.00</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Mocha</ItemName>
            <ItemPrice>$5.50</ItemPrice>
          </MenuItem>
        </MenuList>
      </MenuContainer>
      <Footer />
    </>
  );
};

export default Menu;
