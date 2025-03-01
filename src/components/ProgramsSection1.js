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
      donations: "14",
    },
    {
      title: "Women in Data Science",
      description:
        "Dolor donec eget morbi nisi. Eu ut et enim ornare nisi vel auctor odio a.",
      goal: "$15000",
      raised: "$12000",
      donations: "25",
    },
    {
      title: "Scholarships Program: Rural Areas",
      description:
        "Dolor donec eget morbi nisi. Eu ut et enim ornare nisi vel auctor odio a.",
      goal: "$200000",
      raised: "$80000",
      donations: "6",
    },
    {
      title: "InnovateHER",
      description:
        "Dolor donec eget morbi nisi. Eu ut et enim ornare nisi vel auctor odio a.",
      goal: "$60000",
      raised: "$32000",
      donations: "12",
    },
    {
      title: "Women in Data Science",
      description:
        "Dolor donec eget morbi nisi. Eu ut et enim ornare nisi vel auctor odio a.",
      goal: "$15000",
      raised: "$12000",
      donations: "25",
    },
    {
      title: "Scholarships Program: Rural Areas",
      description:
        "Dolor donec eget morbi nisi. Eu ut et enim ornare nisi vel auctor odio a.",
      goal: "$200000",
      raised: "$80000",
      donations: "6",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 md:px-0 lg:px-0">
      {/* Centered Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-10">
        Latest Programs
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transition hover:shadow-xl"
          >
            <img
              src={imageUrl}
              alt={program.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {program.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {program.description}
              </p>

              {/* Goal, Raised, Donations in One Row */}
              <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg mt-4 text-sm font-medium">
                <p className="text-gray-700">
                  <span className="font-semibold">Goal:</span>{" "}
                  <span className="text-black font-bold">{program.goal}</span>
                </p>
                <p className="text-green-600">
                  <span className="font-semibold">Raised:</span>{" "}
                  <span className="font-bold">{program.raised}</span>
                </p>
                <p className="text-blue-600">
                  <span className="font-semibold">Donations:</span>{" "}
                  <span className="font-bold">{program.donations}</span>
                </p>
              </div>

              {/* Progress Bar */}
              <div className="relative mt-4">
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

              {/* Buttons Row */}
              <div className="flex justify-between items-center mt-6">
                <button className="bg-black text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
                  View Details
                </button>
                <button
                  className="bg-orange-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition duration-300"
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
