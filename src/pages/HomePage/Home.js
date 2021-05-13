import React from "react";
import { Navbar, Footer } from "../../components";
import { InfoSection } from "../../components";
import { homeOjeOne, homeOjeTwo, homeOjeThree } from "./Data";

const Home = () => {
  return (
    <>
      <Navbar position/>
      <InfoSection {...homeOjeOne} /> {/* SPREAD OPERATOR ...homeOjeOne*/}
      <InfoSection {...homeOjeTwo} /> {/* SPREAD OPERATOR ...homeOjeOne*/}
      <InfoSection {...homeOjeThree} /> {/* SPREAD OPERATOR ...homeOjeOne*/}
      {/* <Pricing /> */}
      {/* <InfoSection {...homeOjeFour} /> SPREAD OPERATOR ...homeOjeOne */}
      <Footer />
    </>
  );
};

export default Home;
