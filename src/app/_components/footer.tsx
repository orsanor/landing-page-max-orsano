"use client";

import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <section className="bg-[#0D68B1] text-white" id="contact">
      <div className="container mx-auto px-10 py-4 items-center justify-center flex flex-col">
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-16 mb-20 mt-5">
          <div className="mx-4 md:mx-8 lg:mx-16 my-4">
            <h3 className="text-2xl font-semibold mb-4">Contatos</h3>
            <p>Email: max.orsano@gmail.com</p>
            <p>Celular: (61) 99827-5031</p>
          </div>

          <div className="mx-4 md:mx-8 lg:mx-16 my-4">
            <h3 className="text-2xl font-semibold mb-4">Onde Encontrar</h3>
            <h1>Aguas Claras</h1>
          </div>

          <div className="mx-4 md:mx-8 lg:mx-16 my-4">
            <h3 className="text-2xl font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/p/maxorsano-100069786426605/"
                target="_blank"
              >
                <FacebookLogo className="w-8 h-8" />
              </a>
              <a href="https://www.instagram.com/max.orsano/" target="_blank">
                <InstagramLogo className="w-8 h-8" />
              </a>
            </div>
          </div>
        </footer>
        <div className="text-center text-sm pb-1">
          <p>Site criado por Jonathan Orsano</p>
        </div>
      </div>
    </section>
  );
}
