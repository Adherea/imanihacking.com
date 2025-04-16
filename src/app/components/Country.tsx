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
import cameroon from "../../../public/images/flags/cameroon.jpg";
import madagascar from "../../../public/images/flags/madagascar.png";
import djibouti from "../../../public/images/flags/djibouti-.jpg";
import jordon from "../../../public/images/flags/jordon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faTrophy, faGlobe, faBlackboard } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion"; // Import Framer Motion
function Country() {
  const [startCounting, setStartCounting] = useState(false);
  const countUpSectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const fadeVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }, // Animasi keluar
  };

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

  function awd(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  const countrynya = [
    {
      gambar: tanzania,
      negara: "Tanzania",
      desc: "In Tanzania, there is an intensified effort to train the workforce in the field of IT, but there is a shortage of job opportunities. Industrial diversification is a key challenge, while the rapidly growing IT and software industry is considered one of the vital primary sectors.",
    },
    {
      gambar: uganda,
      negara: "Uganda",
      desc: "Uganda is still part of south Africa, and known for adaptable, and English-proficient workforce is ideal for IT bootcamps, which can accelerate skill development and enhance Uganda’s competitiveness in the global tech industry, supporting its emerging digital economy.",
    },
    {
      gambar: Mauritius,
      negara: "Mauritius",
      desc: "Mauritius’s multilingual and multicultural background, combined with strong analytical and technological skills, makes its people Appropriate for IT bootcamps. These programs can help to develop globally competitive IT talent, contributing significantly to both local innovation and the broader digital landscape.",
    },
    {
      gambar: indonesia,
      negara: "Indonesia",
      desc: "In Indonesia, efforts to boost teacher skills mainly center on computer literacy rather than addressing IT education issues. Nationwide expansion plans are in early pilot stages without a clear strategy. Indonesia is also seen as a promising opportunity for IT engineers to work in Japan remotely or in-office.",
    },
    {
      gambar: philipines,
      negara: "Philipines",
      desc: "In the Philippines, educators skills are improving, with a focus on computer literacy rather than IT education. Nationwide expansion is in early pilot stages with no clear strategy. The Philippines is seen as a chance for global collaboration and relationship-building.",
    },
    {
      gambar: japan,
      negara: "Japan",
      desc: "Japan's strong work ethic, attention to detail, and collaborative culture make its professionals well-suited for IT bootcamps. These programs can accelerate skill development, contributing to Japan's digital transformation and its impact on the global tech industry.",
    },
    {
      gambar: cameroon,
      negara: "Cameroon",
      desc: "Cameroon's diverse linguistic and cultural background, combined with a growing interest in digital skills, makes it a promising location for IT bootcamps. While job opportunities in the tech sector remain limited, training initiatives can enhance workforce adaptability and global competitiveness. Developing a strong IT ecosystem will be crucial in supporting Cameroon’s digital economy and fostering innovation in the region.",
    },
    {
      gambar: madagascar,
      negara: "Madagascar",
      desc: "Madagascar’s multilingual and adaptable workforce, combined with a rising interest in technology, makes it a suitable environment for IT bootcamps. While the country faces challenges in industrial diversification and job creation, targeted training programs can help develop globally competitive IT talent. Strengthening Madagascar’s digital economy will be essential for driving local innovation and expanding opportunities in the tech sector.",
    },
    {
      gambar: djibouti,
      negara: "Djibouti",
      desc: "Djibouti’s strategic location and multilingual workforce provide a strong foundation for IT bootcamps. While the country is still in the early stages of digital transformation, investment in IT education can enhance workforce skills and create new opportunities in the global tech industry. Strengthening IT training programs will be crucial in supporting Djibouti’s emerging digital economy and fostering innovation.",
    },
    {
      gambar: jordon,
      negara: "Jordon",
      desc: "Jordan's highly skilled, English-proficient workforce makes it an ideal location for IT bootcamps. While the country faces challenges in job market expansion, IT education can accelerate skill development and enhance Jordan’s competitiveness in the global tech industry. Strengthening its digital economy will be key to fostering local innovation and creating new opportunities for IT professionals.",
    },
  ];

  return (
    <section id="countries" className="py-28 px-3 md:px-0">
      <div className="container mx-auto bg-[#ADD8E6] rounded-xl px-6 py-12" data-aos="zoom-out-up">
        <h1 className="text-center text-[#212A94] md:text-5xl text-3xl font-semibold py-10">Countries</h1>
        <Image src={map} alt="map.jpg" className="w-full" />

        <div>
          <div className="text-[#212A94] ">
            <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-12 py-32">
              {countrynya.map((country, index) => (
                <div key={index} onClick={() => awd(index)} className="cursor-pointer">
                  <Image src={country.gambar} alt={country.negara} className="w-14 h-14 md:w-20 md:h-20 lg:w-32 lg:h-32 bg-blue-500 rounded-full mx-auto" />
                  <h1 className="text-center pt-4 font-semibold md:text-2xl">{country.negara}</h1>

                  {/* Tambahin AnimatePresence biar animasi exit jalan */}
                  <AnimatePresence mode="wait">
                    {activeIndex === index && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit" // Pakai animasi keluar
                        variants={fadeVariants}
                      >
                        <p className="py-2 text-xs text-justify  md:text-base  md:text-start">{country.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
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
