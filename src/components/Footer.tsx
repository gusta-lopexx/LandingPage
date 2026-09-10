import {
  Instagram,
  MapPin,
  Phone,
} from "lucide-react";

import logo from "@/assets/Logo-Salao-Transparent.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Marca */}
          <div className="space-y-5">

            <img
              src={logo}
              alt="Espaço de Beleza Berenice Lopes"
              className="w-44 h-auto"
            />

            <p className="text-background/70 leading-relaxed max-w-sm">
              Beleza, cuidado e dedicação em cada atendimento.
              Um espaço pensado para você se sentir especial.
            </p>

          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-5">
              Navegação
            </h3>

            <nav className="flex flex-col gap-3 text-background/70">
              <a
                href="#inicio"
                className="hover:text-primary transition-colors"
              >
                Início
              </a>

              <a
                href="#sobre"
                className="hover:text-primary transition-colors"
              >
                Sobre
              </a>

              <a
                href="#services"
                className="hover:text-primary transition-colors"
              >
                Serviços
              </a>

              <a
                href="#contato"
                className="hover:text-primary transition-colors"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-5">
              Fale conosco
            </h3>

            <div className="space-y-4 text-background/70">

              {/* WhatsApp */}
              <a
                href="https://wa.me/5547991375234?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Espa%C3%A7o%20de%20Beleza%20Berenice%20Lopes."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />

                <span>
                  (47) 99137-5234
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/berenice.lopes.37/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary shrink-0" />

                <span>
                  @berenice.lopes.37
                </span>
              </a>

              {/* Endereço */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rua+Paulina+Gervasi+Benvenutti+172+Limeira+Santa+Catarina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-primary transition-colors"
              >
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />

                <span>
                  Rua Paulina Gervasi Benvenutti, 172
                  <br />
                  Limeira - Santa Catarina
                </span>
              </a>

            </div>
          </div>

        </div>

        {/* Linha */}
        <div className="border-t border-background/10 mt-12 pt-6">

          <p className="text-sm text-background/50 text-center">
            © {new Date().getFullYear()} Espaço de Beleza Berenice Lopes.
            Todos os direitos reservados.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;