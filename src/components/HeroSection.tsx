import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import logoVertical from "@/assets/logo-vertical.svg";
import heroFamilyReading from "@/assets/hero-family-reading.png";
const HeroSection = () => {
  const whatsappMessage = encodeURIComponent("Olá! Tenho interesse na coleção Memoria & Oração. Gostaria de mais informações!");
  const whatsappUrl = `https://wa.me/5563981471486?text=${whatsappMessage}`;
  return <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: `url(${heroBackground})`
  }}>
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40 py-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto sm:px-6 px-[16px] py-0">
        {/* Logo */}
        <div className="mb-8 sm:mb-12 text-center py-[5px]">
          <img src={logoVertical} alt="Memoria & Oração" className="h-24 sm:h-28 md:h-32 lg:h-36 mx-auto" />
        </div>

        {/* Hero Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold bg-gradient-to-br from-primary via-golden to-spiritual bg-clip-text text-transparent leading-tight mb-4 sm:mb-6">
              Formação cristã dos seus filhos começa com a memorização das Escrituras
            </h1>
            
            {/* Subheadline */}
            <h2 className="text-lg sm:text-xl md:text-2xl text-primary/80 mb-4 sm:mb-6 font-medium leading-relaxed">
              A coleção Memória & Oração apoia pais cristãos no ensino das virtudes da fé, tornando a memorização bíblica simples, bela e significativa.
            </h2>
            
            {/* Text Body */}
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 leading-relaxed">
              São <strong>14 livros digitais em PDF</strong>, ilustrados em aquarela, prontos para imprimir em casa e usar no devocional da família — despertando nas crianças o amor pela Palavra de Deus.
            </p>
            
            {/* CTA Button */}
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-semibold rounded-2xl shadow-strong transition-all duration-300 hover:shadow-medium hover:scale-105 w-full sm:w-auto min-h-[44px] sm:min-h-[56px]">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                Quero a coleção completa por R$ 37,97
              </a>
            </Button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end items-start">
            <img src={heroFamilyReading} alt="Família cristã lendo juntos - Coleção Memória & Oração" className="w-full h-full object-cover rounded-2xl sm:rounded-3xl shadow-strong max-w-md lg:max-w-lg xl:max-w-xl" />
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-16 opacity-60">
          <div className="flex justify-center space-x-8">
            <div className="w-2 h-2 bg-golden rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-sage rounded-full animate-pulse delay-75" />
            <div className="w-2 h-2 bg-spiritual rounded-full animate-pulse delay-150" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;