"use client";

import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import terapia from "../../../public/terapia.jpg";

export function Hero() {
  return (
    <section className="text-white relative overflow-hidden" id="hero">
      <div className="relative w-full flex justify-center mt-30">
        <div className="relative w-[90%] min-h-[80vh] bg-black/20 bg-blend-multiply flex flex-col justify-end rounded-2xl overflow-hidden">
          <Image
            src={terapia}
            alt="Fundo de Terapia"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            className="opacity-90 -z-10"
          />

          <div className="container mx-auto px-4 pb-16 relative">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4 z-20">
                <h1 className="font-sans text-5xl lg:text-5xl md:text-4xl font-semibold leading-10">
                  Max Orsano
                </h1>
                <p className="font-sans text-[20px]">
                  Psicanalista
                  <p className="font-sans text-[12px]">ABPC - 23/959</p>
                </p>
                <div>
                  <a
                    href="https://wa.me/556198275031?text=Gostaria de agendar uma sessão"
                    className="bg-[#0D68B1] px-5 py-3 rounded-md font-semibold text-white flex items-center w-fit gap-2 hover:bg-[#77adeb] duration-300 mt-5"
                  >
                    <WhatsappLogo className="w-5 h-5" />
                    Agende uma avaliação
                  </a>
                </div>
              </div>
              <div className="hidden lg:block"></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
