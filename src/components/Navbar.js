// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.scrolled ? "#1a1a1a" : "transparent")};
  transition: background-color 0.3s ease-in-out;
  z-index: 100;
  box-shadow: ${(props) => (props.scrolled ? "0 4px 10px rgba(0, 0, 0, 0.5)" : "none")};
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-family: "Playfair Display", serif;
  color: #f8f8f8;
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavbarLink = styled(Link)`
  color: #f8f8f8;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #f4b400;
  }
`;

const BookTableButton = styled(Link)`
  background-color: #f4b400;
  color: #1a1a1a;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #e89c00;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarContainer scrolled={scrolled}>
      <Logo>Aurevra Cafe</Logo>
      <NavbarLinks>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/menu">Menu</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/contact">Contact</NavbarLink>
      </NavbarLinks>
      <BookTableButton to="/reservation">Book a Table</BookTableButton>
    </NavbarContainer>
  );
};

export default Navbar;
