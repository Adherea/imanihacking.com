import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

function Hero() {
  return (
    <section className="hero-background bg-cover">
      <Navbar />
      <div className="text-white md:p-56 h-full bg-gradient-to-r from-[#82B3C5] py-24 ">
        <div className="md:max-w-7xl lg:max-w-2xl leading-tight px-5 py-6 md:py-0 md:px-0">
          <h1 className="text-4xl leading-tight md:text-4xl xl:text-5xl  font-medium">Produce a global Tech leader beyond borders.</h1>
          <p className="md:py-5  text-xl font-medium md:text-xl md:my-4 my-6">
            Becoming Global Tech Leaders Together. We empower people with advanced tech skills, crossing borders to create future tech innovators. Join us on this journey to become a global tech leader.
          </p>
          <Link href="/pages/register" className="bg-[#407BFF] text-white rounded-md py-3 px-5 hover:bg-[#769df3] duration-300 hover:rounded-full border-2 border-[#407BFF] hover:border-white ">
            JOIN US NOW!
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
