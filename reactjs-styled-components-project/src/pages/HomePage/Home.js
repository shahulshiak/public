import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne}></InfoSection>
      <InfoSection {...homeObjTwo}></InfoSection>
      <InfoSection {...homeObjThree}></InfoSection>
      <InfoSection {...homeObjFour}></InfoSection>
    </>
  );
};

export default Home;
