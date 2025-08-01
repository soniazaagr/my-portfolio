import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-12 pt-10 pb-6 border-t border-gray-700 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">

        {/* Socials + Name */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-base font-semibold text-white tracking-wide">
            Jafir Nawab
          </span>
          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/jafir-nawab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/jafir-nawab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/jafirnawab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          className="bg-pink-600 text-white p-2 rounded-full shadow-md hover:bg-pink-700 transition duration-300"
          title="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>

      <div className="text-center mt-6 text-xs text-gray-500">
        &copy; {year} Jafir Nawab. All rights reserved.
      </div>
    </footer>
  );
}
