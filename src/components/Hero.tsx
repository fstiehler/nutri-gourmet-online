import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Restaurante empresarial"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative container mx-auto px-4 py-32 text-center">
        <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
          🍲 Restaurantes Empresariais
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto mb-6">
          Participando do sucesso dos nossos clientes através das nossas refeições
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Há mais de 40 anos alimentando empresas em todo o Estado de Santa Catarina com qualidade, sabor e dedicação.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contato"
            className="gradient-hero text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Solicite um Orçamento
          </a>
          <a
            href="#sobre"
            className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            Conheça a Nutri Gourmet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
