"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Clock, User, Users } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const services = [
  {
    title: "Terapia de Casal",
    description: "teste",
    icon: <User />,
    duration: "1h",
  },
  {
    title: "Terapia Individual",
    description: "teste",
    icon: <Users />,
    duration: "2h",
  },
];

export default function Services() {
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
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="font-600 text-2xl font-bold mb-12">Serviços</h2>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                  >
                    <article className="bg-[#2c5ba7] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                      <div className="flex-1 flex items-start- justify-between">
                        <div className="flex gap-3">
                          <span className="text-3xl">{item.icon}</span>
                          <div>
                            <h3 className="font-bold text-xl my-1">
                              {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm select-none">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-700 pt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{item.duration}</span>
                        </div>

                        <a
                          href="#"
                          className="flex items-center justify-center gap-2  hover:bg-[#77adeb] px-4 py-2 rounded-md duration-300"
                        >
                          <WhatsappLogo className="w-5 h-5" />
                          Marcar uma sessão
                        </a>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="  bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
              onClick={scrollPrev}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button
              className=" bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
              onClick={scrollNext}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
