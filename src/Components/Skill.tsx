import { PiPaintBrushDuotone } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";


function Skill() {
    return (
        <div className="px-8 md:px-44 text-center flex flex-col items-center pt-24"> 
          <h2 className="text-black text-[40px] font-bold pt-10">
           My Skills
          </h2>
      
          <FaCode className="mt-6 w-[50px] h-[50px] p-2 rounded-full bg-neutral-950 text-white" />
          <div className="my-5 w-full flex flex-col items-center">
            <p>Web Development</p>
          </div>
          <PiPaintBrushDuotone className="mt-6 mb-3 w-[50px] h-[50px] p-2 rounded-full bg-neutral-950 text-white" />
          <div className="mb-5 w-full flex flex-col items-center">
            <p>Web Designing</p>

          </div>
        </div>
      );
    }
    
  
  export default Skill;
  