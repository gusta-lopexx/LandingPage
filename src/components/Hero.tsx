import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center gradient-hero overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Interior elegante do salão de beleza"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full shadow-soft">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Sua beleza em boas mãos</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            By Berenice Lopes
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experimente o melhor em cuidados de beleza em um ambiente acolhedor
            e profissional. Tratamentos personalizados para você se sentir
            incrível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://w.app/nr7xda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg">
                Agendar Horário
              </Button>
            </a>

            <a href="#services">
              <Button variant="outline" size="lg">
                Ver Serviços
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
