// src/pages/Menu.js
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


// Sample menu items (replace with actual data)
const menuItems = [
  { id: 1, name: "Turbo Espresso", category: "Coffee", price: "$4.50", image: "/assets/turbo-espresso.jpg" },
  { id: 2, name: "Nitro Cold Brew", category: "Cold Drinks", price: "$5.00", image: "/assets/nitro-brew.jpg" },
  { id: 3, name: "Vintage Latte", category: "Coffee", price: "$4.00", image: "/assets/vintage-latte.jpg" },
  { id: 4, name: "Drift Mocha", category: "Coffee", price: "$5.50", image: "/assets/drift-mocha.jpg" },
  { id: 5, name: "Classic Cheesecake", category: "Desserts", price: "$6.00", image: "/assets/cheesecake.jpg" },
  { id: 6, name: "Carbon Fiber Frappe", category: "Cold Drinks", price: "$5.50", image: "/assets/frappe.jpg" },
];

const categories = ["All", "Coffee", "Cold Drinks", "Desserts"];

// Styled Components
const MenuContainer = styled.div`
  background-color: #0d0d0d; /* Dark automotive aesthetic */
  color: #f8f8f8;
  min-height: 100vh;
  padding: 80px 20px;
  text-align: center;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
`;

const FilterButton = styled.button`
  background: ${(props) => (props.active ? "#f4b400" : "#1e1e1e")};
  color: ${(props) => (props.active ? "#0d0d0d" : "#f8f8f8")};
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #f4b400;
    color: #0d0d0d;
  }
`;

const MenuGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: auto;
`;

<Link to="/checkout">
  <button style={{ 
    background: "#f4b400", 
    padding: "10px 20px", 
    borderRadius: "5px", 
    border: "none", 
    cursor: "pointer", 
    fontSize: "1rem",
    color: "#0d0d0d"
  }}>
    🏁 Go to Checkout
  </button>
</Link>

const MenuItem = styled(motion.div)`
  background: linear-gradient(to right, #292929, #1e1e1e);
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
`;

const ItemName = styled.h3`
  margin: 10px 0;
  font-size: 1.2rem;
  color: #f4b400;
`;

const ItemPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #f8f8f8;
`;

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter menu items based on selected category
  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <MenuContainer>
      <Navbar />
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>🚗 Choose Your Fuel</h2>

      {/* Filter Buttons */}
      <FilterButtons>
        {categories.map((category) => (
          <FilterButton
            key={category}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterButtons>

      {/* Menu Grid */}
      <MenuGrid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredItems.map((item) => (
          <MenuItem
            key={item.id}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <ItemImage src={item.image} alt={item.name} />
            <ItemName>{item.name}</ItemName>
            <ItemPrice>{item.price}</ItemPrice>
          </MenuItem>
        ))}
      </MenuGrid>

      <Link to="/checkout">
        <button style={{ 
          background: "#f4b400", 
          padding: "12px 25px", 
          borderRadius: "5px", 
          border: "none", 
          cursor: "pointer",
          fontSize: "1rem",
          color: "#0d0d0d" 
        }}>
          Go to Checkout
        </button>
      </Link>

      <Footer />
    </MenuContainer>
  );
};

export default Menu;
