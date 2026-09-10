import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, ShoppingBag } from "lucide-react";

import serviceHair from "@/assets/service-hair.jpg";
import serviceMakeup from "@/assets/service-makeup.jpg";
import Produtos from "@/assets/Produtos.jpg";

const services = [
  {
    icon: Scissors,
    title: "Cabelos",
    description:
      "Cuidados completos para transformar e valorizar seus cabelos, sempre respeitando seu estilo e personalidade.",
    items: [
      "Corte de cabelo",
      "Escova",
      "Coloração",
      "Mechas e luzes",
      "Hidratação",
      "Progressiva",
    ],
    image: serviceHair,
  },
  {
    icon: Sparkles,
    title: "Maquiagem",
    description:
      "Produções especiais para valorizar sua beleza em momentos que merecem ser inesquecíveis.",
    items: [
      "Maquiagem",
      "Maquiagem para noivas",
    ],
    image: serviceMakeup,
  },
  {
    icon: ShoppingBag,
    title: "Produtos",
    description:
      "Produtos de beleza selecionados para você continuar cuidando de si também em casa.",
    items: [
      "Abelha Rainha",
      "Natura",
      "Avon",
    ],
    image: Produtos,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6">

        {/* Título da seção */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-primary" />

            <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary">
              Nossos serviços
            </span>

            <div className="w-10 h-px bg-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-5">
            Beleza em cada{" "}
            <span className="italic text-primary">detalhe</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Cuidados pensados para valorizar sua beleza, seu estilo
            e os momentos especiais da sua vida.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border/60 bg-background hover:shadow-elegant transition-all duration-300"
            >

              {/* Imagem */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Ícone */}
                <div className="absolute bottom-5 left-5 w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-lg">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Conteúdo */}
              <CardContent className="p-7">

                <h3 className="text-2xl font-serif font-medium mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Lista de serviços */}
                <ul className="space-y-2.5">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

              </CardContent>
            </Card>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;