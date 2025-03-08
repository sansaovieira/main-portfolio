const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full bg-[#1f2235] text-white">
        <div className="max-w-full h-full p-6 flex justify-evenly font-montserrat font-bold">
          <div className="text-[#f84e54] text-3xl mr-98">SANSÃO VIEIRA</div>
          <ul className="flex gap-6">
            <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">HOME</li>
            <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">ABOUT</li>
            <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">SERVICE</li>
            <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">PORTFOLIO</li>
            <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">BLOG</li>
            <li className="hover:text-red-500 transition-colors duration-300 cursor-pointer">CONTACT</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
