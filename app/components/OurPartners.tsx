import Image from "next/image";

const partners = [
  "HP-removebg-preview.png",
  "Samsung_logo_blue-removebg-preview.png",
  "CP_Plus-removebg-preview.png",
  "Matrix_CCTV-removebg-preview.png",
  "motorola-2-logo-png-transparent-removebg-preview.png",
  "Realtime-removebg-preview.png",
  "esslogo-removebg-preview.png",
  "LG_logo.png",
  "Voltas_logo.png",
  "Microtek-Logo.png",
  "Airtel-Logo-PNG-Transparent-Image.png",
  "jio-digital-life-logo.png",
  "dev-to-uploads.s3.amazonaws.png",
  "Microsoft-removebg-preview.png",
  "AWS-removebg-preview.png",
  "Ahuja-removebg-preview.png",
  "Blue_Rack-removebg-preview.png",
  "Brosis-removebg-preview.png",
  "Digisol-banner-removebg-preview.png",
  "eLNOVA-removebg-preview.png",
  "Jadex-New-Logo-768x451-removebg-preview.png",
  "Koxtons_Sport_Equipment-removebg-preview.png",
  "llYODS-removebg-preview.png",
  "Pcom-removebg-preview.png",
  "sECURENET-removebg-preview.png",
  "Sense_techno-removebg-preview.png",
  "timewatch-logo.png",
  "Vertel-removebg-preview.png",
];

export default function OurPartners() {
  return (
    <section id="partners" className="w-full bg-[#f1f9fe] py-10 sm:py-12 lg:py-10 mt-6">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-[28px] sm:text-[34px] lg:text-[35px] xl:text-[40px] font-bold leading-tight text-[#0f172a] sm:mb-10">
          Our Partners
        </h2>

        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5">
          {partners.map((logo) => (
            <div
              key={logo}
              className="relative flex h-16 w-[calc(33.333%-0.42rem)] items-center justify-center overflow-hidden rounded-sm border border-[#d8dde6] bg-white p-2 shadow-[0_1px_2px_rgba(15,23,42,0.08)] sm:h-18 sm:w-[calc(25%-0.66rem)] sm:p-2.5 md:h-20 md:w-[calc(20%-0.7rem)] md:p-3 lg:w-[calc(16.666%-0.73rem)]"
            >
              <Image
                src={`/Partners/${logo}`}
                alt=""
                fill
                className="object-contain"
                sizes="(max-width: 640px) 30vw, (max-width: 768px) 23vw, (max-width: 1024px) 18vw, (max-width: 1280px) 15vw, 12vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
