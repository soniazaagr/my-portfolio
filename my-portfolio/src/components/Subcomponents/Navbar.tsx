// src/components/Subcomponents/Navbar.tsx
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "About", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Works", path: "/works" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex justify-center mt-4">
      <div className="bg-[#25262A] p-2 rounded-xl flex space-x-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => navigate(item.path)}
            className={cn(
              "px-4 py-2 text-sm rounded-md text-white transition",
              location.pathname === item.path
                ? "bg-pink-600"
                : "hover:bg-zinc-700"
            )}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
