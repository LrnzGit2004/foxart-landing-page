import React from "react";
import { bulletPoints } from "../constants";
import Container from "./Container";

const Works = () => {
  return (
    <Container>
      <div className="pt-24 space-y-24">
        {bulletPoints.map((point) => (
          <div
            key={point.id}
            className={`flex flex-col lg:flex-row gap-10 lg:gap-[110px] items-center justify-center ${point.id % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
          >
            <img
              src={point.image}
              alt={point.alt}
              width={point.width}
              height={point.height}
            />
            <div className="grid gap-5">
              <h4 className="h3">{point.title}</h4>
              <p className="body-1 text-n-6 max-w-xs">{point.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Works;
