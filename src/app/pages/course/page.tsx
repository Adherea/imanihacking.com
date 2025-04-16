"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Course() {
  return (
    <section>
      {/* <nav className="flex items-center text-white justify-between md:px-12 px-5 text-xl bg-[#79c9e0] ">
        <div>
          <Image src="/images/logo.png" alt="logo" width={140} height={200} />
        </div>
        <div>
          <ul className="w-fit mx-auto">
            <li>
              <Link href={`/`} className="group relative text-center cursor-pointer">
                Back To Home
              </Link>
            </li>
          </ul>
        </div>
      </nav> */}
      <div>
        <h1 className="border-b-2 border-[#0E9AC5] w-fit mx-auto text-2xl md:text-3xl font-medium pt-12">Online Courses</h1>
        <h1 className="text-center max-w-3xl md:text-2xl mx-auto py-10 px-2 text-lg">Your Journey to Excellence Begins Here: Partner with Our International IT Bootcamp and Access Top Tech Talent from Across the World.</h1>

        <div className="bg-gray-50 p-8">
          <div className="container mx-auto grid lg:grid-cols-4 grid-cols-1 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Basics of Frontend Backend Development</h2>
              <ul className="list-disc ml-4 space-y-2">
                <li>
                  <strong className="md:text-sm text-base">Skills for OS and Middleware.</strong>
                  <ul className="list-disc ml-6">
                    <li>Python (Flask, FastAPI, Django, Selenium)</li>
                    <li>Go (Echo and Gin) / Swift</li>
                    <li>JavaScript (Node.js, Express JS, ReactJS, NextJS)</li>
                    <li>Java (Springboot)</li>
                    <li>HTML, HTMX, PHP, CSS, JS</li>
                    <li>My-SQL, PostgreSQL, MongoDB</li>
                    <li>etc...</li>
                  </ul>
                </li>
                <li>
                  <strong>Program Design</strong>
                </li>
                <li>
                  <strong>Knowledge and Skills in Cloud Services</strong>
                  <ul className="list-disc ml-6">
                    <li>Program Design</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Machine Learning Engineer Course</h2>
              <ul className="list-disc ml-4 space-y-2">
                <li>
                  <strong>Basics of Coding Development</strong>
                  <ul className="list-disc ml-6">
                    <li>Python (Flask, FastAPI, Django, Selenium)</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>etc...</li>
                  </ul>
                </li>
                <li>
                  <strong>Frameworks and Libraries</strong>
                  <ul className="list-disc ml-6">
                    <li>Scikit-learn</li>
                    <li>TensorFlow</li>
                    <li>PyTorch</li>
                    <li>etc....</li>
                  </ul>
                </li>
                <li>
                  <strong>Mathematics and Statistics</strong>
                  <ul className="list-disc ml-6">
                    <li>Probability</li>
                    <li>Regression analysis</li>
                    <li>Hypothesis testing</li>
                    <li>Linear algebra, calculus, probability theory</li>
                    <li>Statistics and machine learning algorithms</li>
                  </ul>
                </li>
                <li>
                  <strong>Data Analysis Skills</strong>
                  <ul className="list-disc ml-6">
                    <li>Data preprocessing</li>
                    <li>Visualization</li>
                    <li>Feature engineering</li>
                  </ul>
                </li>
                <li>
                  <strong>User Experience Design</strong>
                  <ul className="list-disc ml-6">
                    <li>Web scraping</li>
                    <li>Using APIs to collect data from the web</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">UI/UX/Web Designer Course</h2>
              <ul className="list-disc ml-4 space-y-2">
                <li>
                  <strong>Basics of Design Skills</strong>
                  <ul className="list-disc ml-6">
                    <li>Layout, color schemes, and typography</li>
                    <li>Adobe Illustrator, Photoshop, Figma</li>
                    <li>HTML/CSS/JavaScript</li>
                    <li>etc...</li>
                  </ul>
                </li>
                <li>
                  <strong>Marketing Skills</strong>
                  <ul className="list-disc ml-6">
                    <li>Trends of competitors</li>
                    <li>Market changes</li>
                    <li>Web analytics tools, SEO</li>
                  </ul>
                </li>
                <li>
                  <strong>User Perspectives</strong>
                </li>
              </ul>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Data Analyst Course</h2>
              <ul className="list-disc ml-4 space-y-2">
                <li>
                  <strong>Basics of Programming Skills</strong>
                  <ul className="list-disc ml-6">
                    <li>Python / R</li>
                    <li>Data analysis libraries (Pandas, NumPy)</li>
                    <li>Machine learning libraries (Scikit-learn, TensorFlow)</li>
                  </ul>
                </li>
                <li>
                  <strong>Mathematics and Statistics</strong>
                </li>
                <li>
                  <strong>Database Knowledge</strong>
                  <ul className="list-disc ml-6">
                    <li>SQL</li>
                  </ul>
                </li>
                <li>
                  <strong>Analysis Tools</strong>
                  <ul className="list-disc ml-6">
                    <li>Excel to organize and visualize data</li>
                    <li>How to use web scraping and APIs</li>
                    <li>How to use image recognition tools and natural language processing tools by AI</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Course;
