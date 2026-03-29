import { useState } from "react";
import { UtensilsCrossed, ChefHat, Coffee, Sandwich, ChevronUp, ChevronDown } from "lucide-react";

const menuItems = [
  {
    icon: UtensilsCrossed,
    title: "Marmitas",
    description: "Refeições individuais padronizadas e balanceadas, ideais para empresas que buscam praticidade.",
  },
  {
    icon: ChefHat,
    title: "Refeições Prontas (Buffet)",
    description: "Buffet completo com variedade de pratos quentes, saladas e sobremesas servidos no local.",
  },
  {
    icon: Coffee,
    title: "Coffees",
    description: "Coffee breaks corporativos com opções doces e salgadas para eventos e reuniões.",
  },
  {
    icon: Sandwich,
    title: "Lanches",
    description: "Lanches práticos e nutritivos para intervalos e pausas durante o expediente.",
  },
];

const MenuAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-elevated p-8 md:p-12">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-2">
            Nossos Serviços
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-10" />

          <div className="divide-y divide-border">
            {menuItems.map((item, i) => {
              const isOpen = openIndex === i;
              const Icon = item.icon;
              const Arrow = isOpen ? ChevronUp : ChevronDown;

              return (
                <div key={item.title} className="py-5">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center gap-4 text-left group"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen
                          ? "gradient-hero"
                          : "bg-muted"
                      }`}
                    >
                      <Icon
                        size={20}
                        className={isOpen ? "text-primary-foreground" : "text-muted-foreground"}
                      />
                    </div>
                    <span
                      className={`font-heading font-bold text-lg flex-1 transition-colors ${
                        isOpen ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.title}
                    </span>
                    <Arrow size={20} className="text-primary" />
                  </button>
                  {isOpen && (
                    <p className="text-muted-foreground mt-3 ml-14 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuAccordion;
