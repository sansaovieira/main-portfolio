
const Footer = () => {
  let data = new Date().getFullYear();
  return (
    <footer className="bg-#1f2235 text-white">
      <div className="container mx-auto px-4 my-8">
        <div className="flex md:flex-row justify-center items-center">
          <div className="flex flex-col mb-4 md:mb-0">
            <p className="text-lg font-semibold">Made with ❤️ by Sansão D. Vieira | CopyRight © {data} | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
