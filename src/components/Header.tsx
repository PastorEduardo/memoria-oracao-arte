import logoHorizontal from "@/assets/logo-horizontal.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center">
        <img
          src={logoHorizontal}
          alt="Memoria & Oração"
          className="h-8 sm:h-10 md:h-12"
        />
      </div>
    </header>
  );
};

export default Header;
