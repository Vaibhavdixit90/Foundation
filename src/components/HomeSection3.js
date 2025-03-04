"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomeSection3 = () => {
  const router = useRouter();
  const projects = [
    {
      title: "Renewable Tech Bootcamp",
      description: "Learn about renewable energy technologies and innovations.",
      image: "https://images.unsplash.com/photo-1709290749293-c6152a187b14",
      slug: "renewable-tech-bootcamp",
    },
    {
      title: "Women in Data Science",
      description: "Empowering women to lead in data science fields worldwide.",
      image: "https://images.unsplash.com/photo-1709290749293-c6152a187b14",
      slug: "women-in-data-science",
    },
    {
      title: "Scholarship Program: Rural Areas",
      description:
        "Providing scholarships to students in underprivileged areas.",
      image: "https://images.unsplash.com/photo-1709290749293-c6152a187b14",
      slug: "scholarship-program-rural-areas",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-0 py-16">
      <h3 className="text-gray-900 text-sm font-semibold tracking-wide uppercase">
        Projects We Have Done
      </h3>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
        We are building a world where women lead, thrive, and are equally
        represented.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={350}
              className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-semibold">
                {project.title}
              </h3>
              <p className="text-white text-sm mt-2">{project.description}</p>
              <button
                className="mt-4 px-5 py-2 bg-white text-black font-semibold rounded-md self-start"
                onClick={() => router.push(`/programs/${project.slug}`)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection3;
