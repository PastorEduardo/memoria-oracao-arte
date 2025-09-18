import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import salmo100 from "@/assets/salmo-100.png";
import salmo51 from "@/assets/salmo-51.png";
import salmo125 from "@/assets/salmo-125.png";
import salmo24 from "@/assets/salmo-24.png";
import salmo133 from "@/assets/salmo-133.png";
import salmo121 from "@/assets/salmo-121.png";

const books = [
  {
    image: salmo100,
    title: "Salmo 100",
    subtitle: "Celebrai com Júbilo",
    reference: "Salmo 100"
  },
  {
    image: salmo51,
    title: "Salmo 51",
    subtitle: "Coração Quebrantado",
    reference: "Salmo 51"
  },
  {
    image: salmo125,
    title: "Salmo 125",
    subtitle: "O Monte Sião",
    reference: "Salmo 125"
  },
  {
    image: salmo24,
    title: "Salmo 24",
    subtitle: "Tudo é do Senhor",
    reference: "Salmo 24"
  },
  {
    image: salmo133,
    title: "Salmo 133",
    subtitle: "A Vida em Comunhão",
    reference: "Salmo 133"
  },
  {
    image: salmo121,
    title: "Salmo 121",
    subtitle: "Meu Socorro",
    reference: "Salmo 121"
  }
];

const BooksGrid = () => {
  const whatsappMessage = encodeURIComponent("Olá! Quero adquirir a coleção completa Memoria & Oração por R$ 37,97!");
  const whatsappUrl = `https://wa.me/5563981471486?text=${whatsappMessage}`;

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 sm:mb-6 px-2">
            O que você vai receber
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Uma coleção completa de <strong>14 livros digitais em PDF</strong>, cada um focado em um Salmo específico
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {books.map((book, index) => (
            <Card key={index} className="group border-none shadow-soft hover:shadow-strong transition-all duration-500 transform hover:-translate-y-2 bg-card/90 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={book.image} 
                    alt={`${book.title} - ${book.subtitle}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2 sm:p-4 lg:p-6">
                  <h3 className="text-sm sm:text-base lg:text-xl font-semibold text-primary mb-1 sm:mb-2">
                    {book.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-lg text-muted-foreground hidden sm:block">
                    {book.subtitle}
                  </p>
                  <div className="mt-2 sm:mt-4 text-xs sm:text-sm text-sage font-medium">
                    {book.reference}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-medium max-w-2xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 px-2">
              Adquira individualmente por <span className="text-primary font-semibold">R$ 6,49</span> cada
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-6 sm:mb-8 px-2">
              ou leve todos por apenas <span className="text-golden text-xl sm:text-2xl md:text-3xl">R$ 37,97</span>
            </p>
            <Button 
              size="lg" 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-medium hover:shadow-soft transition-all duration-300 w-full sm:w-auto"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Quero a coleção completa
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksGrid;