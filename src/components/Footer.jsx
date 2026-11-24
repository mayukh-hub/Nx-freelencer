const Footer = () => {
  const exploreLinks = ["Home", "Portfolios", "Blog", "Contact"];
  const pageLinks = ["About Us", "Style-Guide", "Change-Log", "Licensing"];

  return (
    <footer className="bg-[#111111] text-white">
      {/* Main Footer */}
      <div className="grid grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1.5fr] lg:gap-12 lg:px-12 lg:py-16">

        {/* Brand Section */}
        <div>
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-normal whitespace-nowrap">
            <span className="text-3xl">👨‍💻</span>
            NX FREELANCER
          </h2>

          <p className="mb-12 max-w-md text-lg leading-10 text-gray-300">
            NX Freelancer is dedicated to providing a platform where
            freelancers and businesses can connect, collaborate, and thrive.
          </p>

          <div className="flex flex-wrap gap-3">
            {["f", "𝕏", "ℙ", "in", "▶"].map((icon, index) => (
              <a
                key={index}
                href="#"
                className="flex h-14 w-14 shrink-0 items-center justify-center
                bg-[#ff9800] text-xl font-bold text-black
                transition hover:bg-white"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="mb-10 text-2xl font-bold font-serif">
            Explore
          </h3>

          <ul className="space-y-6 font-serif text-xl font-semibold">
            {exploreLinks.map((link) => (
              <li key={link}>
                <a href="#" className="transition hover:text-[#ff9800]">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="mb-10 text-2xl font-bold font-serif">
            Pages
          </h3>

          <ul className="space-y-6 font-serif text-xl font-semibold">
            {pageLinks.map((link) => (
              <li key={link}>
                <a href="#" className="transition hover:text-[#ff9800]">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-10 text-2xl font-bold font-serif">
            NX Freelancer Newsletter
          </h3>

          <p className="mb-8 text-lg leading-10 text-gray-300">
            Subscribe to our newsletter for weekly updates,
            market insights, and special offers.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full items-center border border-gray-400 p-1"
          >
            <input
              type="email"
              placeholder="Your Email Here"
              className="min-w-0 flex-1 bg-transparent px-4 py-3
              font-serif text-lg font-semibold text-white
              outline-none placeholder:text-white"
            />

            <button
              type="submit"
              className="shrink-0 bg-[#ff9800] px-5 py-4
              font-serif text-xl font-bold text-white
              transition hover:bg-white hover:text-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#ff9800] px-6 py-8 text-center">
        <p className="font-serif text-lg leading-8 text-gray-300">
          © NX-Freelancer All rights reserved. | Designed by Nexoy |
          Powered by Webflow.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
