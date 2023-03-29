import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Heroimage from "./components/Heroimage/Heroimage";
import HomeSectionWrapper from "./components/HomeSectionWrapper";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Heroimage />
        <HomeSectionWrapper />
      </StyledEngineProvider>
    </>
  );
}

export default App;
