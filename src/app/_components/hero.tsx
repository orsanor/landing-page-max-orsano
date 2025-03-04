"use client";

import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import perfil from "../../../public/perfil.png";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Hero() {
  return (
    <section className="bg-[#183981] text-[#e0e0e0] relative overflow-hidden">
      <div className="container mx-auto py-16 px-4 pt-16 pb-16 md:pb-0 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-30">
          {/* <Carousel className="w-full max-w-xs">
              <CarouselContent>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel> */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold leading-10">
              Max Orsano
            </h1>
            <p className="lg:text-lg">Psicanalista</p>
            <div>
              <a
                href={`https://wa.me/556198275031?text=Gostaria de agendar uma sessão`}
                className="bg-[#2c5ba7] px-5 py-2 rounded-md font-semibold flex items-center w-fit gap-2 hover:bg-[#77adeb] duration-300"
              >
                <WhatsappLogo className="w-5 h-5" />
                Agende uma avaliação
              </a>
            </div>
          </div>

          {/* <div className="hidden md:block h-full relative">
            <Image
              src={perfil}
              alt="Max Orsano"
              className="object-contain"
              quality={100}
              sizes="(min-width: 3000px)"
              layout="fill"
            />
          </div> */}
        </article>
      </div>
    </section>
  );
}
