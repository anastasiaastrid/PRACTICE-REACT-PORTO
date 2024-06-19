import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 bg-white h-24 z-50 md:px-8 lg:px-16 border-b-[1px]">
      <div className="flex items-center">
        <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
          <img src="/ASTRID-H-LOGO-01-BLACK.jpg" className="p-1 w-full h-full" alt="Logo" />
        </div>
      </div>
      <div className="flex items-center ml-auto space-x-8">
        <Link to="/" className="text-black hover:text-gray-600 hover:font-bold transition-colors duration-300 font-medium">HOME</Link>
        <Link to="/skills" className="text-black  hover:text-gray-600 hover:font-bold transition-colors duration-300 font-medium">SKILLS</Link>
        <Link to="/projects" className="text-black  hover:text-gray-600 hover:font-bold transition-colors duration-300 font-medium">PROJECTS</Link>
        <Link to="/contact" className="text-black  hover:text-gray-600 hover:font-bold transition-colors duration-300 font-medium">CONTACT</Link>
      </div>
    </div>
  );
}

export default Header;
