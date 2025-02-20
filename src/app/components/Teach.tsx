"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";
import teach1 from "../../../public/images/support/Dosen.jpg";
import teach2 from "../../../public/images/support/daniel.jp.jpg";
import teach3 from "../../../public/images/Emmanuel Tarimo.jpg";
import teach4 from "../../../public/images/support/nuru.jpg";
import teach5 from "../../../public/images/support/Gery.png";
import mentor1 from "../../../public/images/support/saki.png";
import mentor2 from "../../../public/images/support/naho.png";
import mentor3 from "../../../public/images/support/Douglus.png";
const instructors = [
  {
    id: "instructor1",
    image: teach1,
    name: "Dr Kelechukwu N. Onwukamike",
    specialization: "Researcher of Chemistry, Coarching",
    desc: "Developing sustainable cellulose-based materials, mentoring students, and holding dual PhDs in Organic and Polymer Chemistry from KIT Germany and University of Bordeaux France, I'm a Research Scientist at Procter &amp Gamble Germany, emphasizing human capacity development.",
    profil: "https://www.linkedin.com/in/kelechukwu-onwukamike-phd/",
  },
  {
    id: "instructor2",
    image: teach2,
    name: "Daniel Joseph Makyao",
    specialization: "Software Engineer",
    desc: "Daniels is experienced software developer skilled in Python, Django, PostgreSQL, and MERN stack. Committed to continuous learning and staying current with the latest tech trends, emphasizing precision in all project aspects, from improving features to developing new products. Skills: Python, Java, Java Script, React.",
    profil: "https://www.linkedin.com/in/daniel-makyao-6ab072223/",
  },
  {
    id: "instructor3",
    image: teach3,
    name: "Emmanuel Tarimo",
    specialization: "Data scientist, Web Dev, Designer",
    desc: "As a data scientist and data analyst, I excel in collecting, cleaning, and analyzing complex data, crafting predictive models, and delivering actionable insights. Also he is a web developer, building dynamic and secure websites using Python frameworks.",
    profil: "https://www.linkedin.com/in/emmanuel-tarimo-36b82a117/?originalSubdomain=tz",
  },
  {
    id: "instructor4",
    image: teach4,
    name: "Nuha Nuru Ayubi",
    specialization: "Automation Dev, Data Analyst.",
    desc: "Nuha Nuru is an experienced professional in Python, Pandas, C, and Robotic Process Automation (RPA) using the UiPath platform. He is a dedicated individual with a daily commitment to exploring and discovering new technologies.",
    profil: "https://www.linkedin.com/in/nuha-n-488424b8/",
  },
  {
    id: "instructor5",
    image: teach5,
    name: "Gerry Sabar",
    specialization: "Software Engineer",
    desc: "8+ years of hands-on experience in software development and testing, spanning analysis, data modeling, design, project delivery, and collaboration across all organizational levels.",
    profil: "https://www.linkedin.com/in/gerrysabar/",
  },
];

const mentorss = [
  {
    id: "mentor1",
    image: mentor1,
    name: "Saki Yanagihara",
    specialization: "Enterprenurship, Mentoring skills.",
    desc: "International education enthusiast with a multicultural background, pursuing a Master's in Education in Japan. A new business builder, adaptable in various roles for social development projects, passionate about fostering understanding and academic growth, with a broad professional network.",
    profil: "https://www.linkedin.com/in/saki-yanagihara-290024204/",
  },
  {
    id: "mentor2",
    image: mentor2,
    name: "Naho Chujo",
    specialization: "Researcher, Analysist, Mentoring.",
    desc: "Former international NPO social worker in Kenya, now the Director of Greendy Association, with expertise in community management, research, problem-solving, and mentoring. GCI data science summer school 2020 alumnus, currently in a data science startup role.",
    profil: "https://www.linkedin.com/in/naho-chujo-1731b9179/",
  },
  {
    id: "mentor3",
    image: mentor3,
    name: "Douglas Fortunatus",
    specialization: "Software Engineer.",
    desc: "Guiding engineers in executing diverse development projects, including E-commerce sites and APIs, and collaborating on Node-API development. Proficient in React, HTML, CSS, PHP, Laravel, Vue.js, Python, and JavaScript. As a work officer, she shares project management expertise. Skills: PHP, Java, JavaScript, Swift, Node.js, React.js, Laravel.",
    profil: "https://github.com/douglas-fortunatus",
  },
];

function Teach() {
  return (
    <>
      <section id="members" data-aos="fade-up">
        <div className="">
          <div className="container mx-auto px-5 md:px-8 py-5">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              initialSlide={0}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <h1 className="border-b-2 border-[#0E9AC5] w-fit mx-auto text-3xl md:text-4xl font-medium my-5">Instructors</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 hover:cursor-grab active:cursor-grabbing ">
                  {instructors.map((instructor, index) => (
                    <div key={index} className="bg-[#58BBFF] rounded-2xl flex flex-col">
                      <Image className="md:w-1/3 w-1/2 mx-auto rounded-full border-4 my-5 border-white" src={instructor.image} alt="instructor.jpg" />
                      <div className="bg-white rounded-2xl py-5 px-6 mt-3 h-full flex flex-col justify-between">
                        <div>
                          <h1 className="text-center text-3xl">{`${instructor.name}`}</h1>
                          <h4 className="text-center py-5">
                            <span className="font-semibold">Specialization:</span> {`${instructor.specialization}`}
                          </h4>
                          <p className="text-center text-sm md:text-base">{`${instructor.desc}`}</p>
                        </div>
                        <div className="mx-auto w-fit py-7">
                          <Link target="_blank" href={`${instructor.profil}`} className="bg-[#58BBFF] text-white rounded-full w-full py-1 px-5">
                            Visit Me
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <h1 className="border-b-2 border-[#0E9AC5] w-fit mx-auto text-4xl font-medium my-5">Mentors</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {mentorss.map((x, index) => (
                    <div key={index} className="bg-[#58BBFF] rounded-2xl flex flex-col">
                      <Image className="md:w-1/3 w-1/2 mx-auto rounded-full border-4 my-5 border-white" src={x.image} alt="mentor.jpg" />
                      <div className="bg-white rounded-2xl py-5 px-6 -mt-3 h-full flex flex-col flex-grow">
                        <h1 className="text-center text-3xl">{`${x.name}`}</h1>
                        <h4 className="text-center py-5">
                          <span className="font-semibold">Specialization:</span>
                          {`${x.specialization}`}
                        </h4>
                        <p className="text-center">{`${x.desc}`}</p>
                        <div className="mt-auto mx-auto w-fit py-7">
                          <Link target="_blank" href={`${x.profil}`} className="bg-[#58BBFF] text-white rounded-full py-1 px-5">
                            Visit Me
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Teach;
