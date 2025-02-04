// src/components/Navbar.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled navbar container
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between; /* Keeps Aurevra on the left, links centered */
  align-items: center;
  padding: 15px 40px;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;

// Brand Name Styling
const NavbarBrand = styled(Link)`
  font-family: "Roboto Slab", serif;
  font-size: 2rem;
  color: #f4b400;
  text-decoration: none;
`;

// Navbar Links Wrapper
const NavbarLinks = styled.div`
  display: flex;
  gap: 40px; /* Space between links */
  align-items: center;
  margin: auto; /* Center the links */
`;

// Individual Navbar Links
const NavLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  color: #ececec;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #f4b400;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarBrand to="/">Aurevra</NavbarBrand>
      <NavbarLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;
