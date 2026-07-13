import { FaHeart, FaMoon, FaUserCircle } from "react-icons/fa";
import Navbar from "./Navbar";
import Container from "../ui/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-20">
          <h1 className="text-3xl font-bold text-blue-600 cursor-pointer">
            SurxonJoy
          </h1>

          <Navbar />

          <div className="flex items-center gap-5">
            <FaMoon className="text-xl cursor-pointer hover:text-blue-600" />
            <FaHeart className="text-xl cursor-pointer hover:text-red-500" />
            <FaUserCircle className="text-2xl cursor-pointer hover:text-blue-600" />
          </div>
        </div>
      </Container>
    </header>
  );
}