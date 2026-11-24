import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#f5f4f0] px-5 py-16 md:px-10 md:py-24 lg:px-14"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* LEFT IMAGE */}
        <div className="relative mx-auto w-full max-w-137.5">

          <img
            src="https://cdn.prod.website-files.com/6526b4feb6efa90844f97799/6640d5ee0acabc7b39d9bf5c_7829.webp"
            alt="Roy Arison"
            className="h-100 w-full object-cover object-top sm:h-125 lg:h-137.5"
          />

          {/* NAME OVERLAY */}
          <h2
            className="absolute -bottom-3 left-1/2 z-10 w-full -translate-x-1/2 text-center text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
            style={{ WebkitTextStroke: "1px white" }}
          >
            Roy Arison
          </h2>

        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col items-start">

          <p className="mb-5 text-lg font-semibold text-[#21170f]">
            About Me
          </p>

          <h2 className="mb-8 text-3xl font-bold leading-tight text-[#21170f] sm:text-4xl md:text-5xl">
            Your trusted partner in unforgettable moments
          </h2>

          <p className="mb-8 text-base leading-8 text-gray-500">
            At NX Freelancer, we believe in the power of freelancing.
            Our platform was created to bridge the gap between talented
            individuals seeking flexibility in their work and businesses
            looking for specialized skills.
          </p>

          {/* CONTACT BUTTON */}
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-orange-400 px-9 py-4 font-semibold text-[#21170f] shadow-[5px_5px_0px_#21170f] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Contact Now
            <ArrowUpRight size={19} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default About;