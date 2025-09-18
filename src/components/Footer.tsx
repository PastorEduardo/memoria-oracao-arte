import logoHorizontal from "@/assets/logo-horizontal.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <img 
              src={logoHorizontal} 
              alt="Memoria & Oração Logo" 
              className="h-16 md:h-20 filter brightness-0 invert"
            />
          </div>
          
          <div className="max-w-2xl mx-auto mb-8">
            <blockquote className="text-xl md:text-2xl italic font-light leading-relaxed mb-4">
              "Guardo no coração as tuas palavras, para não pecar contra ti."
            </blockquote>
            <footer className="text-primary-foreground/80">
              — Salmo 119:11
            </footer>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-4">Coleção</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>14 Livros Digitais</li>
              <li>Ilustrações em Aquarela</li>
              <li>Textos Bíblicos</li>
              <li>Qualidade Premium</li>
            </ul>
          </div>
          
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-4">Formato</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>PDF Alta Resolução</li>
              <li>Pronto para Impressão</li>
              <li>Download Imediato</li>
              <li>Uso Ilimitado</li>
            </ul>
          </div>
          
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-4">Garantia</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>30 Dias</li>
              <li>100% do Dinheiro de Volta</li>
              <li>Suporte Dedicado</li>
              <li>Satisfação Garantida</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>© 2024 Memoria & Oração. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative watercolor bottom */}
      <div className="h-4 bg-gradient-to-r from-golden/30 via-sage/30 to-spiritual/30" />
    </footer>
  );
};

export default Footer;