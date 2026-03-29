import { UtensilsCrossed, Truck, Building2 } from "lucide-react";
import refeitorio1 from "@/assets/refeitorio-sanco-1.png";
import refeitorio2 from "@/assets/refeitorio-sanco-2.png";
import refeitorio3 from "@/assets/refeitorio-sanco-3.png";
import cozinha from "@/assets/cozinha-industrial.png";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Refeições no Local",
    description:
      "Preparamos refeições diretamente nas instalações do cliente, com cozinha própria e equipe dedicada.",
  },
  {
    icon: Truck,
    title: "Comida Transportada",
    description:
      "Entregamos refeições frescas e de qualidade diretamente na sua empresa, com logística eficiente.",
  },
  {
    icon: Building2,
    title: "Refeitórios sob Medida",
    description:
      "Projetamos e construímos refeitórios completos ao firmar contrato com novos clientes.",
  },
];

const galleryImages = [
  { src: refeitorio1, alt: "Refeitório Sanco - visão geral com logo Nutri Gourmet" },
  { src: refeitorio2, alt: "Refeitório Sanco - área de mesas e buffet" },
  { src: refeitorio3, alt: "Refeitório Sanco - ilha de buffet com plantas suspensas" },
  { src: cozinha, alt: "Cozinha industrial equipada" },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
            Nossos Serviços
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground max-w-2xl mx-auto">
            Soluções completas em alimentação corporativa
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-shadow group"
            >
              <div className="gradient-hero w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <s.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="mb-6">
          <p className="text-center text-muted-foreground text-sm mb-4">
            Refeitório sob medida — <strong className="text-foreground">Empresa Sanco</strong>
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
