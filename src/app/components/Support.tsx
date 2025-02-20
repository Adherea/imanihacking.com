import React from "react";
import logo2 from "../../../public/images/support/79f00f_4e5acee7ad284349865964e001c60413~mv2.png";
import logo3 from "../../../public/images/support/tokyouHostel.png";
import logo4 from "../../../public/images/support/creatair.png";
import logo5 from "../../../public/images/support/monad.png";
import logo6 from "../../../public/images/support/aantu.png";
import logo8 from "../../../public/images/support/lemitar.png";
import logo9 from "../../../public/images/support/brother.png";
import logo10 from "../../../public/images/support/sumicit.png";

import Image from "next/image";
// C:\Users\ditya\Desktop\English Only\imanihacking\src\app\globals.css

function Support() {
  return (
    <section className="bg-[#a2d9ff] md:py-6 md:px-5 w-full overflow-hidden py-5">
      <div>
        <h1 className="text-white text-2xl md:text-4xl text-center py-5">Partners:</h1>
      </div>
      <div className={`slideAnimation flex items-center gap-8 py-10`}>
        <Image src={logo8} alt="logo" className="md:w-1/6 w-2/6" />
        <Image src={logo2} alt="logo" className="md:w-1/6 w-2/6" />
        <Image src={logo3} alt="logo" className="md:w-1/6 w-2/6" />
        <Image src={logo9} alt="logo" className="md:w-1/6 w-2/6" />
        <Image src={logo4} alt="logo" className="md:w-1/6 w-2/6" />
        <Image src={logo10} alt="logo" className="md:w-1/6 w-2/6" />
        <Image src={logo5} alt="logo" className="md:w-1/6 w-2/6" />
        <Image src={logo6} alt="logo" className="md:w-1/6 w-2/6" />
      </div>
    </section>
  );
}

export default Support;
