// components/InvestmentPartners.js
import Image from "next/image";
import CompanyLogo from "@/public/images/company.png";

export default function InvestmentPartners() {
  const partners = [
    { name: "Boltshift", src: CompanyLogo },
    { name: "Lightbox", src: CompanyLogo },
    { name: "FeatherDev", src: CompanyLogo },
    { name: "Spherule", src: CompanyLogo },
    { name: "GlobalBank", src: CompanyLogo },
    { name: "Nietzsche", src: CompanyLogo },
    { name: "Epicurious", src: CompanyLogo },
    { name: "CloudWatch", src: CompanyLogo },
    { name: "AcmeCorp", src: CompanyLogo },
    { name: "Polymath", src: CompanyLogo },
  ];

  return (
    <section className="p-10 mt-10">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-10">Investment partners</h2>

        {/* Logos Flexbox */}
        <div className="flex flex-wrap justify-center gap-6 ">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex-grow-0 flex-shrink-0 mx-4 w-40" // flex-grow-0 prevents logos from expanding disproportionately
            >
              <Image
                src={partner.src} // Uses the same CompanyLogo for all logos
                alt={partner.name}
                width={120} // Width and height adjusted for logo size
                height={50}
                className="grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
