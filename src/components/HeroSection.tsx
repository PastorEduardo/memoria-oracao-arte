import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import logoVertical from "@/assets/logo-vertical.svg";

const HeroSection = () => {
  const whatsappMessage = encodeURIComponent("Olá! Tenho interesse na coleção Memoria & Oração. Gostaria de mais informações!");
  const whatsappUrl = `https://wa.me/5563981471486?text=${whatsappMessage}`;

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Logo */}
        <div className="mb-8 sm:mb-12">
          <img 
            src={logoVertical} 
            alt="Memoria & Oração" 
            className="h-24 sm:h-28 md:h-32 lg:h-36 mx-auto"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold bg-gradient-to-br from-primary via-golden to-spiritual bg-clip-text text-transparent leading-tight mb-4 sm:mb-6">
          Memoria & Oração
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary/80 mb-4 sm:mb-6 font-medium px-2">
          Uma coleção para guardar a Palavra no coração
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
          Descubra a beleza dos Salmos e textos bíblicos em uma série de <strong>14 livros digitais em PDF</strong> 
          ilustrados em aquarela, prontos para imprimir em casa e usar em sua devoção diária.
        </p>
        
        <Button 
          size="lg" 
          asChild
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-semibold rounded-2xl shadow-strong transition-all duration-300 hover:shadow-medium hover:scale-105 w-full sm:w-auto min-h-[44px] sm:min-h-[56px]"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            Quero a coleção completa por R$ 37,97
          </a>
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