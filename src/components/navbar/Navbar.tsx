import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getNavLinkClass = (path: string) =>
    location.pathname === path
      ? "text-[#f84e54]"
      : "text-white hover:text-[#f84e54] transition-colors duration-300";

  return (
    <nav className="fixed w-full bg-[#1f2235] text-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="text-white text-2xl font-bold">
          <Link to="/home">SANSÃO VIEIRA</Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className="hidden md:flex gap-6 text-lg font-semibold">
          <li><Link to="/home" className={getNavLinkClass("/home")}>HOME</Link></li>
          <li><Link to="/about" className={getNavLinkClass("/about")}>ABOUT</Link></li>
          <li><Link to="/portfolio" className={getNavLinkClass("/portfolio")}>PORTFOLIO</Link></li>
          <li><Link to="/contact" className={getNavLinkClass("/contact")}>CONTACT</Link></li>
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1f2235] absolute top-16 left-0 w-full flex flex-col items-center py-4">
          <ul className="text-lg font-semibold space-y-4">
            <li><Link to="/home" className={getNavLinkClass("/home")} onClick={toggleMenu}>HOME</Link></li>
            <li><Link to="/about" className={getNavLinkClass("/about")} onClick={toggleMenu}>ABOUT</Link></li>
            <li><Link to="/portfolio" className={getNavLinkClass("/portfolio")} onClick={toggleMenu}>PORTFOLIO</Link></li>
            <li><Link to="/contact" className={getNavLinkClass("/contact")} onClick={toggleMenu}>CONTACT</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
