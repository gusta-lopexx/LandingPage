import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";
import logo from "@/assets/Logo-Salao-Transparent.png";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior do Espaço de Beleza Berenice Lopes"
          className="w-full h-full object-cover"
        />

        {/* Camada para melhorar a leitura do conteúdo */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Tonalidade rosé da identidade visual */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950/70 via-rose-900/35 to-transparent" />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">

          {/* Identificação */}
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-rose-200" />

            <span className="text-sm md:text-base tracking-[0.25em] uppercase text-rose-100">
              Espaço de Beleza
            </span>
          </div>

          {/* Logo */}
          <div className="mb-8">
            <img
              src={logo}
              alt="Espaço de Beleza Berenice Lopes"
              className="w-72 md:w-96 lg:w-[420px] h-auto mx-auto"
            />
          </div>

          {/* Linha decorativa */}
          <div className="w-24 h-px bg-rose-200 mx-auto mb-8" />

          {/* Texto */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl mx-auto">
            Realçando sua beleza e cuidando de cada detalhe
            para você se sentir ainda mais especial.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

            {/* WhatsApp */}
            <a
              href="https://wa.me/5547991375234?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Espa%C3%A7o%20de%20Beleza%20Berenice%20Lopes."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-rose-900 hover:bg-rose-50 px-8 h-12"
              >
                Agendar meu horário
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>

            {/* Serviços */}
            <a href="#services">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/70 bg-transparent text-white hover:bg-white hover:text-rose-900 px-8 h-12"
              >
                Conhecer serviços
              </Button>
            </a>

          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;