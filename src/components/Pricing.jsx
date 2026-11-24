function Pricing() {
  const plans = [
    {
      name: "STANDARD",
      price: "12",
      subtitle: "Entry-Level Services",
      features: [
        "Limited Revisions",
        "Delivery Within 14 Days",
        "Email Support",
        "Basic Reporting",
      ],
    },
    {
      name: "PREMIUM",
      price: "15",
      subtitle: "Comprehensive Services",
      features: [
        "Extended Revisions",
        "Delivery Within 7 Days",
        "Priority Support",
        "Detailed Reporting",
      ],
    },
    {
      name: "ULTIMATE",
      price: "21",
      subtitle: "Premium Services",
      features: [
        "Unlimited Revisions",
        "Delivery Within 3 Days",
        "24/7 Support",
        "Advanced Reporting",
      ],
    },
  ];

  return (
    <section className="bg-white text-black py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-xl font-semibold mb-5">
            Our Pricing
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Our Strategic{" "}
            <span className="bg-[#111111] text-[#ff9900] px-4 py-3 inline-block">
              Costing
            </span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-[#111111] text-white py-10 px-8 md:px-10 ${
                index === 1 ? "lg:scale-105" : ""
              }`}
            >

              {/* Plan Ribbon */}
              <div className="relative bg-[#ff9900] text-black py-3 px-6 mb-6 -ml-8 md:-ml-10 w-[85%]">
                <h3 className="text-2xl font-bold tracking-widest text-center">
                  {plan.name}
                </h3>

                <div className="absolute top-0 -right-7 border-y-29 border-y-transparent border-l-28 border-l-[#ff9900]"></div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-10">
                <span className="text-5xl font-medium">
                  ${plan.price}
                </span>

                <span className="text-lg font-semibold">
                  / Hour
                </span>
              </div>

              {/* Divider */}
              <div className="border-t-2 border-white mb-10"></div>

              {/* Features */}
              <div className="space-y-6 mb-12">
                <p className="text-xl font-semibold">
                  {plan.subtitle}
                </p>

                {plan.features.map((feature, featureIndex) => (
                  <p
                    key={featureIndex}
                    className="text-lg font-semibold"
                  >
                    {feature}
                  </p>
                ))}
              </div>

              {/* Button */}
              <a
                href="#contact"
                className="inline-block bg-[#ff9900] text-black px-8 py-4 text-lg font-semibold border border-black shadow-[5px_5px_0px_#ffffff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition duration-300"
              >
                Contact Now
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Pricing;