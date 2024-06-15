import { PiPaintBrushDuotone } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import PortfolioCoding from "./PortfolioCoding";
import Webdesign from "./Webdesign";

function About() {
  return (
    <div className="mt-12 px-44 text-center flex flex-col items-center">
      <h2 className="text-black text-[40px] font-bold">
        {" "}
        Simply call me Astrid. Im a full stack web developer from Indonesia!
      </h2>
      <h2 className="my-5 text-black text-[14px]">
        Hello, I'm Astrid. I'm a full stack web developer based in Jakarta, Indonesia. I'm continuously learning and
        practicing to enhance my skills. Ready to elevate your brand's online presence and bring ideas to life with
        innovative solutions.
      </h2>
      <FaCode className="mt-6 w-[50px] h-[50px] p-2 rounded-full bg-neutral-950 text-white text-[80px]" />
      <PortfolioCoding />
      <PiPaintBrushDuotone className=" mt-6 mb-3 w-[50px] h-[50px] p-2 rounded-full bg-neutral-950 text-white text-[80px]" />
      <Webdesign/>
    </div>
  );
}

export default About;
