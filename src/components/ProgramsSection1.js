"use client";
import { useRouter } from "next/navigation";

export default function ProgramsSection1() {
  const router = useRouter();
  const imageUrl =
    "https://images.unsplash.com/photo-1709290749293-c6152a187b14";

  const programs = [
    {
      title: "Renewable Tech Bootcamp",
      description:
        "Dolor donec eget morbi nisi. Eu ut et enim ornare nisi vel auctor odio a.",
      goal: "$12000",
      raised: "$8000",
      slug: "renewable-tech-bootcamp",
    },
    {
      title: "Women in Data Science",
      description:
        "Dolor donec eget morbi nisi. Eu ut et enim ornare nisi vel auctor odio a.",
      goal: "$15000",
      raised: "$10000",
      slug: "women-in-data-science",
    },
    {
      title: "Scholarships Program: Rural Areas",
      description:
        "Dolor donec eget morbi nisi. Eu ut et enim ornare nisi vel auctor odio a.",
      goal: "$200000",
      raised: "$80000",
      slug: "scholarships-program-rural-areas",
    },
    {
      title: "InnovateHER",
      description:
        "Dolor donec eget morbi nisi. Eu ut et enim ornare nisi vel auctor odio a.",
      goal: "$60000",
      raised: "$25000",
      slug: "innovateher",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      {/* Centered Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-10">
        Latest Programs
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transition hover:shadow-xl flex flex-col h-full"
          >
            <img
              src={imageUrl}
              alt={program.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900">
                {program.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {program.description}
              </p>
              {/* Progress Bar */}
              <div className="relative mt-4 flex-grow">
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="h-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                    style={{
                      width: `${
                        (parseInt(program.raised.replace("$", "")) /
                          parseInt(program.goal.replace("$", ""))) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
              {/* Buttons (Always at Bottom) */}
              <div className="mt-10 flex flex-col lg:flex-row gap-2 justify-between">
                <button
                  onClick={() => router.push(`/programs/${program.slug}`)}
                  className="bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
                >
                  Learn More
                </button>
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
                  onClick={() => router.push("/donate")}
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
