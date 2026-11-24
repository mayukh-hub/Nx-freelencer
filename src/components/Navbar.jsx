import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [utilityOpen, setUtilityOpen] = useState(false);

  const navLinks = ["Home", "About", "Portfolio", "Blog"];

  return (
    <nav className="sticky top-0 z-50 bg-[#21170f] px-5 py-5 md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tight text-white">
          <span className="text-orange-400">◈</span> NX FREELANCER
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">

          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-base font-semibold transition-colors hover:text-orange-400 ${
                link === "Home" ? "text-orange-400" : "text-white"
              }`}
            >
              {link}
            </a>
          ))}

          {/* Utility Dropdown */}
          <div className="relative">
            <button
              onClick={() => setUtilityOpen(!utilityOpen)}
              className="flex items-center gap-1 text-base font-semibold text-white transition-colors hover:text-orange-400"
            >
              Utility Pages
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  utilityOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {utilityOpen && (
              <div className="absolute left-0 top-full mt-4 w-40 bg-sky-100 py-2 text-center shadow-lg">
                {["Style-Guide", "Change-Log", "License"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-orange-400 hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="bg-orange-400 px-8 py-4 text-base font-semibold text-[#21170f] shadow-[5px_5px_0px_#a9e6f5] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Contact Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col gap-5 bg-[#21170f] px-6 py-7 shadow-xl lg:hidden">

          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-white transition-colors hover:text-orange-400"
            >
              {link}
            </a>
          ))}

          {/* Mobile Utility Dropdown */}
          <div>
            <button
              onClick={() => setUtilityOpen(!utilityOpen)}
              className="flex items-center gap-2 font-semibold text-orange-400"
            >
              Utility Pages
              <ChevronDown
                size={16}
                className={utilityOpen ? "rotate-180" : ""}
              />
            </button>

            {utilityOpen && (
              <div className="mt-3 flex flex-col bg-sky-100">
                {["Style-Guide", "Change-Log", "License"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 text-gray-700 hover:bg-orange-400"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="w-fit bg-orange-400 px-7 py-3 font-semibold text-[#21170f] shadow-[4px_4px_0px_#a9e6f5]"
          >
            Contact Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;