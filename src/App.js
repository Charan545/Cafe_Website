// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import styled from "styled-components"; // Import styled-components
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookTable from "./pages/BookTable";

// Main App container using flexbox
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures it takes at least the full height of the screen */
`;

const ContentWrapper = styled.div`
  flex: 1; /* Pushes the footer to the bottom */
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-table" element={<BookTable />} />
            <Route path="/checkout" element={<Checkout />} /> {/* Add Checkout Route */}
          </Routes>
        </ContentWrapper>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;


