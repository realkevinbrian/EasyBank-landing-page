import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Features from "./components/Features"
import Articles from  "./components/Articles"

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Features/>
      <Articles/>
    </div>
  );
}

export default App;
