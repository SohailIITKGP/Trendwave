import Image from "next/image";
import { memo } from "react";

const clients = [
  "Badge_of_the_Indian_Air_Force.webp",
  "Emblem_of_Haryana.webp",
  "Expenditure.webp",
  "GC-LOGO.webp",
  "Himachal_Pradesh_seal.webp",
  "JKC_Final_logo.webp",
  "Khelo_India.webp",
  "Ministry_of_cooperation.png",
  "Ministry_of_Finance_India.webp",
  "Ministry_of_Youth_Affairs_and_Sports.webp",
  "NCOL_logo_TW.webp",
  "SAI_logo.webp",
  "Secure_Life_Logo.webp",
  "Yogirty_Media.webp",
];

function Clinets() {
  const marqueeItems = [...clients, ...clients, ...clients];

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-[1.8rem] bg-white px-4 py-4 shadow-[0_0_40px_rgba(0,0,0,0.15)] sm:px-8 lg:px-12 lg:py-5">
        <div className="mb-2 flex items-center justify-center gap-4 lg:gap-6">
            <span
              aria-hidden="true"
              className="block h-px w-16 sm:w-28 md:w-44 lg:w-72 bg-[rgba(59,57,57,0.28)]"
            />
            <h2 className="my-4 text-center text-[20px] leading-[1.8] text-[#3f444b] tracking-tight">
              Trusted by
            </h2>
            <span
              aria-hidden="true"
              className="block h-px w-16 sm:w-28 md:w-44 lg:w-72 bg-[rgba(59,57,57,0.28)]"
            />
          </div>

        <div className="relative w-full overflow-x-clip py-3 sm:py-4">
          <div className="flex w-max hover:[&>div]:animation-play-state-paused">
            <div className="flex shrink-0 animate-[clients-scroll_40s_linear_infinite]">
              {marqueeItems.map((client, index) => (
                <div key={`c1-${index}`} className="flex-none px-6 sm:px-10 flex items-center justify-center">
                  <Image
                    src={`/clients/${client}`}
                    alt={`Client logo ${index + 1}`}
                    width={200}
                    height={100}
                    priority={true}
                    className="h-18 w-auto rounded-md object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="flex shrink-0 animate-[clients-scroll_40s_linear_infinite]" aria-hidden="true">
              {marqueeItems.map((client, index) => (
                <div key={`c2-${index}`} className="flex-none px-6 sm:px-10 flex items-center justify-center">
                  <Image
                    src={`/clients/${client}`}
                    alt=""
                    width={200}
                    height={100}
                    priority={true}
                    className="h-18 w-auto rounded-md object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes clients-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
          `,
        }}
      />
    </section>
  );
}

export default memo(Clinets);
