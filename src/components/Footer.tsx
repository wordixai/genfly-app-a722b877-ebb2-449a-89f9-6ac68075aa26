const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 relative overflow-hidden">
      {/* Comic dots pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #ff6b6b 2px, transparent 2px)`,
            backgroundSize: '30px 30px',
            backgroundPosition: '15px 15px'
          }}
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-black mb-4 transform -rotate-1 text-yellow-400">
              POP ART STORE
            </h3>
            <p className="text-gray-300 mb-4">
              The most explosive fashion and art store in the universe!
            </p>
            <div className="bg-pink-500 text-white px-4 py-2 inline-block transform rotate-2 shadow-lg">
              <span className="font-bold">BOOM!</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-orange-400">SHOP</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Fashion</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Art Prints</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-orange-400">INFO</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Returns</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-orange-400">FOLLOW US</h4>
            <div className="flex space-x-4 mb-4">
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="font-bold">@</span>
              </div>
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <span className="font-bold">in</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-2 inline-block transform -rotate-1 shadow-lg">
              <span className="font-bold">STAY TUNED!</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Pop Art Store. All rights reserved. Made with 💥 and lots of colors!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;