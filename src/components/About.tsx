import { Award, Users } from "lucide-react";
import aboutImage from "@/assets/sobre.png";

const stats = [
  {
    icon: Award,
    value: "15+",
    label: "Anos de experiência",
  },
  {
    icon: Users,
    value: "5000+",
    label: "Clientes atendidas",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Imagem */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <img
                src={aboutImage}
                alt="Atendimento no Espaço de Beleza Berenice Lopes"
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
            </div>

            {/* Detalhe decorativo */}
            <div className="absolute -bottom-5 -right-5 w-32 h-32 border border-primary/30 rounded-2xl -z-10" />
          </div>

          {/* Conteúdo */}
          <div className="space-y-7">

            {/* Pequeno título */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-primary" />

              <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary">
                Sobre o espaço
              </span>
            </div>

            {/* Título */}
            <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-foreground">
              Sua beleza é nossa{" "}
              <span className="italic text-primary">paixão</span>
            </h2>

            {/* Texto */}
            <div className="space-y-5">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Há mais de 15 anos, o Espaço de Beleza Berenice Lopes cuida
                de cada cliente com carinho, dedicação e atenção aos detalhes.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Nosso propósito é proporcionar uma experiência acolhedora,
                valorizando a beleza e a personalidade de cada mulher. Cada
                atendimento é pensado para que você se sinta especial,
                confiante e ainda mais bonita.
              </p>
            </div>

            {/* Indicadores */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <div className="text-2xl font-semibold text-foreground">
                      {stat.value}
                    </div>

                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;