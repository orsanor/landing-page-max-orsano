"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { Link } from "react-scroll";

export function Header() {
  return (
    <header className="px-6 fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <nav>
          <ul className="flex gap-6 font-semibold">
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="text-black hover:text-[#0D68B1] duration-300 font-semibold cursor-pointer"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-black hover:text-[#0D68B1] duration-300 font-semibold cursor-pointer"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="text-black hover:text-[#0D68B1] duration-300 font-semibold cursor-pointer"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-black hover:text-[#0D68B1] duration-300 font-semibold cursor-pointer"
              >
                Contato
              </Link>
            </li>
            <li>
              <Link
                to="blog"
                smooth={true}
                duration={500}
                className="text-black hover:text-[#0D68B1] duration-300 font-semibold cursor-pointer"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="hero" smooth={true} duration={500}>
          <img src="/logo.png" className="h-32 mr-24 cursor-pointer" />
        </Link>
        <a
          href={`https://wa.me/556198275031?text=Gostaria de agendar uma sessão`}
          className="bg-[#0D68B1] px-6 py-3 rounded-md font-semibold flex items-center w-fit gap-4 text-white hover:bg-[#77adeb] duration-300"
        >
          <WhatsappLogo className="w-5 h-5" />
          Agende sua sessão
        </a>
      </div>
    </header>
  );
}
