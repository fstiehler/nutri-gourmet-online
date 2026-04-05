import refeitorio4 from "@/assets/refeitorio-sanco-4.png";
import refeitorio5 from "@/assets/refeitorio-sanco-5.png";
import refeitorio6 from "@/assets/refeitorio-sanco-6.png";

const steps = [
  {
    num: "01",
    title: "Projeto",
    description: "Desenvolvemos o projeto arquitetônico do refeitório ideal para o seu espaço.",
  },
  {
    num: "02",
    title: "Construção",
    description: "Realizamos toda a obra e montagem, sem preocupação para o cliente.",
  },
  {
    num: "03",
    title: "Operação",
    description: "Assumimos a gestão completa com equipe, cardápio e qualidade garantida.",
  },
];

const images = [
  { src: refeitorio4, alt: "Refeitório sob medida — área de mesas" },
  { src: refeitorio5, alt: "Refeitório sob medida — painel decorativo" },
  { src: refeitorio6, alt: "Refeitório sob medida — visão geral" },
];

const Diferencial = () => {
  return (
    <section className="relative py-24 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
          <div className="md:max-w-xl">
            <span className="inline-block gradient-hero text-primary-foreground text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              Nosso Grande Diferencial
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Construímos o refeitório da sua empresa do zero
            </h2>
          </div>
          <p className="md:max-w-md text-background/70 text-lg leading-relaxed md:pt-16">
            Ao fechar contrato com a Nutri Gourmet, você ganha muito mais do que refeições. Nós projetamos, construímos e gerenciamos o refeitório completo — sem custo extra de obra para você.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step) => (
            <div
              key={step.num}
              className="border border-background/20 rounded-2xl p-8 hover:border-primary/60 transition-colors"
            >
              <span className="font-heading text-5xl font-bold text-primary/70 block mb-4">
                {step.num}
              </span>
              <h3 className="font-heading text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-background/60 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferencial;
