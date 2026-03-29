import { UtensilsCrossed, Truck, Building2 } from "lucide-react";
import servicesImg from "@/assets/services-img.jpg";

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

        <div className="rounded-2xl overflow-hidden shadow-elevated">
          <img
            src={servicesImg}
            alt="Restaurante corporativo moderno"
            loading="lazy"
            width={800}
            height={600}
            className="w-full h-72 md:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
