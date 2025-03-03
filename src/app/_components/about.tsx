"use client"

import perfil from "../../../public/perfil.png";
import Image from "next/image";

export function About() {
  return (
    <section className="bg-[#F7F0E5] py-16">
      <div className="container mx-auto py-16 px-4 pt-8 pb-16 md:pb-0 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-20">
          <div className="space-y-4">
            <h2 className="font-600 text-2xl font-bold mb-12">Quem sou?</h2>
            <p className="text-md">
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

          <div className="hidden md:block h-full relative">
            <Image
              src={perfil}
              alt="Max Orsano"
              className="object-contain"
              quality={100}
              sizes="(min-width: 3000px)"
              layout="fill"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
