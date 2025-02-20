import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer className="bg-[#6288B6] py-5">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-11 px-7 gap-7">
        <div className="">
          <div className="text-white ">
            <h1 className="text-2xl md:text-3xl font-semibold"> DARAJAPAN</h1>
            <p className="md:text-xl lg:text-base text-sm py-4">
              Empower individuals with cutting-edge tech skills, transcending borders, and shaping future tech innovators. Join us on this transformative journey to become a global tech leader.
            </p>
          </div>
        </div>
        <div className="py-7 lg:py-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12960.739972792071!2d139.779726!3d35.697065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188eae92fff387%3A0xa1900cfa37624b5a!2sQus%20Akihabara%20Bld.%2C%2091%20Kanda%20Sakumagashi%2C%20Chiyoda%20City%2C%20Tokyo%20101-0026%2C%20Jepang!5e0!3m2!1sid!2sid!4v1723534128855!5m2!1sid!2sid"
            width="320"
            height="240"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="text-white flex flex-col mx-4">
          <a href="https://www.darajapan.net/dara" target="_blank" className="text-sm md:text-base">
            <FontAwesomeIcon icon={faGlobe} width={30} /> www.darajapan.net/dara
          </a>
          <a href="" className="text-sm md:text-base">
            <FontAwesomeIcon icon={faInstagram} width={30} /> Instagram
          </a>
          <a href="" className="text-sm md:text-base">
            <FontAwesomeIcon icon={faEnvelope} width={30} /> mio@darajapan.net
          </a>
          <a href="" className="text-sm md:text-base">
            <FontAwesomeIcon icon={faWhatsapp} width={30} /> +81-90-4703-6610 Kanda Sakumagashi, Chiyoda City, Tokyo 101-0026, Japan
          </a>
        </div>
      </div>
      <p className="text-center text-white mx-auto text-sm md:text-base">© 2023 Imani Hacking | Darajapan</p>
    </footer>
  );
}

export default Footer;
