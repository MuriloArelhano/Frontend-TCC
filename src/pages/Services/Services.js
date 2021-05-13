import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeOjeFour } from "./Data";

const Home = () => {
  return (
    <>
      
      <Pricing />
      <InfoSection {...homeOjeFour} /> {/* SPREAD OPERATOR ...homeOjeOne*/}
    </>
  );
};

export default Home;
