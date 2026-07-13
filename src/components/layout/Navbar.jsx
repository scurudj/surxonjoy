import { NavLink } from "react-router-dom";

const links = [
  { name: "Bosh sahifa", path: "/" },
  { name: "Uylar", path: "/properties" },
  { name: "Tumanlar", path: "/districts" },
  { name: "Biz haqimizda", path: "/about" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center gap-8">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `font-medium transition ${
              isActive
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}