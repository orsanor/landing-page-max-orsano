import { Button } from "@/components/ui/button";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export default function Header() {
  return (
    <header className="py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <img src="/logo.png" className="h-32" />
        <nav className="flex space-x-8">
          <a className="text-black font-medium hover:underline">Sobre</a>
          <a
            className="text-black font-medium hover:underline"
            href="#servicos"
          >
            Serviços
          </a>
          <a className="text-black font-medium hover:underline" href="#blog">
            Blog
          </a>
          <a className="text-black font-medium hover:underline" href="#contato">
            Contato
          </a>
        </nav>
        <a
          href="#"
          className="bg-[#2c5ba7] px-5 py-2 rounded-md font-semibold flex items-center w-fit gap-2 text-[#e0e0e0] hover:bg-[#77adeb] duration-300"
        >
          <WhatsappLogo className="w-5 h-5" />
          Agende sua sessão
        </a>
      </div>
    </header>
  );
}
