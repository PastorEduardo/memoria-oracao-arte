import { Card, CardContent } from "@/components/ui/card";
import { Book, Palette, Printer, Heart } from "lucide-react";
const BenefitsSection = () => {
  return (
<section className="py-16 sm:py-24 bg-background">
<div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
{/* Microfrase */}
<p className="text-sm sm:text-base text-golden font-medium mb-3 sm:mb-4">
Conteúdo inspirado para formar memórias de fé
</p>


{/* Headline */}
<h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 sm:mb-6 leading-tight">
Uma coleção completa para ensinar os fundamentos da fé cristã às crianças
</h2>


{/* Subheadline */}
<p className="text-lg sm:text-xl text-primary/80 mb-4 sm:mb-6 leading-relaxed">
São <strong>14 livros digitais ilustrados em aquarela</strong> — 12 Salmos,
a profecia de Isaías 53 e as Bem-Aventuranças de Mateus 5 — textos poéticos
que facilitam a memorização e enraízam a Palavra no coração.
</p>


{/* Texto de apoio */}
<p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
Esses textos bíblicos foram escolhidos por sua beleza literária e por
tratarem de temas centrais da fé cristã: Criação e Queda, Arrependimento
e Perdão, Regeneração e Vida Cristã, Promessas e Esperança futura.
</p>
</div>


{/* Divisor aquarela */}
<div className="mt-12 sm:mt-16 h-1 sm:h-2 bg-gradient-to-r from-sage via-golden to-spiritual opacity-30 rounded-full" />


{/* Título da vitrine */}
<div className="text-center mt-12 sm:mt-16 mb-8 sm:mb-12">
<h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary">
Conheça a coleção Memória & Oração
</h3>
</div>
</section>
)
}
export default BenefitsSection;
