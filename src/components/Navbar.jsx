import { BsCart3 } from "react-icons/bs";

const navLinks = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 px-8 py-4 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-2xl font-bold bg-linear-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
          DigiTools
        </span>

        <ul className="flex items-center gap-8">
          {navLinks.map((link) => {
            return (
              <li>
                <a
                  href="#"
                  className="text-gray-600  font-medium hover:text-violet-600  "
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-5">
          <BsCart3 className="text-gray-600 text-xl cursor-pointer hover:text-violet-600 " />
          <a
            href="#"
            className=" font-medium text-gray-600 hover:text-violet-600 "
          >
            Login
          </a>
          <button className=" font-semibold text-white px-5 py-2 rounded-full bg-linear-to-b from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition-opacity duration-200">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
