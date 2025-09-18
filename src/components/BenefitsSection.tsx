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
    <section className="py-24 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Por que esta coleção é especial?
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="border-none shadow-soft hover:shadow-medium transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-golden to-sage rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-golden-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Decorative watercolor strip */}
        <div className="mt-16 h-2 bg-gradient-to-r from-sage via-golden to-spiritual opacity-30 rounded-full" />
      </div>
    </section>
  );
};

export default BenefitsSection;