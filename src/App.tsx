// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Subcomponents/Navbar";
import Footer from "./components/Footer";

import About from "./components/About";
import Work from "./Pages/work";
import Blog from "./components/Blog";
import Contact from "./Pages/Contact";

function Resume() {
  return (
    <div id="resume" className="text-white scroll-mt-16 bg-[#1f1f29] p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-4 border-b border-pink-600 w-fit">
        <Typewriter
          words={["My Resume"]}
          loop={1}
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>

      <p className="mb-6">
        You can view or download my resume{" "}
        <a
          href="/images/Jafir_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 underline"
        >
          here
        </a>.
      </p>

      {/* Education */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-pink-400 mb-2">🎓 Education</h3>
        <p className="text-gray-300">
          <span className="font-medium">BS in Computer Science</span> – Punjab University, Pakistan <br />
          <span className="text-sm text-gray-400">2020 – 2024</span>
        </p>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-pink-400 mb-2">💼 Experience</h3>
        <p className="text-gray-300">
          <span className="font-medium">Frontend Developer Intern</span> – XYZ Startup <br />
          <span className="text-sm text-gray-400">June 2023 – Aug 2023</span>
        </p>
        <ul className="list-disc list-inside text-sm text-gray-400 ml-2 mt-1">
          <li>Worked on React.js, Tailwind, and Framer Motion for UI enhancements</li>
          <li>Improved performance and accessibility of the company website</li>
          <li>Collaborated with designers to turn Figma into responsive components</li>
        </ul>
      </div>

      {/* Technical Skills */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-pink-400 mb-2">🛠️ Technical Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 text-sm text-gray-300 gap-y-1">
          <span>React.js</span>
          <span>TypeScript</span>
          <span>Tailwind CSS</span>
          <span>Framer Motion</span>
          <span>Git & GitHub</span>
          <span>Figma</span>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-pink-400 mb-2">📜 Certifications</h3>
        <ul className="list-disc list-inside text-sm text-gray-300 ml-2">
          <li>Responsive Web Design – freeCodeCamp</li>
          <li>React & Redux – Coursera</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-6 text-sm text-gray-400">
        Feel free to <a href="#contact" className="text-pink-500 underline">contact me</a> for freelance or collaborative opportunities.
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section id="about">
        <About />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

function AppLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1c0430] to-[#0f0f1d] text-white p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <Sidebar />
        <div className="md:col-span-3 flex flex-col gap-6">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/works" element={<Work />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
