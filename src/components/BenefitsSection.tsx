import { Card, CardContent } from "@/components/ui/card";
import { Book, Palette, Printer, Heart } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-section">
  return <section className="py-16 sm:py-24 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 sm:mb-6 px-2">
@@ -21,9 +19,7 @@ const BenefitsSection = () => {
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4 leading-tight px-1">
                Textos bíblicos cuidadosamente selecionados
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Salmos e passagens escolhidas para edificar sua vida espiritual
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Salmos e passagens escolhidas para laçar os fundamentos de uma fé sólida</p>
            </CardContent>
          </Card>

@@ -32,12 +28,8 @@ const BenefitsSection = () => {
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-golden to-sage rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-golden-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4 leading-tight px-1">
                Capas ilustradas em aquarela clássica
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Arte original inspirada nas paisagens bíblicas
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4 leading-tight px-1">Livros ilustrados em aquarela clássica</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Belas ilustrações para encantar e cativar a atenção das crianças. Sem acessos ou hi</p>
            </CardContent>
          </Card>

@@ -49,9 +41,7 @@ const BenefitsSection = () => {
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4 leading-tight px-1">
                Arquivos digitais prontos para imprimir
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Qualidade profissional para impressão doméstica
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Qualidade profissional para impressão doméstica. Você pode </p>
            </CardContent>
          </Card>

@@ -63,18 +53,14 @@ const BenefitsSection = () => {
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4 leading-tight px-1">
                Ideais para memorização e oração
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Perfeitos para seu momento devocional diário
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">Perfeitos para seu momento devocional diário em família. </p>
            </CardContent>
          </Card>
        </div>

        {/* Decorative watercolor strip */}
        <div className="mt-12 sm:mt-16 h-1 sm:h-2 bg-gradient-to-r from-sage via-golden to-spiritual opacity-30 rounded-full" />
      </div>
    </section>
  );
    </section>;
};

export default BenefitsSection;
