"use client";
import React from "react";
import { faCirclePlay, faChalkboardTeacher, faLaptop, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import picture1 from "../../../public/images/assets1/Picture4.png";
import picture2 from "../../../public/images/assets1/Picture5.png";
import picture3 from "../../../public/images/assets1/Picture6.png";
import picture4 from "../../../public/images/assets1/Picture7.png";
import picture5 from "../../../public/images/assets1/Picture8.png";
import picture6 from "../../../public/images/assets1/Picture9.png";

function Content() {
  return (
    <section className="py-14 stripe-background" data-aos="fade-up">
      <div className="container mx-auto">
        <div className="">
          <h1 className="border-b-2 border-[#0E9AC5] w-fit mx-auto text-3xl md:text-3xl font-medium">Contents</h1>

          <div className="grid md:grid-cols-2 md:px-9  lg:px-8 lg:grid-cols-3 grid-cols-1 px-10  gap-6  py-14">
            <div className="text-center">
              <FontAwesomeIcon icon={faCirclePlay} className="text-5xl" />
              <h1 className="text-xl md:text-2xl py-4">Video Session</h1>
              <p className="text-sm md:text-lg lg:text-base">Students will have a course that given from the lectures, in order to have a great knowledge of the technology that student want to be in the future</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="text-5xl" />
              <h1 className="text-xl md:text-2xl py-4">Mentoring Session</h1>
              <p className="text-sm md:text-lg lg:text-base">Students meet their mentors in order to have a disscuss about the projects, soft skills and hard skills, also asking about the future plan of the Students.</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faLaptop} className="text-5xl" />
              <h1 className="text-xl md:text-2xl py-4">Weekly Session</h1>
              <p className="text-sm md:text-lg">
                In weekly, Student will have a zoom live lecture about the development skills including, self development, soft skills, hard skills, in order to be ready working as engineer in the future after participating in our
                porgramming bootcamp.
              </p>
            </div>
          </div>
          <div className="mx-auto w-fit">
            <Link href={"/pages/detail"} className="bg-[#58BBFF] text-white rounded-md py-3 px-5 ">
              Read More <FontAwesomeIcon icon={faCircleInfo} className="text-base" />
            </Link>
          </div>
        </div>
        <div id="services" className="lg:py-36 py-24">
          <h1 className="text-center text-3xl md:text-4xl font-semibold my-9">Our lesson category</h1>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 md:px-6 lg:grid-cols-3 grid-cols-1 px-10 lg:px-0 gap-6 md:gap-20 py-14 ">
            <div className="text-center">
              <Image width={120} src={picture1} alt="pic" className=" mx-auto" />
              <h2 className="font-semibold py-4 text-base md:text-xl">Web Development</h2>
              <p className="text-sm md:text-base lg:text-base">Basics of front end development -HTML / Javascript / Phyton</p>
            </div>
            <div className="text-center pt-4 md:pt-0">
              <Image width={120} src={picture2} alt="pic" className=" mx-auto" />
              <h2 className="font-semibold py-4 text-base md:text-xl">User Experience Design</h2>
              <p className="text-sm md:text-base lg:text-base">Basics of Design concepts and skills including: Usability, Accessibility, User Interface</p>
            </div>
            <div className="text-center pt-4 md:pt-0">
              <Image width={120} src={picture3} alt="pic" className=" mx-auto" />
              <h2 className="font-semibold py-4 text-base md:text-xl">Information & Frameworks</h2>
              <p className="text-sm md:text-base lg:text-base">A structure for the code, including Bulma CSS Framework etc</p>
            </div>
            <div className="text-center pt-4 md:pt-0">
              <Image width={120} src={picture4} alt="pic" className=" mx-auto" />
              <h2 className="font-semibold py-4 text-base md:text-xl">Database & Security</h2>
              <p className="text-sm md:text-base lg:text-base">Recognize and prevent common security exploits such as SQL-Injection / XSS etc</p>
            </div>
            <div className="text-center pt-4 md:pt-0">
              <Image width={120} src={picture5} alt="pic" className=" mx-auto" />
              <h2 className="font-semibold py-4 text-base md:text-xl">Soft skills</h2>
              <p className="text-sm md:text-base lg:text-base">Problem-solving / Decision-making / Critical Thinking / Global mind-set / Communication as Team</p>
            </div>
            <div className="text-center pt-4 md:pt-0">
              <Image width={120} src={picture6} alt="pic" className=" mx-auto" />
              <h2 className="font-semibold py-4 text-base md:text-xl">Presentation skills</h2>
              <p className="text-sm md:text-base lg:text-base">How to Effectively communicate Tech info to non-tech audience</p>
            </div>
          </div>
          <div className="mx-auto w-fit">
            <Link href={"/pages/unique"} className="bg-[#58BBFF] text-white rounded-md py-3 px-5 ">
              Read more <FontAwesomeIcon icon={faCircleInfo} className="text-base" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
