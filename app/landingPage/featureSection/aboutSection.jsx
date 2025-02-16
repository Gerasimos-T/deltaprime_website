"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import homeAvalanche from "@/public/assets/img/images/home-avalanche.png";
import homeArbitrum from "@/public/assets/img/images/home-arbitrum.png";
import { BlogCardButton } from "@/app/components/buttons/mainButton";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ImageComponent = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [initialSpin, setInitialSpin] = useState(true);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setInitialSpin(false);
      setShowFirstImage((prev) => !prev);
      // Set an interval to continue spinning every 5 seconds
      const interval = setInterval(() => {
        setShowFirstImage((prev) => !prev);
      }, 5800);

      return () => clearInterval(interval);
    }, 1200); // Initial spin for 1500ms

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div className="content-image__wrapper spinner">
      <Image
        className={`content-image ${
          showFirstImage ? "" : "content-image--hidden"
        }`}
        src={homeAvalanche}
        alt="DeltaPrime"
      />
      <Image
        className={`content-image ${
          showFirstImage ? "content-image--hidden" : ""
        }`}
        src={homeArbitrum}
        alt="DeltaPrime"
      />
    </div>
  );
};

function AboutSection({tenthSection, options}) {
  return (
    <div className="aboutSectionBG bg-fixed flex md:flex-row flex-col items-center justify-between bg-cover bg-no-repeat px-4 pb-10 sm:px-6 md:px-[8%] lg:px-[10%] xl:px-[15%] ">
      {/* Left Side */}
      <div className="w-full md:w-1/2">
        <h4 className="pt-24  aboutTypographytitle !text-[#EAEBFF]">
          {tenthSection?.Subheading}
        </h4>
        <h4 className="aboutTypographysubtitle !text-[#EAEBFF]">
          {tenthSection?.heading}
        </h4>
        <div className="pt-8 pb-14 aboutTypographyparagraph !text-[#EAEBFF]">
          {tenthSection?.mainText &&
            documentToReactComponents(tenthSection.mainText.json, options)}
        </div>
        <div className="sm:w-fit w-full rounded-[25px]">
          <BlogCardButton
            fullWidth={true}
            isLink={true}
            whiteOnlyArrow={true}
            typographyClass="md:mx-auto text-white"
            hasArrowRight={true}
            label={"LEARN MORE"}
            href={"/our-story"}
          />
        </div>
      </div>
      {/* Right Side */}
      <div className="px-10 pt-10 w-full md:w-1/2 flex justify-center overflow-hidden">
        <div className="w-fit">
          <ImageComponent />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
