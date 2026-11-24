import {
  Layers3,
  Monitor,
  Database,
  Megaphone,
  ArrowRight,
} from "lucide-react";

function Services() {
  const services = [
    {
      title: "UI/UX Design",
      icon: Layers3,
    },
  {
  title: "Frontend",
  icon: Monitor,
},
    {
      title: "Backend",
      icon: Database,
    },
    {
      title: "Marketing",
      icon: Megaphone,
    },
  ];

  return (
    <section className="bg-[#111111] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xl font-semibold mb-6">
            Our Services
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Comprehensive Creative{" "}
            <span className="bg-[#ff9900] text-black px-3 py-2 inline-block">
              Offerings
            </span>
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-700">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group border border-gray-700 min-h-100 flex flex-col items-center justify-between py-12 px-6 hover:bg-[#ff9900] hover:text-black transition duration-300"
              >
                {/* Icon + Title */}
                <div className="flex flex-col items-center gap-8">
                  <Icon
                    size={68}
                    strokeWidth={1.5}
                    className="transition duration-300"
                  />

                  <h3 className="text-2xl font-semibold text-center">
                    {service.title}
                  </h3>
                </div>

                {/* Arrow */}
                <a
                  href="#contact"
                  className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center hover:scale-125 transition"
                >
                  <ArrowRight size={12} />
                </a>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Services;