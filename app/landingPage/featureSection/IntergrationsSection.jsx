import React from "react";
import IntegrationCarousel from "../carousels/integrationCarousel";
import Header from "@/app/components/header/header";

const Intergrations = () => {
  return (
    <div className="md:mt-32 md:mb-28 mt-20 mb-0">
      <Header
        title="Our Features"
        subTitle="Intergrations"
        paragraph="DeltaPrime provides decentralized loans which can be used 
for these integrations."
      />
      <IntegrationCarousel />
    </div>
  );
};

export default Intergrations;
