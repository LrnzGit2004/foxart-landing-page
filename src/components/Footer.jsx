import React from "react";
import Container from "./Container";
import { icoFacebook, icoInstagram, icoLinkedin, icoX } from "../assets";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center justify-center bg-n-7 py-[50px] px-60 space-y-10 mt-32 lg:gap-20">
        <div className="flex gap-10 mt-8">
          <img src={icoFacebook} alt="" width={20}  className="cursor-pointer"/>
          <img src={icoX} alt="" width={20} height={20} className="cursor-pointer"/>
          <img src={icoInstagram} alt="" width={20} height={20} className="cursor-pointer"/>
          <img src={icoLinkedin} alt="" width={20} height={20} className="cursor-pointer"/>
        </div>
        <div className="flex gap-6">
          <p className="text-n-1/75">Terms & Conditions</p>
          <p className="text-n-1/75">Privacy Policy</p>
        </div>
        <div className="text-n-1/75">2022 All rights reserved</div>
      
    </div>
  );
};

export default Footer;
