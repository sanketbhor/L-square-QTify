import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Heroimage from "./components/Heroimage/Heroimage";
import Card from "./components/Card/Card";
import Section from "./components/Section/Section";
import { fetchNewSongs, fetchTopSongs } from "./api/api";
import SectionNewAlbums from "./components/Section/SectionNewAlbums";

function App() {
  return (
    <>
      <Navbar />
      <Heroimage />
      <Section title="Top Albums" dataSource={fetchTopSongs} />
      <SectionNewAlbums title="New Albums" dataSource={fetchNewSongs} />
    </>
  );
}

export default App;
