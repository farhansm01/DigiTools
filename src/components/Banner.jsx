import { LuPlay } from "react-icons/lu";
import bannerImg from "../assets/banner.png";

export default function Hero() {
  return (
    <>
      <section className="max-w-6xl mx-auto bg-white py-12 md:py-22 flex flex-col md:flex-row items-center justify-between gap-10 px-8">
        <div className="w-full md:max-w-lg flex flex-col gap-5">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-purple-100 text-purple-700 text-xs font-semibold px-4 py-2 rounded-full w-fit border border-purple-200">
            <span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span>
            New: AI-Powered Tools Available
          </div>

          {/* Heading */}

          <h1 className="text-4xl lg:text-6xl font-bold text-[#101727] leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-gray-500  leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-1">
            <button className="w-full sm:w-auto bg-linear-to-b from-[#4F39F6] to-[#9514FA] text-white text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-200">
              Explore Products
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-[#9514FA] text-[#9514FA] text-sm font-semibold px-6 py-3 rounded-full hover:bg-linear-to-b hover:from-[#4F39F6] hover:to-[#9514FA] hover:text-white transition-colors duration-200">
              <LuPlay className="w-5 h-5 rounded-full flex items-center justify-center text-xs" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Side  */}
        <div className="w-full lg:w-90 h-64 md:h-105 rounded-2xl overflow-hidden">
          <img src={bannerImg} alt="" className="w-full h-full object-cover" />
        </div>
      </section>
    </>
  );
}
