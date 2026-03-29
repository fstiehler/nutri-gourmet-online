import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import refeitorio1 from "@/assets/refeitorio-sanco-1.png";
import refeitorio3 from "@/assets/refeitorio-sanco-3.png";
import cozinha from "@/assets/cozinha-industrial.png";

const slides = [heroBg, refeitorio1, refeitorio3, cozinha];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Carousel background */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={current}
          src={slides[current]}
          alt="Nutri Gourmet"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-foreground/65" />

      <div className="relative container mx-auto px-4 py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4"
        >
          🍲 Restaurantes Empresariais
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto mb-6"
        >
          Participando do{" "}
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            sucesso
          </span>{" "}
          dos nossos clientes através das nossas refeições
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Há mais de 40 anos alimentando empresas em todo o Estado de Santa Catarina com qualidade, sabor e dedicação.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
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
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-primary w-8" : "bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
