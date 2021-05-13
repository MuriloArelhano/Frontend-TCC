import React from "react";
import { InfoSection, Pricing } from "../../components";
import {  homeOjeTwo, homeOjeThree, homeOjeFour } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeOjeTwo} /> {/* SPREAD OPERATOR ...homeOjeOne*/}
      <InfoSection {...homeOjeThree} /> {/* SPREAD OPERATOR ...homeOjeOne*/}
      <Pricing />
      <InfoSection {...homeOjeFour} /> {/* SPREAD OPERATOR ...homeOjeOne*/}
    </>
  );
};

export default Home;
