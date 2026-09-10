import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "@/assets/Logo-Salao-Transparent.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#inicio" onClick={closeMenu}>
            <img
              src={logo}
              alt="Espaço de Beleza Berenice Lopes"
              className="w-16 md:w-20 h-auto"
            />
          </a>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center gap-8">

            <a
              href="#inicio"
              className="text-sm text-white/90 hover:text-white transition-colors"
            >
              Início
            </a>

            <a
              href="#sobre"
              className="text-sm text-white/90 hover:text-white transition-colors"
            >
              Sobre
            </a>

            <a
              href="#services"
              className="text-sm text-white/90 hover:text-white transition-colors"
            >
              Serviços
            </a>

            <a
              href="#contato"
              className="text-sm text-white/90 hover:text-white transition-colors"
            >
              Contato
            </a>

            <a
              href="https://wa.me/5547991375234?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Espa%C3%A7o%20de%20Beleza%20Berenice%20Lopes."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white text-rose-900 text-sm font-medium hover:bg-rose-50 transition-colors"
            >
              Agendar horário
            </a>

          </nav>

          {/* Botão mobile */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>

        </div>

        {/* Menu mobile */}
        {isOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-md rounded-2xl mt-2 p-5 shadow-lg">

            <nav className="flex flex-col gap-4">

              <a
                href="#inicio"
                onClick={closeMenu}
                className="text-white py-2"
              >
                Início
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="text-white py-2"
              >
                Sobre
              </a>

              <a
                href="#services"
                onClick={closeMenu}
                className="text-white py-2"
              >
                Serviços
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="text-white py-2"
              >
                Contato
              </a>

              <a
                href="https://wa.me/5547991375234?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Espa%C3%A7o%20de%20Beleza%20Berenice%20Lopes."
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-5 py-3 rounded-full bg-white text-rose-900 font-medium"
              >
                Agendar meu horário
              </a>

            </nav>

          </div>
        )}

      </div>
    </header>
  );
};

export default Header;