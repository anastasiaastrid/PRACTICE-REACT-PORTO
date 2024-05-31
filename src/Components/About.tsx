import { PiPaintBrushDuotone } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import PortfolioCoding from "./PortfolioCoding";
import PortfolioDesign from "./PortfolioDesign";

function About() {
  return (
    <div className="mt-12 px-44 text-center flex flex-col items-center">
      <h2 className="text-black text-[40px] font-bold">
        {" "}
        Simply call me Astrid. Im a full stack web developer from Indonesia!
      </h2>
      <h2 className="my-5 text-black text-[14px]">
        Hello, I'm Astrid. I'm a full stack web developer, also a Graphic Designer based in Indonesia, Jakarta. I thrive
        in the dynamic intersection of graphics, social media, and animation. Ready to elevate your brand's visual
        presence and bring ideas to life with a touch of creativity.
      </h2>
      <FaCode className="mt-6 w-[50px] h-[50px] p-2 rounded-full bg-neutral-950 text-white text-[80px]" />
      <PortfolioCoding />
      <PiPaintBrushDuotone className=" mt-6 mb-3 w-[50px] h-[50px] p-2 rounded-full bg-neutral-950 text-white text-[80px]" />
      <PortfolioDesign />
    </div>
  );
}

export default About;
