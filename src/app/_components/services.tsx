"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Clock, User, Users } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const services = [
  {
    title: "Terapia Individual",
    icon: <User />,
    duration: "2h",
  },
  {
    title: "Terapia de Casal",
    icon: <Users />,
    duration: "1h",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width:768px)": {
        slidesToScroll: 3,
      },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="py-16" id="services">
      <div className="container mx-auto px-4 mt-15">
        <div className="text-center">
          <h2 className="font-serif text-[28px] text-2xl font-semibold mb-12">
            Meus Serviços
          </h2>
          <div>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex justify-center gap-10 py-4">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-[calc(100%/2-1rem)] md:w-[calc(100%/4rem)] lg:w-[calc(100%/5-1rem)] max-w-xs"
                  >
                    <article className=" border-[#0D68B1] border-2 rounded-2xl p-6 space-y-4 h-full flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                      <span className="text-3xl text-[#0D68B1]">
                        {item.icon}
                      </span>

                      <h3 className="font-semibold text-xl text-[#0D68B1]">
                        {item.title}
                      </h3>
                      <p className="text-[#0D68B1] text-sm">
                        {item.description}
                      </p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
