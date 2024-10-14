import Image from "next/image";

export default function Governers() {
  return (
    <div className="border-b-4 h-[60vh] border-[#E42A2A]  bg-[#15222B] text-white">
      {/* Top section */}
      <div className="relative overflow-hidden px-10">
        <div className="absolute -top-10 left-10 w-2 h-40 bg-red-600"></div>
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[150px] border-r-[150px] border-t-transparent border-r-red-600"></div>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-8 w-10">BOARD OF GOVERNORS</h2>
          <div className="flex items-center space-x-8">
            <div className="relative flex justify-center items-center  p-10">
              {/* Right Laurel Wing (Flipped) */}
              <div className="absolute ">
                <Image
                  src="/images/pngwing.png" // Same image, but flipped horizontally
                  alt="Right Laurel Wing"
                  width={300}
                  height={300}
                  className="object-contain" // Flipping the image horizontally
                />
              </div>

              {/* Center Profile Image */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-gray-300 z-10">
                <Image
                  src="/images/devanshu.png" // Replace with the correct path to your profile image
                  alt="Profile Image"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-600">
                Dr. Devanshu J Patel
              </h3>
              <p className="text-gray-400">President</p>
              <p className="mt-2 text-sm max-w-xl">
                Dr. Devanshu Patel, A Dynamic Visionary President Of Parul
                University, Whose Unflinching Commitment Towards Education Has
                Made An Impact Not Only In Gujarat But In All The Diversified
                States Of India And Going Beyond National Borders.
              </p>
              <div className="flex mt-4 space-x-2">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === 1 ? "bg-red-600" : "bg-[#D9D9D9]"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
