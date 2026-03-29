import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
            Contato
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Entre em contato conosco
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="gradient-hero w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary-foreground" size={22} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  Rua Hildo Silva, 228<br />
                  Bairro Barra do Rio<br />
                  Itajaí - SC
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="gradient-hero w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary-foreground" size={22} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Telefone</h3>
                <p className="text-muted-foreground">(47) 3348-0000</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="gradient-hero w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary-foreground" size={22} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">E-mail</h3>
                <p className="text-muted-foreground">contato@nutrigourmet.com.br</p>
              </div>
            </div>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full px-5 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full px-5 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <textarea
              rows={4}
              placeholder="Sua mensagem"
              className="w-full px-5 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <button
              type="submit"
              className="gradient-hero text-primary-foreground w-full py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
