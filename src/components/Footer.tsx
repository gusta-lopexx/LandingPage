import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">Salão de Beleza</h3>
          <p className="text-background/80 flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 fill-primary text-primary" /> para você
          </p>
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Salão de Beleza. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
