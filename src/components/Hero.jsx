
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#21170f] px-5 py-16 text-white md:px-10 md:py-24 lg:px-14 lg:py-28">

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-10">

        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start">

          <p className="mb-5 text-lg font-bold text-white md:text-xl">
            Freelancer Portfolio
          </p>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.2] tracking-tight sm:text-5xl md:text-6xl lg:text-[64px]">
            Unlock Your
            <br />
            Freelance Potential
            with NX{" "}
            <span className="text-orange-400">
              Freelancer
            </span>
          </h1>

          {/* CONTACT BUTTON */}
          <a
            href="#contact"
            className="mt-12 inline-flex items-center gap-3 bg-orange-400 px-9 py-5 text-lg font-semibold text-[#21170f] shadow-[6px_6px_0px_#a9e6f5] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Contact Now
            <ArrowUpRight size={20} />
          </a>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto w-full max-w-150">

          {/* IMAGE CONTAINER */}
          <div className="relative aspect-[1.08/1] border-2 border-white bg-orange-400">

            <img
              src="https://cdn.prod.website-files.com/6526b4feb6efa90844f97799/6640d5ee0acabc7b39d9bf5c_7829.webp"
              alt="Freelancer portrait"
              className="h-full w-full object-cover object-center"
            />

          </div>

          {/* TOP NAME LABEL */}
          <div className="absolute -left-5 top-4 z-10 border-2 border-white bg-[#21170f] px-10 py-3 shadow-[-5px_-5px_0px_#f4a340] sm:-left-7 sm:px-12">
            <p className="text-base font-bold text-white">
              Roy Arison
            </p>
          </div>

          {/* BOTTOM ROLE LABEL */}
          <div className="absolute -bottom-5 -right-3 z-10 border-2 border-white bg-[#21170f] px-8 py-3 shadow-[5px_5px_0px_#f4a340] sm:-right-5 sm:px-10">
            <p className="text-base font-bold text-white">
              Web Developer
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;