import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula Silva",
    text: "Simplesmente maravilhoso! A equipe é super atenciosa e o resultado sempre supera minhas expectativas. Já sou cliente há 3 anos e não troco por nada!",
    rating: 5,
  },
  {
    name: "Mariana Costa",
    text: "O melhor salão da região! Ambiente acolhedor, profissionais qualificados e preços justos. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Juliana Santos",
    text: "Fiz meu cabelo para o casamento e ficou perfeito! A maquiagem também estava impecável. Recebi muitos elogios. Muito obrigada!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que nossas clientes dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            Depoimentos reais de quem confia em nosso trabalho
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border shadow-soft">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-primary">{testimonial.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
