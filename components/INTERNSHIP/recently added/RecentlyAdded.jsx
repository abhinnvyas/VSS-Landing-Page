import Image from "next/image";
import Link from "next/link";
import IgnitionLogoImage from "@/public/images/ignition.png";

const jobs = [
  {
    id: 1,
    company: "Ignition nest labs",
    title: "UI/UX Designer - Intern (on-site)",
    location: "India / On-site",
    tags: ["Internship", "UI/UX"],
  },
  {
    id: 2,
    company: "Ignition nest labs",
    title: "UI/UX Designer - Intern (on-site)",
    location: "India / On-site",
    tags: ["Internship", "UI/UX"],
  },
  {
    id: 3,
    company: "Ignition nest labs",
    title: "UI/UX Designer - Intern (on-site)",
    location: "India / On-site",
    tags: ["Internship", "UI/UX"],
  },
  {
    id: 4,
    company: "Ignition nest labs",
    title: "UI/UX Designer - Intern (on-site)",
    location: "India / On-site",
    tags: ["Internship", "UI/UX"],
  },
];

const RecentlyAdded = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Recently added</h2>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 ">
                <Image
                  src={IgnitionLogoImage}
                  width={100}
                  height={100}
                  objectFit="contain"
                  alt="Ignition Logo"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="font-bold">{job.company}</h3>
                <p className="text-sm text-gray-600">{job.title}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-gray-500">{job.location}</span>
                  {job.tags.map((tag, index) => (
                    <span key={index} className="text-xs text-gray-500">
                      • {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href={`/apply/${job.id}`}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-[700] transition duration-300"
            >
              Apply now
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          href="/jobs"
          className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-[800] text-sm transition duration-300"
        >
          View more
        </Link>
      </div>
    </div>
  );
};

export default RecentlyAdded;
