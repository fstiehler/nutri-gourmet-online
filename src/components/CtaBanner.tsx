import { MessageCircle } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="py-20 bg-muted/70">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Solicite um Orçamento
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          Conheça nossa linha de refeições e profissionalize a alimentação da sua empresa.
        </p>
        <a
          href="https://wa.me/5547000000000?text=Olá! Gostaria de solicitar um orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 gradient-hero text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-elevated"
        >
          <MessageCircle size={22} />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;
