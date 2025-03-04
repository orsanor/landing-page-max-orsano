"use client"

import { WhatsappLogo } from "@phosphor-icons/react";
import { Link } from "react-scroll";


export function Header() {
  return (
    <header className="py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <img src="/logo.png" className="h-32" />
        <nav className="flex items-center justify-center py-4">
          <ul className="flex gap-4">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-black hover:text-[#77adeb] duration-300 font-semibold cursor-pointer"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="text-black hover:text-[#77adeb] duration-300 font-semibold cursor-pointer"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-black hover:text-[#77adeb] duration-300 font-semibold cursor-pointer"
              >
                Contato
              </Link>
            </li>
            <li>
              <Link
                to="blog"
                smooth={true}
                duration={500}
                className="text-black hover:text-[#77adeb] duration-300 font-semibold cursor-pointer"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <a
          href={`https://wa.me/556198275031?text=Gostaria de agendar uma sessão`}
          className="bg-[#2c5ba7] px-5 py-2 rounded-md font-semibold flex items-center w-fit gap-2 text-[#e0e0e0] hover:bg-[#77adeb] duration-300"
        >
          <WhatsappLogo className="w-5 h-5" />
          Agende sua sessão
        </a>
      </div>
    </header>
  );
}
