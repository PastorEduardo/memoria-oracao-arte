import readingScene from "@/assets/reading-scene.jpg";

const TestimonialSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={readingScene} 
              alt="Momento devocional com café e leitura"
              className="w-full rounded-2xl sm:rounded-3xl shadow-strong"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-6 sm:mb-8 px-2">
              Ideal para seu momento com Deus
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">
                  ✨ Momento de Oração
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Perfeitos para sua devoção pessoal matinal ou noturna, com <strong>PDFs imprimíveis</strong> que edificam o coração.
                </p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">
                  🏠 Célula e Grupos
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Ideais para compartilhar em células, grupos de oração ou estudos bíblicos em família.
                </p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">
                  📖 Escola Bíblica
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Excelente material de apoio para escolas bíblicas e ministérios de ensino.
                </p>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8">
              <blockquote className="text-base sm:text-lg italic text-sage border-l-4 border-sage pl-4 sm:pl-6">
                "Na minha meditação se acendeu fogo."
                <footer className="text-sm text-muted-foreground mt-2">— Salmo 39:3</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;