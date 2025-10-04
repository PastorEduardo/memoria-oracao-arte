import { Card, CardContent } from "@/components/ui/card";
import { Book, Palette, Printer, Heart } from "lucide-react";
const BenefitsSection = () => {
  return <section className="py-16 sm:py-24 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 sm:mb-6 px-2">
            Por que esta coleção é especial?
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-golden mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <Card className="border-none shadow-soft hover:shadow-medium transition-all duration-300 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6 md:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-golden to-sage rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Book className="w-6 h-6 sm:w-8 sm:h-8 text-golden-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4 leading-tight px-1">
                Textos bíblicos cuidadosamente selecionados
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Salmos e outros trechos bíblicos escolhidas para laçar os fundamentos de uma fé sólida.</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-soft hover:shadow-medium transition-all duration-300 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6 md:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-golden to-sage rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-golden-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4 leading-tight px-1">Livros ilustrados em belíssimas aquarelas clássica</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Belas ilustrações para encantar e cativar a atenção das crianças. Sem acessos ou hi</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-soft hover:shadow-medium transition-all duration-300 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6 md:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-golden to-sage rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Printer className="w-6 h-6 sm:w-8 sm:h-8 text-golden-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4 leading-tight px-1">Arquivos digitais prontos para impressão caseira</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Qualidade profissional para impressão doméstica. Você pode </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-soft hover:shadow-medium transition-all duration-300 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6 md:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-golden to-sage rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-golden-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4 leading-tight px-1">
                Ideais para memorização e oração
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Perfeitos para seu momento devocional diário em família. </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Decorative watercolor strip */}
        <div className="mt-12 sm:mt-16 h-1 sm:h-2 bg-gradient-to-r from-sage via-golden to-spiritual opacity-30 rounded-full" />
      </div>
    </section>;
};
export default BenefitsSection;