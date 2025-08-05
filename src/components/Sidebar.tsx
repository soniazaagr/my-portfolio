import {
  FaPhone,
  FaEnvelope,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaDownload,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="bg-[#1f1f29] dark:bg-[#f3f3f3] text-white dark:text-black p-6 rounded-xl w-full md:w-80 flex flex-col items-center h-full shadow-lg">
      {/* Profile */}
      <img src="/images/profileImage.jpeg" alt="Jafir Nawab" className="w-32 h-32 object-cover rounded-xl" />
      <h2 className="mt-4 text-xl font-bold">Jafir Nawab</h2>
      <p className="text-sm text-gray-400 dark:text-gray-600">UI/UX Designer</p>

      <p className="text-xs text-gray-400 dark:text-gray-600 mt-2 text-center">
        Passionate about creating elegant, user-friendly designs and frontend solutions.
      </p>

      <hr className="my-4 border-gray-600 w-full dark:border-gray-300" />

      {/* Contact Info */}
      <div className="space-y-2 text-sm w-full text-gray-300 dark:text-gray-700">
        <div className="flex items-center gap-2"><FaPhone /> <span>+92 307-1575764</span></div>
        <div className="flex items-center gap-2"><FaEnvelope /> <span>muhammadjafirnawab@gmail.com</span></div>
        <div className="flex items-center gap-2"><FaMapMarkerAlt /> <span>Punjab, Pakistan</span></div>
        <div className="flex items-center gap-2"><FaBirthdayCake /> <span>March 03, 2003</span></div>
      </div>

      <hr className="my-4 border-gray-600 w-full dark:border-gray-300" />

      {/* Skills Progress */}
      <div className="w-full text-sm">
        <p className="font-semibold mb-2 text-white dark:text-black">Technical Skills</p>
        {[{ name: "React", level: "w-[90%]" },
          { name: "TypeScript", level: "w-[85%]" },
          { name: "Tailwind CSS", level: "w-[80%]" },
          { name: "Figma", level: "w-[75%]" }].map((skill) => (
          <div key={skill.name} className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span>{skill.name}</span>
            </div>
            <div className="bg-gray-700 dark:bg-gray-300 h-2 rounded-full">
              <div className={`bg-pink-500 h-2 rounded-full ${skill.level}`}></div>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-4 border-gray-600 w-full dark:border-gray-300" />

      {/* Language Proficiency */}
      <div className="w-full text-sm">
        <p className="font-semibold mb-2 text-white dark:text-black">Languages</p>
        <ul className="space-y-1">
          <li>English: ⭐⭐⭐⭐☆</li>
          <li>Urdu: ⭐⭐⭐⭐⭐</li>
          <li>Punjabi: ⭐⭐⭐⭐☆</li>
        </ul>
      </div>

      <hr className="my-4 border-gray-600 w-full dark:border-gray-300" />

      {/* Social Icons */}
      <div className="flex justify-center gap-4 text-xl text-gray-400 dark:text-gray-700">
        <a href="https://linkedin.com/in/jafir-nawab" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-pink-500" /></a>
        <a href="https://github.com/jafir-nawab" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-pink-500" /></a>
        <a href="https://twitter.com/jafirnawab" target="_blank" rel="noopener noreferrer"><FaTwitter className="hover:text-pink-500" /></a>
      </div>

      {/* Resume Button */}
      <a 
        href="/images/Jafir_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 bg-pink-600 hover:bg-pink-700 transition px-6 py-2 text-white rounded-full flex items-center gap-2"
      >
        <FaDownload /> View Resume
      </a>

      {/* Theme Switcher */}
      <button
        onClick={toggleTheme}
        className="mt-4 flex items-center gap-2 text-sm text-pink-400 hover:text-pink-300 transition"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <hr className="my-4 border-gray-600 w-full dark:border-gray-300" />

      {/* Interests */}
      <div className="text-sm text-center text-gray-300 dark:text-gray-600 space-y-1">
        <p className="font-semibold text-white dark:text-black">Interests</p>
        <p>🎨 UI/UX Design</p>
        <p>📱 App Interfaces</p>
        <p>🧠 Learning Tech</p>
        <p>🎮 Gaming & Music</p>
      </div>

      {/* Footer */}
      <div className="flex-grow" />
      <p className="text-[11px] text-gray-500 mt-4 dark:text-gray-600">
        &copy; {new Date().getFullYear()} Jafir Nawab
      </p>
    </div>
  );
}
