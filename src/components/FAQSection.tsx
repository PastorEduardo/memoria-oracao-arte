import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Download, Printer, ShoppingCart, FileText, Palette } from "lucide-react";

const faqs = [
  {
    icon: FileText,
    question: "É livro físico ou digital?",
    answer: "São livros digitais em formato PDF de alta resolução, prontos para download imediato após a compra. Você pode imprimir quantas vezes quiser!"
  },
  {
    icon: Printer,
    question: "Posso imprimir em casa?",
    answer: "Sim! Todos os arquivos são especialmente preparados para impressão doméstica. Funcionam perfeitamente em impressoras jato de tinta ou laser, em papel A4 comum."
  },
  {
    icon: ShoppingCart,
    question: "Posso comprar individualmente?",
    answer: "Sim, cada livro pode ser adquirido separadamente por R$ 6,49. Mas na coleção completa você economiza 58% e paga apenas R$ 37,97 pelos 14 livros."
  },
  {
    icon: Download,
    question: "Como recebo os arquivos?",
    answer: "Após a confirmação do pagamento, você receberá um email com o link para download de todos os PDFs. O acesso é imediato e você pode baixar quantas vezes precisar."
  },
  {
    icon: Palette,
    question: "As ilustrações são originais?",
    answer: "Sim! Todas as capas foram ilustradas especialmente para esta coleção, usando técnicas tradicionais de aquarela com temática bíblica inspiradora."
  },
  {
    icon: HelpCircle,
    question: "Há garantia?",
    answer: "Oferecemos garantia de 30 dias. Se não ficar satisfeito com a qualidade dos materiais, devolvemos 100% do seu dinheiro."
  }
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre a coleção Memoria & Oração
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 px-6 py-2"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-golden to-sage rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-golden-foreground" />
                    </div>
                    <span className="text-lg font-semibold text-primary">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-16">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Entre em contato conosco
          </p>
          <div className="flex justify-center gap-4">
            <div className="w-2 h-2 bg-golden rounded-full" />
            <div className="w-2 h-2 bg-sage rounded-full" />
            <div className="w-2 h-2 bg-spiritual rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;