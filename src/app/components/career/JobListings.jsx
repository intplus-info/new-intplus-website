import Link from "next/link";
import Image from "next/image";
import jobs from "../../career/DummyJobs";

const JobListings = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-10 px-8 lg:px-20 py-12 bg-[#F9F9FF]">
      {jobs.length === 0 ? (
        <p className="text-3xl font-bold text-[#16205F] mb-8 text-center">
          We do not presently have an opening
        </p>
      ) : (
        jobs.map((job) => (
          <div key={job.category} className="w-full h-auto text-[#16205F]">
            <p className="text-3xl font-semibold mb-8">{job.category}</p>
            <div className="space-y-6">
              {job.listings.map((listing, index) => (
                <div
                  key={index}
                  className="bg-white shadow-sm p-6 rounded-lg border mb-6 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex flex-col lg:flex-row lg:gap-8">
                    <div className="flex-1 space-y-4 mb-6 lg:mb-0">
                      <h3 className="font-semibold text-lg text-gray-700">
                        ROLE
                      </h3>
                      <p className="text-2xl font-semibold text-[#16205F]">
                        {listing.role}
                      </p>
                      <p className="text-sm text-gray-500">
                        {listing.description}
                      </p>
                    </div>

                    <div className="flex-1 space-y-4 mb-6 lg:mb-0">
                      <h3 className="font-semibold text-lg text-gray-700">
                        SKILLS
                      </h3>
                      <div className="flex gap-3 flex-wrap">
                        {listing.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-md bg-[#2D7EFF38] text-sm font-medium text-[#2D7EFF]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex-none space-y-4">
                      <h3 className="font-semibold text-lg text-gray-700">
                        LOCATION
                      </h3>
                      <p className="font-semibold text-lg text-[#16205F]">
                        {listing.location}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/career/${listing.role
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-2 mt-6 lg:mt-8 bg-[#2D7EFF] text-white px-6 py-2 rounded-md font-semibold transition-colors duration-200 hover:bg-[#1b5fcc]"
                  >
                    APPLY NOW
                    <Image
                      src="/arrow_forward.svg"
                      alt="arrow forward"
                      width={16}
                      height={16}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default JobListings;
