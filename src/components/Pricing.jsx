import React from "react";
import { pricing } from "../constants";
import { icoArrowRight, icoCheck } from "../assets";
import Button from "./Button";
import Container from "./Container";

const Pricing = () => {
  return (
    <Container className="lg:px-0">
      <div className="flex items-center justify-center flex-col lg:flex-row gap-10 pt-24">
        {pricing.map((prix) => (
          <div
            key={prix.id}
            className={`p-12 rounded-md w-[400px] ${
              prix.featured ? "bg-n-7 lg:mb-28" : "bg-n-8"
            }`}
          >
            <div>
              <p className="caption-1 uppercase text-n-5 pb-3">{prix.plan}</p>
              <h3 className="h1">
                <span className="text-n-5">$</span>
                {prix.amount}
              </h3>
            </div>
            <hr
              className={`border  my-12 ${
                prix.featured ? "border-n-6" : "border-n-7"
              }`}
            />
            <div className="pb-10">
              {prix.features.map((bonus, idx) => (
                <ul key={idx} className="pb-6">
                  <li className="flex gap-1 ">
                    {" "}
                    <img src={icoCheck} alt="" width={20} /> {bonus}
                  </li>
                </ul>
              ))}
            </div>
            <Button
              className={`flex items-center gap-1"`}
              theme={`${prix.featured ? "primary" : "secondary"}`}
            >
              Get strated{" "}
              <img src={icoArrowRight} alt="" width={24} height={24} />
            </Button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Pricing;
