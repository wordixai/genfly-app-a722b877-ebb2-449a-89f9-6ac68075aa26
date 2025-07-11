import { ShoppingCart, Heart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-400 to-pink-500 px-6 py-4 relative overflow-hidden">
      {/* Comic dots pattern background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #fff 2px, transparent 2px)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px'
          }}
        />
      </div>
      
      <div className="container mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-black text-white transform -rotate-2 drop-shadow-lg">
            POP ART
          </h1>
          <div className="bg-yellow-300 px-2 py-1 transform rotate-12 shadow-lg">
            <span className="text-black font-bold text-sm">STORE!</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white font-bold hover:scale-110 transition-transform">
            HOME
          </a>
          <a href="#" className="text-white font-bold hover:scale-110 transition-transform">
            FASHION
          </a>
          <a href="#" className="text-white font-bold hover:scale-110 transition-transform">
            ART
          </a>
          <a href="#" className="text-white font-bold hover:scale-110 transition-transform">
            SALE
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="p-2 bg-white rounded-full hover:scale-110 transition-transform shadow-lg">
            <Heart className="w-5 h-5 text-pink-500" />
          </button>
          <button className="p-2 bg-white rounded-full hover:scale-110 transition-transform shadow-lg">
            <User className="w-5 h-5 text-orange-500" />
          </button>
          <button className="relative p-2 bg-white rounded-full hover:scale-110 transition-transform shadow-lg">
            <ShoppingCart className="w-5 h-5 text-pink-500" />
            <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;