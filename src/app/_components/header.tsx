"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { Link } from "react-scroll";

export function Header() {
  return (
    <header className="px-4 fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap md:flex-nowrap">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="mr-auto md:mr-0"
        >
          <img src="/logo.png" className="h-20 w-auto cursor-pointer" />{" "}
        </Link>
        <nav className="w-full md:w-auto mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 font-semibold">
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="text-black hover:text-[#0D68B1] duration-300 cursor-pointer"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-black hover:text-[#0D68B1] duration-300 cursor-pointer"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="text-black hover:text-[#0D68B1] duration-300 cursor-pointer"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-black hover:text-[#0D68B1] duration-300 cursor-pointer"
              >
                Contato
              </Link>
            </li>
            <li>
              <Link
                to="blog"
                smooth={true}
                duration={500}
                className="text-black hover:text-[#0D68B1] duration-300 cursor-pointer"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <a
          href={`https://wa.me/556198275031?text=Gostaria de agendar uma sessão`}
          className="bg-[#0D68B1] px-4 py-2 rounded-md font-semibold flex items-center w-fit gap-2 text-white hover:bg-[#77adeb] duration-300 mt-4 md:mt-0" // ajuste de padding e gap
        >
          <WhatsappLogo className="w-5 h-5" />
          Agende
        </a>
      </div>
    </header>
  );
}
