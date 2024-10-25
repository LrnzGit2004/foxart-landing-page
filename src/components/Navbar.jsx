import React from "react";
import { logoApp } from "../assets/index";
import Container from "./Container";
import Button from "./Button";
import NavTheme from "./themes/NavTheme";

const Navbar = () => {
  return (
    <div className="border-b border-stroke-1">
      <Container className={"bg-n-9 relative"}>
        <div className="flex items-center justify-between py-4 lg:py-6 relative z-10">
          <img src={logoApp} alt="" width={104} height={32} />
          <Button theme="primary">Login</Button>
        </div>
      </Container>
      <NavTheme />
    </div>
  );
};

export default Navbar;
