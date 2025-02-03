// src/components/MenuSection.js
import React from "react";
import styled from "styled-components";

const MenuContainer = styled.section`
  padding: 50px 0;
  background-color: #f4f4f4;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ItemName = styled.h3`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
`;

const ItemPrice = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: #27ae60;
`;

const MenuSection = () => (
  <MenuContainer>
    <MenuItem>
      <ItemName>Coffee</ItemName>
      <ItemPrice>$4.00</ItemPrice>
    </MenuItem>
    <MenuItem>
      <ItemName>Cappuccino</ItemName>
      <ItemPrice>$5.50</ItemPrice>
    </MenuItem>
  </MenuContainer>
);

export default MenuSection;
