import { ArrowRight } from "lucide-react";

function Portfolio() {
  const projects = [
    {
      title: "Pet shop template",
      image:
        "https://s3-figma-hubfile-images-production-cdn-cgi.figma.com/cdn-cgi/image/format=auto,quality=85/hub/file/carousel/img/ce7aab74ba2c0c847a98385e82d0aa90569fa448",
    },
    {
      title: "Veterinary Website",
      image:
        "https://cdn.prod.website-files.com/64da807a9aa000087e97b92d/660ece3da03b2197eb8f9fa4_64344a7f5ac50852426a09a5_thumbnail1.jpeg",
    },
    {
      title: "Burger House",
      image:
        "https://template.canva.com/EAGwgDh8Tt4/1/0/600w-Cbd5aviY0e0.jpg",
    },
    {
      title: "Coffee Shop Template",
      image:
        "https://themewagon.com/wp-content/uploads/2020/08/GrandCoffee-1200x736.png",
    },
    {
      title: "Laptop illustration",
      image: "https://i.pinimg.com/736x/e7/9e/e9/e79ee952859208e31fb7e4e77d24851a.jpg",

    },
    {
      title: "Sneaker Store",
      image:
        "https://s3-figma-hubfile-images-production-cdn-cgi.figma.com/cdn-cgi/image/format=auto,quality=85/hub/file/carousel/img/7a1f466a5a5b673903699c0c2f10471cb6466c31/6780d2a77d7b78ae660f69766f552f3f0698d9ed",
    },
    {
      title: "Creative Studio",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200",
    },
  ];

  return (
    <section className="bg-white text-black py-20 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <p className="text-xl font-semibold mb-6">
          Our Portfolio
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Discover Our{" "}
          <span className="bg-[#111111] text-[#ff9900] px-4 py-2 inline-block">
            Website
          </span>
        </h2>
      </div>

      {/* Project Cards */}
      <div className="flex gap-3 overflow-x-auto px-5 pb-4 snap-x snap-mandatory scrollbar-hide">

        {projects.map((project, index) => (
          <div
            key={index}
            className="relative shrink-0 w-75 md:w-95 h-107.5 border border-gray-500 snap-center group overflow-hidden"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition duration-300 flex items-center justify-center">

              <div className="border-2 border-[#ff9900] inset-4 absolute opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <h3 className="text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition duration-300 text-center px-4">
                {project.title}
              </h3>

            </div>
          </div>
        ))}

      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <a
          href="#projects"
          className="bg-[#ff9900] text-black px-10 py-5 text-lg font-semibold border border-black shadow-[6px_6px_0px_#111] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition duration-300 flex items-center gap-3"
        >
          View Our Projects
          <ArrowRight size={20} />
        </a>
      </div>

    </section>
  );
}

export default Portfolio;