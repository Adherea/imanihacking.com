"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import map from "../../../public/images/assets2/countries.png";
import tanzania from "../../../public/images/flags/tanzania.jpg";
import indonesia from "../../../public/images/flags/indonesia.jpg";
import philipines from "../../../public/images/flags/philipines.jpg";
import uganda from "../../../public/images/flags/Uganda.png";
import Mauritius from "../../../public/images/flags/Mauritius.png";
import japan from "../../../public/images/flags/japan.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faTrophy, faGlobe, faBlackboard } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

function Country() {
  const [startCounting, setStartCounting] = useState(false);
  const countUpSectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounting(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countUpSectionRef.current) {
      observer.observe(countUpSectionRef.current);
    }

    return () => {
      if (countUpSectionRef.current) {
        observer.unobserve(countUpSectionRef.current);
      }
    };
  }, []);

  return (
    <section id="countries" className="py-28 px-3 md:px-0">
      <div className="container mx-auto bg-[#ADD8E6] rounded-xl px-6 py-12">
        <h1 className="text-center text-[#212A94] md:text-5xl text-3xl font-semibold py-10">Countries</h1>
        <Image src={map} alt="map.jpg" className="w-full" />

        <div className="">
          <div className="text-[#212A94] ">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12 py-32">
              <div>
                <Image src={tanzania} alt="map.jpg" className="w-32 h-32 bg-blue-500 rounded-full mx-auto" />
                <h1 className="text-center pt-4 font-semibold text-2xl">Tanzania</h1>
                <p className="py-2 text-sm md:text-base">
                  In Tanzania, there is an intensified effort to train the workforce in the field of IT, but there is a shortage of job opportunities. Industrial diversification is a key challenge, while the rapidly growing IT and software
                  industry is considered one of the vital primary sectors.
                </p>
              </div>
              <div>
                <Image src={uganda} alt="map.jpg" className="w-32 h-32 bg-blue-500 rounded-full mx-auto" />
                <h1 className="text-center pt-4 font-semibold text-2xl">Uganda</h1>
                <p className="py-2 text-sm md:text-base">
                  Uganda is still part of south Africa, and known for adaptable, and English-proficient workforce is ideal for IT bootcamps, which can accelerate skill development and enhance Uganda’s competitiveness in the global tech
                  industry, supporting its emerging digital economy.
                </p>
              </div>
              <div>
                <Image src={Mauritius} alt="map.jpg" className="w-32 h-32 bg-blue-500 rounded-full mx-auto" />
                <h1 className="text-center pt-4 font-semibold text-2xl">Mauritius</h1>
                <p className="py-2 text-sm md:text-base">
                  Mauritius’s multilingual and multicultural background, combined with strong analytical and technological skills, makes its people Appropriate for IT bootcamps. These programs can help to develop globally competitive IT
                  talent, contributing significantly to both local innovation and the broader digital landscape.
                </p>
              </div>

              <div>
                <Image src={indonesia} alt="map.jpg" className="w-32 h-32 bg-blue-500 rounded-full mx-auto" />
                <h1 className="text-center pt-4 font-semibold text-2xl">Indonesia</h1>
                <p className="py-2 text-sm md:text-base">
                  In Indonesia, efforts to boost teacher skills mainly center on computer literacy rather than addressing IT education issues. Nationwide expansion plans are in early pilot stages without a clear strategy. Indonesia is also
                  seen as a promising opportunity for IT engineers to work in Japan remotely or in-office.
                </p>
              </div>

              <div>
                <Image src={philipines} alt="map.jpg" className="w-32 h-32 bg-blue-500 rounded-full mx-auto" />
                <h1 className="text-center pt-4 font-semibold text-2xl">Philippines</h1>
                <p className="py-2 text-sm md:text-base">
                  In the Philippines, educators skills are improving, with a focus on computer literacy rather than IT education. Nationwide expansion is in early pilot stages with no clear strategy. The Philippines is seen as a chance for
                  global collaboration and relationship-building.
                </p>
              </div>
              <div>
                <Image src={japan} alt="map.jpg" className="w-32 h-32 bg-[#F5F5F5] rounded-full mx-auto" />
                <h1 className="text-center pt-4 font-semibold text-2xl">Japan</h1>
                <p className="py-2 text-sm md:text-base">
                  Japan's strong work ethic, attention to detail, and collaborative culture make its professionals well-suited for IT bootcamps. These programs can accelerate skill development, contributing to Japan's digital transformation
                  and its impact on the global tech industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <h1 className="text-center text-2xl  md:text-4xl font-medium ">Our Achievements</h1>
        <div ref={countUpSectionRef} className="max-w-xl mx-auto text-center py-24 grid grid-cols-2 gap-8">
          <div data-aos="fade-up" className="">
            <FontAwesomeIcon className="text-6xl text-[#FF5081]" icon={faBlackboard} />
            <h1 className="py-3 text-2xl  md:text-4xl font-bold">{startCounting && <CountUp start={0} end={120} duration={3} />}</h1>
            <h4 className="text-gray-500 text-xs md:text-xl">TRAINING PARTICIPANTS</h4>
          </div>
          <div data-aos="fade-up" className="">
            <FontAwesomeIcon className="text-6xl text-[#B2D672]" icon={faPerson} />
            <h1 className="py-3 text-2xl  md:text-4xl font-bold">{startCounting && <CountUp start={0} end={50} duration={3} />}</h1>
            <h4 className="text-gray-500 text-xs md:text-xl">STUDENTS/YEAR</h4>
          </div>
          <div data-aos="fade-up" className="">
            <FontAwesomeIcon className="text-6xl text-[#48CEBB]" icon={faTrophy} />
            <h1 className="py-3 text-2xl  md:text-4xl font-bold">{startCounting && <CountUp start={0} end={3} duration={3} />}</h1>
            <h4 className="text-gray-500 text-xs md:text-xl">PRIZE WON</h4>
          </div>
          <div data-aos="fade-up" className="">
            <FontAwesomeIcon className="text-6xl text-[#F18B50]" icon={faGlobe} />
            <h1 className="py-3 text-2xl  md:text-4xl font-bold">{startCounting && <CountUp start={0} end={3} duration={3} />}</h1>
            <h4 className="text-gray-500 text-xs md:text-xl">YEARS OF EXPERIENCE</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Country;
