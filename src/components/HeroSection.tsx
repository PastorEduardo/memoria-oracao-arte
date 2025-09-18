import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary leading-tight mb-6">
          Memoria & Oração
        </h1>
        <h2 className="text-xl md:text-2xl text-primary/80 mb-4 font-medium">
          Uma coleção para guardar a Palavra no coração
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Descubra a beleza dos Salmos e textos bíblicos em uma série de livros digitais 
          ilustrados em aquarela, prontos para imprimir e usar em sua devoção diária.
        </p>
        
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-2xl shadow-strong transition-all duration-300 hover:shadow-medium hover:scale-105"
        >
          Quero a coleção completa por R$ 37,97
        </Button>
        
        {/* Decorative elements */}
        <div className="mt-16 opacity-60">
          <div className="flex justify-center space-x-8">
            <div className="w-2 h-2 bg-golden rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-sage rounded-full animate-pulse delay-75" />
            <div className="w-2 h-2 bg-spiritual rounded-full animate-pulse delay-150" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;