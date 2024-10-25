import React from "react";
import Container from "./Container";
import Button from "./Button";
import { icoArrowRight } from "../assets";

const CallToAction = ({ minimal }) => {
  return (
    <Container className="pt-24 space-y-10">
      <div className={`${minimal ? "px-0" : "lg:px-36 px-16 "}`}>
        <div
          className={`flex flex-col items-center justify-center py-[72px] space-y-6  bg-gradient-to-b from-p-4 to-p-3 rounded-xl ${
            minimal
              ? "lg:flex-row items-start justify-between lg:gap-10 gap-3 px-14 lg:py-[52px]"
              : ""
          }`}
        >
          <div
            className={`flex flex-col items-center space-y-4 ${
              minimal ? "lg:items-start" : ""
            }`}
          >
            <p className="caption-1 text-n-3">Ready to Start?</p>
            <h3 className="h3">Start your free trial today!</h3>
          </div>
          <Button className="bg-p-2 flex items-center gap-2.5 hover:scale-x-105">
            Get Started{" "}
            <img src={icoArrowRight} width={24} height={24} alt="" />{" "}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default CallToAction;
