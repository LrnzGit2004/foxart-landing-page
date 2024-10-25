import React from "react";
import Container from "./Container";
import Button from "./Button";
import { uiInterface } from "../assets";
import HeroTheme from "./themes/HeroTheme";

const Hero = () => {
  return (
    <div className="relative">
      <Container className="relative z-10 pt-10 lg:py-16 space-y-16">
        <div className="text-center max-w-2xl mx-auto px-16 lg:px-0 space-y-7">
          <h1 className="hero">
            Landing{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
              Template
            </span>{" "}
            for Startups
          </h1>
          <p className="body-1 text-n-5">
            Our landing page template works on all devices, so you only have to
            set it up once and get beautiful results.{" "}
          </p>
          <Button theme="primary" href="/#pricing">
            Pricing and Plans
          </Button>
        </div>
        <img src={uiInterface} alt="" />
      </Container>
      <HeroTheme />
    </div>
  );
};

export default Hero;
