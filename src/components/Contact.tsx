import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Instagram,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6">

        {/* Título */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-primary" />

            <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary">
              Entre em contato
            </span>

            <div className="w-10 h-px bg-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-5">
            Vamos cuidar de{" "}
            <span className="italic text-primary">você</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Entre em contato para conhecer nossos serviços e agendar
            seu horário no Espaço de Beleza Berenice Lopes.
          </p>
        </div>

        {/* Informações */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {/* Endereço */}
          <Card className="border-border/60 bg-background hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8 text-center">

              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-serif text-xl font-medium mb-3">
                Onde estamos
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-5">
                Rua Paulina Gervasi Benvenutti, 172
                <br />
                Limeira - Santa Catarina
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Rua+Paulina+Gervasi+Benvenutti+172+Limeira+Santa+Catarina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                Ver localização →
              </a>

            </CardContent>
          </Card>

          {/* WhatsApp */}
          <Card className="border-border/60 bg-background hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8 text-center">

              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-serif text-xl font-medium mb-3">
                WhatsApp
              </h3>

              <p className="text-muted-foreground mb-5">
                (47) 99137-5234
              </p>

              <a
                href="https://wa.me/5547991375234?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Espa%C3%A7o%20de%20Beleza%20Berenice%20Lopes."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                Falar pelo WhatsApp →
              </a>

            </CardContent>
          </Card>

          {/* Instagram */}
          <Card className="border-border/60 bg-background hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8 text-center">

              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Instagram className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-serif text-xl font-medium mb-3">
                Instagram
              </h3>

              <p className="text-muted-foreground mb-5">
                @berenice.lopes.37
              </p>

              <a
                href="https://www.instagram.com/berenice.lopes.37/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                Conhecer o perfil →
              </a>

            </CardContent>
          </Card>

        </div>

        {/* Botão principal */}
        <div className="text-center mt-12">

          <a
            href="https://wa.me/5547991375234?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Espa%C3%A7o%20de%20Beleza%20Berenice%20Lopes."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="hero"
              size="lg"
              className="px-8 h-12"
            >
              Agendar meu horário
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;