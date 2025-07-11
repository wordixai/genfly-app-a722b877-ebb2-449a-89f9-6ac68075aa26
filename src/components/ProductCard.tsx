interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  isNew?: boolean;
}

const ProductCard = ({ title, price, image, isNew }: ProductCardProps) => {
  return (
    <div className="group relative">
      {/* Pop art frame effect */}
      <div className="bg-gradient-to-br from-pink-400 to-orange-400 p-4 transform hover:scale-105 transition-all duration-300 shadow-2xl border-8 border-black">
        <div className="bg-white p-4 border-4 border-black">
          <div className="aspect-square mb-4 overflow-hidden bg-gradient-to-br from-yellow-200 to-pink-200 relative">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
            
            {/* Comic effect overlay */}
            <div className="absolute inset-0 opacity-30 group-hover:opacity-0 transition-opacity">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                  backgroundSize: '8px 8px'
                }}
              />
            </div>
          </div>
          
          <h3 className="font-black text-lg text-black mb-2 transform group-hover:rotate-1 transition-transform">
            {title}
          </h3>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-black text-pink-600 transform group-hover:scale-110 transition-transform">
              {price}
            </span>
            
            <button className="bg-yellow-400 text-black px-4 py-2 rounded font-bold hover:bg-yellow-300 hover:scale-110 transition-all border-2 border-black shadow-lg">
              BUY!
            </button>
          </div>
        </div>
      </div>
      
      {/* New badge */}
      {isNew && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm transform rotate-12 shadow-lg border-2 border-white">
          NEW!
        </div>
      )}
      
      {/* Pop effect on hover */}
      <div className="absolute -top-4 -left-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-yellow-300 px-3 py-1 rounded-lg font-bold text-black transform -rotate-12 shadow-lg">
          POW!
        </div>
      </div>
    </div>
  );
};

export default ProductCard;