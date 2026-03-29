import aboutImg from "@/assets/about-img.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="gradient-warm absolute -inset-4 rounded-2xl opacity-20 blur-2xl" />
            <img
              src={aboutImg}
              alt="Chef preparando refeições"
              loading="lazy"
              width={800}
              height={600}
              className="relative rounded-2xl shadow-elevated w-full object-cover aspect-[4/3]"
            />
          </div>
          <div>
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
              Nossa História
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Mais de 40 anos de tradição e sabor
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fundada por <strong className="text-foreground">Declotildes Villani</strong>, a Nutri Gourmet
              nasceu com o propósito de oferecer refeições de qualidade para o ambiente corporativo.
              Hoje, sob a liderança do CEO <strong className="text-foreground">Fernando Villani</strong>,
              a empresa segue sua trajetória de excelência.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Com sede em Itajaí/SC, atuamos em todo o Estado de Santa Catarina,
              levando alimentação saudável e saborosa para empresas que valorizam
              o bem-estar dos seus colaboradores.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "40+", label: "Anos de mercado" },
                { number: "20+", label: "Clientes ativos" },
                { number: "SC", label: "Todo o estado" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-3xl font-bold text-primary">{stat.number}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
