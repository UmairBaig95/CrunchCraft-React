import React from "react";
import Layout from "../layout/Layout";
import DigitalProduct from "../Component/DigitalProduct";
import AboutCC from "../Component/AboutCC";
import OurServices from "../Component/OurServices";
import Services from "../Component/Services";
import LearnGoRetailry from "../Component/LearnGoRetailry";
import OurWork from "../Component/OurWork";
import TechnologyStack from "../Component/TechnologyStack";
import Team from "../Component/Team";
function LandingPage() {
  return (
    <>
      <Layout>
        <DigitalProduct />
        <AboutCC />
        <OurServices />
        <Services />
        <LearnGoRetailry />
        <OurWork />
        <TechnologyStack />
        <Team />
      </Layout>
    </>
  );
}

export default LandingPage;
