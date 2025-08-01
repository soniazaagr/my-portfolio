import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing UI/UX design and frontend development skills.",
    image: "/images/port.avif",
    tech: ["React", "TypeScript", "Tailwind", "ShadCN UI"],
    github: "https://github.com/jafirnawab/portfolio",
    live: "https://jafirnawab.vercel.app",
  },
  {
    title: "Startup Landing Page",
    description: "A modern landing page built for a tech startup with animation and mobile-first UI.",
    image: "/images/lan1.webp",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    github: "https://github.com/jafirnawab/startup-landing",
    live: "#",
  },
  {
    title: "Blog from Markdown",
    description: "A blog system powered by Markdown and dynamic routing. Smooth reading UX.",
    image: "/images/mark.png",
    tech: ["React", "Vite", "Markdown", "TypeScript"],
    github: "https://github.com/jafirnawab/blog-md",
    live: "#",
  },
  {
    title: "Crypto Dashboard (Demo)",
    description: "A sleek cryptocurrency dashboard with real-time pricing and charts.",
    image: "/images/dash.webp",
    tech: ["React", "Tailwind", "Chart.js"],
    github: "#",
    live: "#",
  },
  {
    title: "E-commerce UI (Demo)",
    description: "Modern e-commerce UI with product cards, filters, and dark/light toggle.",
    image: "/images/ecom1.jpeg",
    tech: ["Vite", "TypeScript", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
  },
];

export default function Work() {
  return (
    <div className="bg-[#1f1f29] text-white p-6 rounded-xl w-full">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-pink-600 w-fit">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#2d2d3a] rounded-xl overflow-hidden shadow-lg hover:shadow-pink-600 transition-shadow duration-300"
          >
            <div className="group relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-pink-500 mb-1">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-pink-600/20 text-pink-300 text-xs px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-sm flex items-center gap-1 text-white hover:text-pink-400"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-sm flex items-center gap-1 text-white hover:text-pink-400"
                  >
                    <FaExternalLinkAlt /> Live Preview
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
