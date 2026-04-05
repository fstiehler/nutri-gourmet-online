import { motion } from "framer-motion";
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
    <section className="relative py-24 overflow-hidden" style={{ background: "hsl(25 60% 14%)" }}>
      {/* Decorative blurred circles */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full opacity-20" style={{ background: "hsl(30 90% 50%)", filter: "blur(100px)" }} />
      <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 rounded-full opacity-15" style={{ background: "hsl(35 95% 55%)", filter: "blur(120px)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: "hsl(20 80% 45%)", filter: "blur(150px)" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
          <motion.div
            className="md:max-w-xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
              style={{ background: "hsl(30 85% 50%)", color: "hsl(0 0% 100%)" }}
            >
              Nosso Grande Diferencial
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "hsl(40 100% 97%)" }}>
              Construímos o refeitório da sua empresa do zero
            </h2>
          </motion.div>
          <motion.p
            className="md:max-w-md text-lg leading-relaxed md:pt-16"
            style={{ color: "hsl(40 50% 75%)" }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ao fechar contrato com a Nutri Gourmet, você ganha muito mais do que refeições. Nós projetamos, construímos e gerenciamos o refeitório completo — sem custo extra de obra para você.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="rounded-2xl p-8 transition-colors"
              style={{ border: "1px solid hsl(40 50% 30%)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ borderColor: "hsl(30 85% 50%)", scale: 1.02 }}
            >
              <span className="font-heading text-5xl font-bold block mb-4" style={{ color: "hsl(30 85% 50%, 0.7)" }}>
                {step.num}
              </span>
              <h3 className="font-heading text-xl font-bold mb-3" style={{ color: "hsl(40 100% 97%)" }}>{step.title}</h3>
              <p className="leading-relaxed" style={{ color: "hsl(40 30% 60%)" }}>{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferencial;
