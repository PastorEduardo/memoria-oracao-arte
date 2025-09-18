import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const SpecialOfferSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-golden/20 via-sage/20 to-spiritual/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-golden/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-sage/10 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-spiritual/20 text-spiritual-foreground px-6 py-2 rounded-full text-sm font-medium mb-6">
            ✨ Oferta Especial
          </div>
          
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
            Toda a coleção Memoria & Oração
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-3xl text-muted-foreground line-through">R$ 90,86</span>
            <span className="text-6xl font-bold text-golden">R$ 37,97</span>
          </div>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            São 14 livros digitais ilustrados, prontos para imprimir e transformar sua devoção diária
          </p>
        </div>
        
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-strong border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">
                O que está incluído:
              </h3>
              <ul className="space-y-3">
                {[
                  "14 livros digitais em alta resolução",
                  "Ilustrações originais em aquarela",
                  "Textos bíblicos cuidadosamente selecionados",
                  "Arquivos PDF prontos para impressão",
                  "Formatos compatíveis com qualquer impressora",
                  "Acesso imediato após a compra"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-gradient-cta text-primary-foreground rounded-2xl p-8 text-center shadow-medium">
                <div className="text-4xl font-bold mb-2">58% OFF</div>
                <div className="text-lg opacity-90 mb-6">
                  Economize R$ 52,89
                </div>
                <Button 
                  size="lg" 
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-lg py-4 rounded-xl shadow-soft"
                >
                  Quero a coleção completa agora
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center border-t border-border/50 pt-8">
            <p className="text-sm text-muted-foreground">
              💳 Pagamento 100% seguro • 📱 Acesso imediato • 🎨 Qualidade profissional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;