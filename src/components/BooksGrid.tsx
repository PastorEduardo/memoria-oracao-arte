import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import salmo100 from "@/assets/salmo-100.png";
import salmo51 from "@/assets/salmo-51.png";
import salmo125 from "@/assets/salmo-125.png";
import salmo24 from "@/assets/salmo-24.png";
import salmo133 from "@/assets/salmo-133.png";
import salmo121 from "@/assets/salmo-121.png";
import mateus5 from "@/assets/mateus-5.png";
import isaias53 from "@/assets/isaias-53.png";
import salmo19 from "@/assets/salmo-19.png";
import salmo23 from "@/assets/salmo-23.png";
import salmo32 from "@/assets/salmo-32.png";
import salmo110 from "@/assets/salmo-110.png";
import salmo1 from "@/assets/salmo-1.png";
import salmo145 from "@/assets/salmo-145.png";
const books = [{
  image: salmo100,
  title: "Salmo 100",
  subtitle: "Celebrai com Júbilo",
  reference: "Salmo 100",
  price: "R$ 6,49"
}, {
  image: salmo51,
  title: "Salmo 51",
  subtitle: "Coração Quebrantado",
  reference: "Salmo 51",
  price: "R$ 6,49"
}, {
  image: salmo125,
  title: "Salmo 125",
  subtitle: "O Monte Sião",
  reference: "Salmo 125",
  price: "R$ 6,49"
}, {
  image: salmo24,
  title: "Salmo 24",
  subtitle: "Tudo é do Senhor",
  reference: "Salmo 24",
  price: "R$ 6,49"
}, {
  image: salmo133,
  title: "Salmo 133",
  subtitle: "A Vida em Comunhão",
  reference: "Salmo 133",
  price: "R$ 6,49"
}, {
  image: salmo121,
  title: "Salmo 121",
  subtitle: "Meu Socorro",
  reference: "Salmo 121",
  price: "R$ 6,49"
}, {
  image: mateus5,
  title: "Mateus 5",
  subtitle: "As Bem-Aventuranças",
  reference: "Mateus 5",
  price: "R$ 6,49"
}, {
  image: isaias53,
  title: "Isaías 53",
  subtitle: "Fomos Sarados",
  reference: "Isaías 53",
  price: "R$ 6,49"
}, {
  image: salmo19,
  title: "Salmo 19",
  subtitle: "A Glória de Deus",
  reference: "Salmo 19",
  price: "R$ 6,49"
}, {
  image: salmo23,
  title: "Salmo 23",
  subtitle: "O Meu Pastor",
  reference: "Salmo 23",
  price: "R$ 6,49"
}, {
  image: salmo32,
  title: "Salmo 32",
  subtitle: "Pecadores Perdoados",
  reference: "Salmo 32",
  price: "R$ 6,49"
}, {
  image: salmo110,
  title: "Salmo 110",
  subtitle: "Domínio do Senhor",
  reference: "Salmo 110",
  price: "R$ 6,49"
}, {
  image: salmo1,
  title: "Salmo 1",
  subtitle: "Uma Árvore Plantada",
  reference: "Salmo 1",
  price: "R$ 6,49"
}, {
  image: salmo145,
  title: "Salmo 145",
  subtitle: "Todas as Gerações",
  reference: "Salmo 145",
  price: "R$ 6,49"
}];
const BooksGrid = () => {
  const whatsappMessage = encodeURIComponent("Olá! Quero adquirir a coleção completa Memoria & Oração por R$ 37,97!");
  const whatsappUrl = `https://wa.me/5563981471486?text=${whatsappMessage}`;
  const getIndividualWhatsappUrl = (bookTitle: string) => {
    const message = encodeURIComponent(`Olá! Quero adquirir o livro "${bookTitle}" por R$ 6,49!`);
    return `https://wa.me/5563981471486?text=${message}`;
  };
  return <section id="colecao" className="py-16 sm:py-24 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 sm:mb-6 px-2 max-w-4xl mx-auto">
  Uma coleção completa para ensinar os fundamentos da fé cristã às crianças
</h2>

<p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto px-2">
  Uma coleção completa de <strong>14 livros digitais em PDF</strong>. O textos foram escolhidos por sua beleza literária e por tratarem de temas centrais da fé cristã: Criação e Queda, Arrependimento e Perdão, Regeneração e Vida Cristã, Promessas e Esperança futura.
</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {books.map((book, index) => <Card key={index} className="group border-none shadow-soft hover:shadow-strong transition-all duration-500 transform hover:-translate-y-2 bg-card/90 backdrop-blur-sm overflow-hidden cursor-pointer">
              <a href={getIndividualWhatsappUrl(book.title)} target="_blank" rel="noopener noreferrer" className="block">
                <CardContent className="p-0">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={book.image} alt={`${book.title} - ${book.subtitle}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-2 sm:p-3 md:p-4">
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-primary mb-1">
                      {book.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block mb-1">
                      {book.subtitle}
                    </p>
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-sage font-medium mb-2">
                      <MessageCircle size={14} />
                      <span>fale conosco</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-golden">
                      {book.price}
                    </div>
                  </div>
                </CardContent>
              </a>
            </Card>)}
        </div>
        
        <div className="text-center">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-medium max-w-2xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 px-2">
              Adquira individualmente por <span className="text-primary font-semibold">R$ 6,49</span> cada
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-6 sm:mb-8 px-2">
              ou leve todos por apenas <span className="text-golden text-xl sm:text-2xl md:text-3xl">R$ 37,97</span>
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-xl shadow-medium hover:shadow-soft transition-all duration-300 w-full sm:w-auto min-h-[44px] sm:min-h-[48px]">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                Quero a coleção completa
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default BooksGrid;
