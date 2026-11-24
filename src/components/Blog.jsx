function Blog() {
  const articles = [
    {
      category: "PORTFOLIO",
      title: "20 Tips & Tricks For Web Design",
      date: "May 13, 2024",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    },
    {
      category: "SEO MARKETING",
      title: "7 of the Best Examples of Beautiful Blog Design",
      date: "May 13, 2024",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
    },
    {
      category: "LATEST TECH",
      title: "The Future Of SEO And Digital Marketing",
      date: "May 13, 2024",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
    },
  ];

  return (
    <section className="bg-white text-black py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xl font-semibold mb-5">
            Our Articles
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Our Insightful{" "}
            <span className="bg-[#111111] text-[#ff9900] px-4 py-3 inline-block">
              Articles
            </span>
          </h2>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {articles.map((article, index) => (
            <article key={index} className="text-center">

              {/* Image */}
              <div className="relative mb-10">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-75 md:h-75 object-cover"
                />

                {/* Category */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white px-7 py-4 whitespace-nowrap">
                  <span className="text-[#ff9900] text-lg tracking-wide">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl leading-snug px-2 mb-8">
                {article.title}
              </h3>

              {/* Orange Line */}
              <div className="w-1/2 mx-auto border-t border-[#ff9900] mb-10"></div>

              {/* Date */}
              <p className="text-gray-500 text-lg">
                {article.date}
              </p>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Blog;