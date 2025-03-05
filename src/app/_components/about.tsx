"use client";

import perfil from "../../../public/perfil.png";
import Image from "next/image";

export function About() {
  return (
    <section className="bg-[#0D68B1] py-16" id="about">
      <div className="container mx-auto py-16 px-4 pt-8 pb-16 md:pb-0 relative mt-20">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-10">
          <div className="hidden md:block h-full relative ml-15">
            {/* <Image
              src={perfil}
              alt="Max Orsano"
              className="object-contain"
              quality={100}
              width={300}
              height={300}
            /> */}
          </div>

          <div className="md:mx-8 lg:mx-12">
            <div className="text-center">
              <h2 className="text-[26px] text-2xl font-bold mb-6 text-white">
                Quem sou?
              </h2>
            </div>
            <p className="text-semibold text-[18px] text-white">
              Meu nome é Max Orsano, sou psicanalista formado em Filosofia e
              Teologia, com especialização em Terapia Cognitivo-Comportamental,
              Saúde Mental, Neurociências e Terapia Familiar Sistêmica. Com mais
              de 20 anos de experiência clínica, trabalho com questões como
              ansiedade, depressão, traumas, conflitos familiares e
              relacionamentos interpessoais. Cada paciente é único, e meu
              objetivo é adaptar a terapia às necessidades individuais com
              respeito e empatia. Acredito que a jornada terapêutica é
              colaborativa e progressiva, e estou aqui para oferecer suporte e
              orientação na busca por um maior bem-estar emocional. Se tiver
              dúvidas sobre o processo terapêutico, sinta-se à vontade para
              perguntar. Agradeço a confiança e estou à disposição para
              iniciarmos essa jornada juntos.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
