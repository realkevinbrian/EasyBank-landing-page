import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Features/>
      {/* <Articles/> */}
      {/* <Footer/> */}
    </Container>
  );
}

export default App;

const Container = styled.section`
  position: relative;
`;
