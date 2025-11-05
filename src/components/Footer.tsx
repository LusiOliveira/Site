import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Instituto Emanuel Rei Davi</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Instituição sem fins lucrativos dedicada à assistência de famílias em situação de vulnerabilidade social no Amazonas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="/galeria" className="text-muted-foreground hover:text-primary transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="/noticias" className="text-muted-foreground hover:text-primary transition-colors">
                  Notícias
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Amazonas, Brasil</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:contato@ierd.org.br" className="text-muted-foreground hover:text-primary transition-colors">
                  contato@ierd.org.br
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+55" className="text-muted-foreground hover:text-primary transition-colors">
                  (92) XXXX-XXXX
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Instituto Emanuel Rei Davi - IERD. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
