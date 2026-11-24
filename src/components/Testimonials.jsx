import { Quote } from "lucide-react";
import { useState } from "react";

function Testimonials() {
  const users = [
    {
      name: "Alex Morgan",
      role: "CEO At Deserted Co",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
      text: "NX-Freelancer has exceeded my expectations in every way. Not only did I find highly skilled freelancers for my project, but the customer support team was also incredibly helpful throughout the entire process.",
    },
    {
      name: "Sarah Williams",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500",
      text: "Working with NX-Freelancer made our project so much easier. The talent and professionalism of the freelancers were outstanding.",
    },
    {
      name: "Michael Johnson",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
      text: "I found the perfect team for my business. The experience was smooth, professional, and exceeded my expectations.",
    },
    {
      name: "Emma Brown",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500",
      text: "The quality of work and communication were excellent. NX-Freelancer helped bring our ideas to life.",
    },
    {
      name: "David Licona",
      role: "CEO At Deserted Co",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500",
      text: "NX-Freelancer has exceeded my expectations in every way. Not only did I find highly skilled freelancers for my project, but the customer support team was also incredibly helpful throughout the entire process.",
    },
  ];

  const [activeUser, setActiveUser] = useState(4);

  const currentUser = users[activeUser];

  return (
    <section className="bg-[#111111] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xl font-semibold mb-5">
            Our Testimonials
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Our Top{" "}
            <span className="bg-[#ff9900] text-black px-5 py-3 inline-block">
              Users
            </span>
          </h2>
        </div>

        {/* User Images */}
        <div className="flex justify-center items-center gap-6 md:gap-12 flex-wrap mb-12">

          {users.map((user, index) => (
            <button
              key={index}
              onClick={() => setActiveUser(index)}
              className={`w-36 h-36 md:w-44 md:h-44 overflow-hidden transition duration-300 ${
                activeUser === index
                  ? "border-2 border-[#ff9900] p-2"
                  : "border border-transparent"
              } ${index % 2 === 1 ? "md:translate-y-14" : ""}`}
            >
              <img
                src={user.image}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}

        </div>

        {/* Testimonial Box */}
        <div className="relative border border-white/80 px-8 md:px-20 py-16 mt-20">

          {/* Top Quote */}
          <Quote
            size={65}
            fill="white"
            className="absolute -top-5 left-6"
          />

          {/* Text */}
          <p className="text-lg md:text-2xl leading-relaxed mt-5 mb-12">
            {currentUser.text}
          </p>

          {/* User Name */}
          <h3 className="text-xl md:text-2xl font-semibold">
            {currentUser.name}, {currentUser.role}
          </h3>

          {/* Bottom Quote */}
          <Quote
            size={65}
            fill="white"
            className="absolute -bottom-5 right-6 rotate-180"
          />

        </div>

      </div>
    </section>
  );
}

export default Testimonials;