import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Heroimage from "./components/Heroimage/Heroimage";
import Card from "./components/Card/Card";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Navbar />
      <Heroimage />
      <Section title="Top Albums" />
    </>
  );
}

export default App;
