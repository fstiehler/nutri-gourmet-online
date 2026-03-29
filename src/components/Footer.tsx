import logo from "@/assets/logo-nutrigourmet.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Nutri Gourmet" className="h-10 w-10 rounded-full" />
            <span className="font-heading text-lg font-bold text-primary-foreground">
              NutriGourmet
            </span>
          </div>
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Nutri Gourmet Restaurantes Empresariais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
