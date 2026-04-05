import refeitorio1 from "@/assets/refeitorio-sanco-1.png";
import refeitorio2 from "@/assets/refeitorio-sanco-2.png";
import refeitorio3 from "@/assets/refeitorio-sanco-3.png";
import refeitorio4 from "@/assets/refeitorio-sanco-4.png";
import refeitorio5 from "@/assets/refeitorio-sanco-5.png";
import refeitorio6 from "@/assets/refeitorio-sanco-6.png";
import cozinha from "@/assets/cozinha-industrial.png";

const NossosEspacos = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block border border-primary text-primary text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-5">
            Nossos Espaços
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ambientes que inspiram
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada refeitório é projetado e construído pela Nutri Gourmet, com identidade única para cada cliente.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {/* Large left */}
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
            <img
              src={refeitorio1}
              alt="Refeitório com buffet e mesas"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Top middle */}
          <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden relative group">
            <img
              src={refeitorio4}
              alt="Espaço amplo e confortável"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent p-4">
              <p className="text-background text-sm font-medium">Espaço amplo e confortável</p>
            </div>
          </div>

          {/* Top right */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
            <img
              src={refeitorio2}
              alt="Área de buffet decorada"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Right bottom */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
            <img
              src={refeitorio3}
              alt="Ilha de buffet com plantas"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Bottom row */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
            <img
              src={refeitorio6}
              alt="Visão geral do refeitório"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
            <img
              src={refeitorio5}
              alt="Painel decorativo e mesas"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden relative group">
            <img
              src={cozinha}
              alt="Cozinha industrial equipada"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent p-4">
              <p className="text-background text-sm font-medium">Cozinha industrial completa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NossosEspacos;
