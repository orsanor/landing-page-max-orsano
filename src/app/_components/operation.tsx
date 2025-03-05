"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Clock, User, Users } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function Operation() {
  return (
    <section className="bg-white py-16" id="operation">
      <div className="container mx-auto px-4 mt-15">
        <div className="text-center">
          <h2 className="font-serif text-[28px] text-2xl font-semibold mb-20">
            Veja como funcionará seu atendimento
          </h2>
          <div className="flex items-center justify-center">
            <article>
              <div className="flex flex-col md:flex-row items-center justify-center gap-12 p-6">
                <div className="flex flex-col items-center text-center border-2 border-[#0D68B1] p-6 rounded-lg max-w-xs hover:scale-105 transition-transform">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#0D68B1] text-white font-bold rounded-full text-lg mb-4">
                    1
                  </div>
                  <h2 className="text-[#0D68B1] font-bold text-xl mb-2">
                    AVALIAÇÃO
                  </h2>
                  <p className="text-[#0D68B1] text-sm">
                    Agende um primeiro encontro para conversarmos onde você
                    apresentará todos os desafios que deseja abordar durante o
                    processo de terapia.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center border-2 border-[#0D68B1] bg-[#0D68B1] text-white p-6 rounded-lg max-w-xs hover:scale-105 transition-transform">
                  <div className="w-10 h-10 flex items-center justify-center bg-white text-[#0D68B1] font-bold rounded-full text-lg mb-4">
                    2
                  </div>
                  <h2 className="font-bold text-xl mb-2">PLANEJAMENTO</h2>
                  <p className="text-sm">
                    A partir da avaliação, eu crio um plano terapêutico
                    personalizado, adaptado a cada sessão. Este plano inclui a
                    definição do número de sessões necessárias para o
                    tratamento.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center border-2 border-[#0D68B1] p-6 rounded-lg max-w-xs hover:scale-105 transition-transform">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#0D68B1] text-white font-bold rounded-full text-lg mb-4">
                    3
                  </div>
                  <h2 className="text-[#0D68B1] font-bold text-xl mb-2">
                    AÇÃO
                  </h2>
                  <p className="text-[#0D68B1] text-sm">
                    Por fim, combinamos dia e horário para as sessões e
                    começamos a resolver os problemas. As sessões são realizadas
                    de forma conveniente, via Google Meet, WhatsApp Vídeo ou
                    presencial.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
