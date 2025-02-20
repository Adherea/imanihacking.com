"use client";
import About from "./components/About";
import Content from "./components/Content";
import Country from "./components/Country";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Teach from "./components/Teach";
import "../../src/app/globals.css";
export default function Home() {
  return (
    <section>
      <div>
        {/* <Navbar /> */}
        <Hero />
        <About />
        <Content />
        <Teach />
        <Country />
        <News />
      </div>
    </section>
  );
}
