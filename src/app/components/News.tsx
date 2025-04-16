"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import news1 from "../../../public/images/support/CEO/3.jpg";
import news2 from "../../../public/images/support/CEO/1.png";
import news3 from "../../../public/images/support/CEO/4.jpg";
import news4 from "../../../public/images/support/CEO/Picture5.jpg";
import news5 from "../../../public/images/support/CEO/5.jpg";
import news6 from "../../../public/images/support/next_gen.jpeg";
import news7 from "../../../public/images/support/CEO/7.jpeg";
import news8 from "../../../public/images/support/under30.jpeg";
import news9 from "../../../public/images/support/news9.jpeg";
import news10 from "../../../public/images/support/undp.png";

const newss = [
  {
    id: "news10",
    date: "2024/December",
    desc: "IMANI Hacking Bootcamp  got Amazon Web Services (AWS) Award or the Women in IT Social Entrepreneurship on Youth Co:Lab Social Innovation Challenge Japan 2024 hosted by the United Nations Development Programme (UNDP) and Citi Foundation.",
    images: news10,
    linkurl: "https://www.undp.org/ja/japan/events/ycl2024-demoday-en",
  },
  {
    id: "news9",
    date: "2024/November",
    desc: "IMANI Hacking Bootcamp got MVP on SIH International Business Contest 2024 World Championship Final.",
    images: news9,
    linkurl: "https://sih.earth/event/575",
  },

  {
    id: "news1",
    date: "2024/July",
    desc: "IMANI Hacking Bootcamp won the BWA business Pitch Contest 2024 by Figaro Japon and got Professional Award (Grand Prize).",
    images: news2,
    linkurl: "https://madamefigaro.jp/society-business/241129-bwa-miotsunoda.html",
  },
  {
    id: "news2",
    date: "2024/February",
    desc: "Darajapan has officially selected by GlobalXpander Tokyo as a startups that supportsIT talent training and development.",
    images: news5,
    linkurl: "https://globalxpander.metro.tokyo.lg.jp/",
  },

  {
    id: "news3",
    date: "2023/September",
    desc: "2023 Sep, CEO of Darajapan Inc is selected as 8th APT women Acceleration Program in Tokyo and Silicon Valley Program, USA",
    images: news7,
    linkurl: "https://test.apt-women.metro.tokyo.lg.jp/en/program/participant/index.html",
  },
  {
    id: "news4",
    date: "2023/July",
    desc: "To increase IT talents for the international market, Imani Hacking Bootcamp Program has officialy been held for indonesian students.",
    images: news4,
    linkurl: "https://www.threads.net/@miomio_cean/post/Cub_wgDMXz6",
  },
  {
    id: "news5",
    date: "2023/January",
    desc: "Imani Hacking Bootcamp batch 2 program for tanzania students is been held to increase the IT Engineers experts. ",
    images: news3,
    linkurl: "https://www.threads.net/@miomio_cean/post/Cub_wgDMXz6",
  },
  {
    id: "news6",
    date: "2022/October ",
    desc: "CEO of Darajapan Inc. is selected as SIDO NEXT INNOVATOR - Develop Next Generation Innovators.",
    images: news6,
    // linkurl: "https://ynps.yakuji.co.jp/9033.html",
  },
  {
    id: "news7",
    date: "2022/May",
    desc: "To improve IT Talents in Tanzania, The first batch of Imani Hacking Bootcamp Program started for Tanzania students.",
    images: news1,
    linkurl: "https://www.threads.net/@miomio_cean/post/Cub_wgDMXz6",
  },
  {
    id: "news8",
    date: "2021/August",
    desc: "CEO of Darajapan Inc, Mio Tsunoda is selected as Social Entrepreneur of Forbes 30 Under 30 Japan 2021.",
    images: news8,
    linkurl: "https://forbesjapan.com/feat/30under30/2021/",
  },
];

function News() {
  const [showAll, setShowAll] = useState(false);
  const visibleNews = showAll ? newss : newss.slice(0, 3);

  return (
    <section id="news" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <h1 className="border-b-2 border-[#0E9AC5] w-fit mx-auto text-3xl md:text-4xl font-medium my-5">News</h1>
        <div className="my-5">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 items-center px-5 py-8 gap-6">
                {visibleNews.map((x, index) => (
                  <div key={index} onClick={() => window.open(x.linkurl, "_blank")} className="h-full w-full py-9 px-6 rounded-xl text-center hover:cursor-pointer duration-700 hover:-translate-y-6 hover:shadow-2xl">
                    <div className="w-fit mx-auto">
                      <Image src={x.images} alt="picture.png" className="border-2 border-black md:h-[200px]" />
                    </div>
                    <h1 className="text-3xl py-5">{x.date}</h1>
                    <p className="text-sm md:text-base">{x.desc}</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>

          {!showAll && (
            <div className="text-center my-5">
              <button onClick={() => setShowAll(true)} className="bg-[#407BFF] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Load More
              </button>
            </div>
          )}

          <hr />
        </div>
      </div>
    </section>
  );
}

export default News;
