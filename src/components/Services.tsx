import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, Palette, Heart } from "lucide-react";
import serviceHair from "@/assets/service-hair.jpg";
import serviceNails from "@/assets/service-nails.jpg";
import Estetica from "@/assets/estetica.jpg";
import Produtos from "@/assets/Produtos.jpg";

const services = [
  {
    icon: Scissors,
    title: "Cabelo",
    description:
      "Cortes femininos e masculinos, hidratação, luzes, botox capilar, progressiva e penteados para todas as ocasiões.",
    image: serviceHair,
  },
  {
    icon: Sparkles,
    title: "Produtos",
    description:
      "Revenda de produtos Avon, Natura e Abelha Rainha, além de itens de cabelo e perfumaria para cuidar da beleza no dia a dia.",
    image: serviceNails,
  },
  {
    icon: Palette,
    title: "Maquiagem",
    description:
      "Maquiagem profissional para eventos, festas e noivas, com foco em realçar sua beleza natural.",
    image: Produtos,
  },
  {
    icon: Heart,
    title: "Estética",
    description:
      "Depilação e cuidados faciais para uma pele macia, saudável e bem tratada.",
    image: Estetica,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground text-lg">
            Do corte ao cuidado diário, oferecemos serviços e produtos pensados
            para realçar sua beleza e bem-estar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-smooth overflow-hidden border-border"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <service.icon className="absolute bottom-4 left-4 w-8 h-8 text-primary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
