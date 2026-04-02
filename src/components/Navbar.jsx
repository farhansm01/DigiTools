import { useState } from "react";
import { BsCart3, BsList, BsX } from "react-icons/bs";

const navLinks = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="text-2xl font-bold bg-linear-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
          DigiTools
        </span>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-gray-600 font-medium hover:text-violet-600"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-5">
          <BsCart3 className="text-gray-600 text-xl cursor-pointer hover:text-violet-600" />
          <a
            href="#"
            className="font-medium text-gray-600 hover:text-violet-600"
          >
            Login
          </a>
          <button className="font-semibold text-white px-5 py-2 rounded-full bg-linear-to-b from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition-opacity duration-200">
            Get Started
          </button>
        </div>

        {/*  menu icon */}
        <button
          className="lg:hidden text-2xl text-gray-600"
          onClick={function () {
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? <BsX /> : <BsList />}
        </button>
      </div>

      {/*  dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col gap-4 px-4 pt-4 pb-6 border-t border-gray-100 mt-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-600 font-medium hover:text-violet-600"
            >
              {link}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="#"
              className="font-medium text-gray-600 hover:text-violet-600"
            >
              Login
            </a>
            <button className="font-semibold text-white px-5 py-2 rounded-full bg-linear-to-b from-[#4F39F6] to-[#9514FA] hover:opacity-90">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
