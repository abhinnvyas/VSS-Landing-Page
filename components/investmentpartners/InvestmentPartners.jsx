// components/InvestmentPartners.js
import Image from "next/image";

export default function InvestmentPartners() {
  const partners = [
    { name: "Boltshift", src: "/asset/investment/boltshift.png" }, // Replace with actual image path
    { name: "Lightbox", src: "/asset/investment/lightbox.png" }, // Example path
    { name: "FeatherDev", src: "/asset/investment/featuredev.png" }, // Example path
    { name: "Spherule", src: "/asset/investment/spherule.png" }, // Example path
    { name: "GlobalBank", src: "/asset/investment/globalbank.png" }, // Example path
    { name: "Nietzsche", src: "/asset/investment/neitze.png" }, // Example path
    { name: "Epicurious", src: "/asset/investment/epicurious.png" }, // Example path
    { name: "CloudWatch", src: "/asset/investment/cloudwatch.png" }, // Example path
    { name: "AcmeCorp", src: "/asset/investment/achmeCorp.png" }, // Example path
    { name: "Polymath", src: "/asset/investment/polymath.png" }, // Example path
    { name: "FeatherDev", src: "/asset/investment/featuredev.png" },
    { name: "Boltshift", src: "/asset/investment/boltshift.png" }, // Replace with actual image path
    { name: "Lightbox", src: "/asset/investment/lightbox.png" }, // Example path
    { name: "FeatherDev", src: "/asset/investment/featuredev.png" }, // Example path
    { name: "Spherule", src: "/asset/investment/spherule.png" }, // Example path
    { name: "GlobalBank", src: "/asset/investment/globalbank.png" }, // Example path
  ];

  return (
    <section className="p-10 mt-10 bg-background">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-10">Investment Partners</h2>

        {/* Logos Flexbox */}
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className=" mx-4 flex flex-row gap-x-3 items-center" // Added text-center for alignment
            >
              <Image
                src={partner.src} // Uses individual logos
                alt={partner.name}
                width={1000} // Adjust width
                height={1000} // Adjust height
                className="h-10 w-10  object-contain transition duration-300"
              />
              <p className="text-base font-bold text-[#6C7C88]">
                {partner.name}
              </p>{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
