"use client";

import { useState } from "react";
import { WhatsappLogo, List, X } from "@phosphor-icons/react";
import { Link } from "react-scroll";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-4 fixed top-0 left-0 w-full z-50 bg-[#ffff] shadow-md ">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4">
        <Link to="hero" smooth={true} duration={500} className="mr-auto">
          <img
            src="/logo.png"
            className="h-32 w-auto cursor-pointer"
            alt="Logo"
            style={{ maxHeight: "3rem" }}
          />
        </Link>

        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <List size={32} />}
        </button>

        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row items-center w-full md:w-auto mt-4 md:mt-0 absolute md:static top-16 left-0 bg-white md:bg-transparent shadow-md md:shadow-none md:p-0 p-4 md:space-x-6 space-y-4 md:space-y-0`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 font-semibold">
            {[
              { to: "hero", label: "Início" },
              { to: "about", label: "Sobre" },
              { to: "services", label: "Serviços" },
              { to: "contact", label: "Contato" },
              { to: "blog", label: "Blog" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-black hover:text-[#0D68B1] duration-300 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/556198275031?text=Gostaria de agendar uma sessão"
            className="bg-[#0D68B1] px-4 py-2 rounded-md font-semibold flex items-center w-fit gap-2 text-white hover:bg-[#77adeb] duration-300"
          >
            <WhatsappLogo className="w-5 h-5" />
            Agende sua sessão
          </a>
        </nav>
      </div>
    </header>
  );
}
