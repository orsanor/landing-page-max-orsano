import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <section className="bg-[#183981] py-16 text-white">
      <div className="container mx-auto px-4">
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contatos</h3>
            <p>Email: max.orsano@gmail.com</p>
            <p>Celular: (61) 99999-9999</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Onde Encontrar</h3>
            <h1>Aguas Claras</h1>
          </div>

          <div>
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
      </div>
    </section>
  );
}
