import motherChildReading from "@/assets/mother-child-reading.jpg";

const TestimonialSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header centralizado */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 sm:mb-6">
            4 Passos para Educar uma Criança
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Como a coleção <strong>"Memória & Oração"</strong> abarca todos os aspectos necessários para plantar sementes no coração das crianças.
          </p>
        </div>

        {/* Grid com imagem e cards CRER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-stretch">
          <div className="order-2 lg:order-1 flex">
            <img 
              src={motherChildReading} 
              alt="Mãe lendo livro da coleção Memória & Oração para sua criança"
              className="w-full h-full object-cover rounded-2xl sm:rounded-3xl shadow-strong"
            />
          </div>
          
          <div className="order-1 lg:order-2 flex flex-col justify-between">
            <div className="space-y-4 sm:space-y-5">
              <div className="bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">
                  <span className="text-sage font-bold">C</span> - Contemplar
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Apresentar o salmo de forma <strong>cativante</strong>. Quando a criança é encantada, o ato de ler se transforma em contemplação.
                </p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">
                  <span className="text-sage font-bold">R</span> - Recitar
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Salmos são <strong>poesias</strong>. Ao recitá-los, transmita a emoção do texto para que a criança sinta cada palavra.
                </p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">
                  <span className="text-sage font-bold">E</span> - Envolver
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Conectar o salmo com a <strong>vida da criança</strong>. Relacione o texto com experiências do dia a dia da família.
                </p>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">
                  <span className="text-sage font-bold">R</span> - Repetir
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Crianças adoram repetir o que as <strong>encanta</strong>. Quanto mais repetirem, mais profundo será o aprendizado.
                </p>
              </div>
            </div>

            {/* Conclusão alinhada à direita */}
            <div className="text-right mt-6 sm:mt-8">
              <blockquote className="text-base sm:text-lg italic text-sage">
                "Educar é plantar sementes no coração das crianças, para que colham frutos virtuosos na vida adulta."
                <footer className="text-sm text-muted-foreground mt-2">— Método CRER</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;