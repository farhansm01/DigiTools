import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f1623] text-white pt-16 pb-8 px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 w-full md:max-w-65">
            <h2 className="text-3xl font-semibold text-white">DigiTools</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Links columns — 2x2 grid on mobile, row on desktop */}
          <div className="grid grid-cols-2 md:contents gap-8">
            {/* Product Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-white">Product</h3>
              <ul className="flex flex-col gap-3">
                {["Features", "Pricing", "Templates", "Integrations"].map(
                  function (link) {
                    return (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                        >
                          {link}
                        </a>
                      </li>
                    );
                  },
                )}
              </ul>
            </div>

            {/* Company Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul className="flex flex-col gap-3">
                {["About", "Blog", "Careers", "Press"].map(function (link) {
                  return (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-white">Resources</h3>
              <ul className="flex flex-col gap-3">
                {["Documentation", "Help Center", "Community", "Contact"].map(
                  function (link) {
                    return (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                        >
                          {link}
                        </a>
                      </li>
                    );
                  },
                )}
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-white">Social Links</h3>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#101727] text-white hover:text-black flex items-center justify-center hover:bg-white transition-all duration-200"
                >
                  <FaYoutube className="text-sm" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#101727] text-white hover:text-black flex items-center justify-center hover:bg-white transition-all duration-200"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#101727] text-white hover:text-black flex items-center justify-center hover:bg-white transition-all duration-200"
                >
                  <FaXTwitter className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#1e2636]"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map(
              function (link) {
                return (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-400 text-xs hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                );
              },
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
