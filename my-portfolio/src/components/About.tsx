// src/components/About.tsx
import { useEffect, useState } from "react";
import { FaFigma, FaCode, FaMobileAlt, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", tools: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "ShadCN UI"] },
  { category: "Design", tools: ["Figma", "Framer", "Adobe XD"] },
  { category: "Dev Tools", tools: ["Git & GitHub", "VS Code", "NPM", "Postman"] },
  { category: "Animation", tools: ["Framer Motion", "Lottie"] },
];

const services = [
  {
    icon: <FaFigma className="text-pink-500" />, title: "UI/UX Design",
    description: "Crafting clean, user-centered interfaces for web and mobile apps."
  },
  {
    icon: <FaLaptopCode className="text-yellow-400" />, title: "Frontend Development",
    description: "Building fast, accessible websites with React, TypeScript, and Tailwind."
  },
  {
    icon: <FaMobileAlt className="text-green-400" />, title: "Mobile-first Design",
    description: "Creating seamless experiences optimized for mobile and tablets."
  },
  {
    icon: <FaCode className="text-blue-400" />, title: "Reusable Components",
    description: "Using ShadCN, TailwindCSS & Framer Motion for modular and scalable UI."
  },
];

export default function About() {
  const [displayText, setDisplayText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);

  const fullText = `I'm Jafir Nawab, a passionate UI/UX Designer and Frontend Developer based in Punjab, Pakistan. I focus on creating seamless, user-friendly, and visually appealing digital experiences. I enjoy transforming complex ideas into clean and functional interfaces. I’ve worked with various startups and personal projects, helping shape their digital identity through design and frontend engineering. Outside of work, I love exploring new design tools, learning modern frameworks, and contributing to open-source UI kits.`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + fullText.charAt(i));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        setTypingComplete(true);
      }
    }, 2); // Faster typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#1f1f29] text-white p-6 rounded-xl w-full">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold mb-2 border-b-2 border-pink-600 w-fit"
      >
        About Me
      </motion.h2>

      <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">{displayText}</p>

      {/* What I Do */}
      {typingComplete && (
        <>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-10 text-xl font-semibold mb-6 border-b-2 border-pink-600 w-fit"
          >
            What I Do
          </motion.h3>

          <div className="relative border-l-2 border-pink-600 ml-4 space-y-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-10"
              >
                <div className="absolute -left-5 top-1">{service.icon}</div>
                <h4 className="text-lg font-semibold text-white">{service.title}</h4>
                <p className="text-sm text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Skill Set */}
          <h3 className="mt-10 text-xl font-semibold mb-3 border-b-2 border-pink-600 w-fit">Skill Set</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-[#2d2d3a] p-4 rounded-xl group cursor-pointer"
              >
                <h4 className="text-pink-500 text-lg font-semibold mb-2">{skill.category}</h4>
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pl-3 list-disc text-sm text-gray-300 space-y-1"
                >
                  {skill.tools.map((tool, i) => (
                    <li key={i}>{tool}</li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
