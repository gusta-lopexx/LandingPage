import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Heart,
    title: "Atendimento personalizado",
    text: "Cada cliente é atendida com carinho, atenção e cuidado em todos os detalhes.",
  },
  {
    icon: Star,
    title: "Experiência e dedicação",
    text: "Anos de experiência unidos à paixão por realçar a beleza de cada cliente.",
  },
  {
    icon: Sparkles,
    title: "Momentos especiais",
    text: "Preparando você para se sentir ainda mais bonita em todos os momentos.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">

        {/* Título */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-primary" />

            <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary">
              Nosso compromisso
            </span>

            <div className="w-10 h-px bg-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-5">
            Beleza que começa no{" "}
            <span className="italic text-primary">cuidado</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Mais do que cuidar da sua beleza, queremos proporcionar
            uma experiência especial em cada visita.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="border-border/60 bg-card hover:shadow-elegant transition-all duration-300"
            >
              <CardContent className="p-8 text-center">

                {/* Ícone */}
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Título */}
                <h3 className="text-xl font-serif font-medium mb-3">
                  {item.title}
                </h3>

                {/* Texto */}
                <p className="text-muted-foreground leading-relaxed">
                  {item.text}
                </p>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;