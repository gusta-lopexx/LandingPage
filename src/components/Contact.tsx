import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Instagram, Facebook, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos prontos para cuidar da sua beleza. Agende seu horário!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-border shadow-soft">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Endereço</h3>
              <p className="text-muted-foreground">
                Rua Paulina Gervasi Benvenutti, 172
                <br />
                Limeira - Santa Catarina, SC
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-soft">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Telefone</h3>
              <p className="text-muted-foreground">(47) 9 9137-5234</p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-soft">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Horário</h3>
              <p className="text-muted-foreground">
                Ter - Sáb: 7h às 20h
                <br />
                Domingo: Fechado
                <br />
                Segunda: Fechado
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://w.app/nr7xda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="lg">
              Agendar Agora
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
