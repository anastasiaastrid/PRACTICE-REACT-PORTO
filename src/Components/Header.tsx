import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 bg-white h-24 z-50 md:px-8 lg:px-16 border-b-[1px]">
      <div className="flex items-center">
        <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
          <img src="/ASTRID-H-LOGO-01-BLACK.jpg" className="p-1 w-full h-full" alt="Logo" />
        </div>
      </div>
      <div className="hidden md:flex items-center ml-auto space-x-8">
        <Link to="/" className="text-black hover:text-gray-600 hover:font-bold transition-colors duration-300 font-medium">HOME</Link>
        <Link to="/skills" className="text-black hover:text-gray-600 hover:font-bold transition-colors duration-300 font-medium">SKILLS</Link>
        <Link to="/projects" className="text-black hover:text-gray-600 hover:font-bold transition-colors duration-300 font-medium">PROJECTS</Link>
        <Link to="/contact" className="text-black hover:text-gray-600 hover:font-bold transition-colors duration-300 font-medium">CONTACT</Link>
      </div>
      <div className="md:hidden ml-auto flex items-center">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-24 right-0 bg-white shadow-lg rounded-lg w-full md:hidden flex flex-col items-start space-y-4 p-4">
          <Link to="/" className="text-black hover:text-gray-600 hover:font-bold transition-colors duration-300 font-medium" onClick={toggleMenu}>HOME</Link>
          <Link to="/skills" className="text-black hover:text-gray-600 hover:font-bold transition-colors duration-300 font-medium" onClick={toggleMenu}>SKILLS</Link>
          <Link to="/projects" className="text-black hover:text-gray-600 hover:font-bold transition-colors duration-300 font-medium" onClick={toggleMenu}>PROJECTS</Link>
          <Link to="/contact" className="text-black hover:text-gray-600 hover:font-bold transition-colors duration-300 font-medium" onClick={toggleMenu}>CONTACT</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
