import { Card, CardContent } from "@/components/ui/card";
import { Book, Palette, Printer, Heart } from "lucide-react";

const benefits = [
  {
    icon: Book,
    title: "Textos bíblicos cuidadosamente selecionados",
    description: "Salmos e passagens escolhidas para edificar sua vida espiritual"
  },
  {
    icon: Palette,
    title: "Capas ilustradas em aquarela clássica",
    description: "Arte original inspirada nas paisagens bíblicas"
  },
  {
    icon: Printer,
    title: "Arquivos digitais prontos para imprimir",
    description: "Qualidade profissional para impressão doméstica"
  },
  {
    icon: Heart,
    title: "Ideais para memorização e oração",
    description: "Perfeitos para seu momento devocional diário"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 sm:mb-6 px-2">
            Por que esta coleção é especial?
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-golden mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="border-none shadow-soft hover:shadow-medium transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-golden to-sage rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-golden-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4 leading-tight px-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Decorative watercolor strip */}
        <div className="mt-12 sm:mt-16 h-1 sm:h-2 bg-gradient-to-r from-sage via-golden to-spiritual opacity-30 rounded-full" />
      </div>
    </section>
  );
};

export default BenefitsSection;