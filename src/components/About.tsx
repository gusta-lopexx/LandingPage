import { Award, Users, Heart, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "5000+", label: "Clientes Satisfeitos" },
  { icon: Award, value: "15+", label: "Anos de Experiência" },
  { icon: Heart, value: "100%", label: "Dedicação" },
  { icon: Star, value: "5.0", label: "Avaliação" },
];

const About = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Sua beleza é nossa paixão
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Com mais de 15 anos de experiência, o salão se consolidou como
              referência em beleza e bem-estar. Cada detalhe é conduzido com
              dedicação e cuidado, unindo técnica, sensibilidade e paixão pelo
              que faz.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Aqui, cada cliente é tratado de forma única. O atendimento é
              totalmente personalizado, buscando compreender seus desejos e
              valorizar sua beleza natural, com resultados que refletem estilo,
              confiança e autenticidade.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg shadow-soft text-center space-y-2"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto" />
                <div className="text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
