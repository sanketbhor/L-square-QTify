import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Heroimage from "./components/Heroimage/Heroimage";
import Card from "./components/Card/Card";
import Section from "./components/Section/Section";
import { fetchTopSongs } from "./api/api";

function App() {
  return (
    <>
      <Navbar />
      <Heroimage />
      <Section title="Top Albums" dataSource={fetchTopSongs} />
    </>
  );
}

export default App;
