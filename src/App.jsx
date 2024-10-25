import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Branding from "./components/Branding";
import Features from "./components/Features";
import Container from "./components/Container";
import CallToAction from "./components/CallToAction";
import Title from "./components/Title";
import Works from "./components/Works";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {

  const minimal = true

  return (
    <div>
      <Navbar />
      <Hero />
      <Branding />
      <Container className="hidden lg:block lg:pt-16">
        <hr className="border border-n-7 " />
      </Container >
      <Features />
      <CallToAction/>
      <Title subtitle={"saflow"} title={"How does it work?"}/>
      <Works/>
      <Title subtitle={"saflow"} title={"Pricing"}/>
      <Pricing/>
      <CallToAction minimal = {minimal}/>
      <Footer/>
    </div>
  );
}

export default App;
