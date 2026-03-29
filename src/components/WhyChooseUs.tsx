import { ShieldCheck, ChefHat, Truck, TrendingUp } from "lucide-react";
import cozinha from "@/assets/cozinha-industrial.png";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Solidez",
    description: "Empresa estruturada com mais de 40 anos de atuação no mercado.",
  },
  {
    icon: ChefHat,
    title: "Experiência",
    description: "Expertise em refeições no local, transportadas e refeitórios sob medida.",
  },
  {
    icon: Truck,
    title: "Logística",
    description: "Entrega pontual com frota própria e responsabilidade com horários.",
  },
  {
    icon: TrendingUp,
    title: "Expansão",
    description: "Presença em todo o Estado de Santa Catarina, com mais de 20 clientes ativos.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
              Por que escolher a Nutri Gourmet?
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-10" />
            <div className="grid grid-cols-2 gap-5">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="bg-muted/60 border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors"
                >
                  <div className="gradient-hero w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <r.icon className="text-primary-foreground" size={22} />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-1">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={cozinha}
              alt="Cozinha industrial Nutri Gourmet"
              loading="lazy"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="font-heading font-bold text-white text-lg">Nossa Cozinha Industrial</p>
              <p className="text-white/80 text-sm">Estrutura completa e equipada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
