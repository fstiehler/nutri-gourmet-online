import { Users, Handshake, ArrowRight } from "lucide-react";

const JoinUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
            Faça Parte
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Junte-se à Nutri Gourmet
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Trabalhe Conosco */}
          <div className="bg-card rounded-2xl p-10 shadow-soft border border-border hover:border-primary/30 hover:shadow-elevated transition-all group">
            <div className="gradient-hero w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="text-primary-foreground" size={28} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
              Trabalhe Conosco
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Estamos sempre em busca de profissionais dedicados e apaixonados por alimentação.
              Faça parte de uma equipe com mais de 40 anos de tradição.
            </p>
            <a
              href="https://wa.me/5547000000000?text=Olá! Tenho interesse em trabalhar na Nutri Gourmet."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Envie seu currículo
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Seja Fornecedor */}
          <div className="bg-card rounded-2xl p-10 shadow-soft border border-border hover:border-secondary/40 hover:shadow-elevated transition-all group">
            <div className="gradient-warm w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Handshake className="text-primary-foreground" size={28} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
              Seja Nosso Fornecedor
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Buscamos parceiros que compartilhem nosso compromisso com qualidade e pontualidade.
              Entre em contato e apresente seus produtos.
            </p>
            <a
              href="https://wa.me/5547000000000?text=Olá! Tenho interesse em ser fornecedor da Nutri Gourmet."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary-foreground font-semibold hover:gap-3 transition-all"
            >
              Apresente sua empresa
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
