import React from "react";
import Container from "./Container";
import { features } from "../constants";

const Features = () => {
  return (
    <Container className="pt-24 space-y-10">
      <div className="max-w-4xl mx-auto px-16 lg:px-0 space-y-[16px]">
        <h2 className="h2">Features</h2>
        <p className="body-1 text-n-5">
          Our landing page template works seamlessly on all devices.
        </p>
      </div>
      <div className="space-y-5 max-w-5xl mx-auto px-16 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="border border-stroke-1 rounded-lg p-8 hover:bg-n-8 cursor-pointer animate"
          >
            <img src={feature.image} alt="" width={40} height={40} />
            <p className="h4 pt-8">{feature.title}</p>
            <p className="body-1 pt-[16px]">{feature.text}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Features;
