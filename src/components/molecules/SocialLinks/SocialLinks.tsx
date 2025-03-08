const SocialLinks = () => (
  <div className="text-[#f84e54]">
    <ul className="flex">
      {[
        { href: "https://www.linkedin.com/in/sansaovieira/?locale=en_US", icon: "fa-linkedin-in" },
        { href: "https://github.com/sansaovieira", icon: "fa-github" },
        { href: "https://www.instagram.com/iams.slow/", icon: "fa-instagram" },
      ].map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1f2235] hover:bg-[#f84e54] text-[#f84e54] hover:text-white transition-all duration-300"
          >
            <i className={`fa-brands ${link.icon} text-xl`}></i>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default SocialLinks;
