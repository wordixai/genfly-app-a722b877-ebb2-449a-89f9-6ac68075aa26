import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      title: "RETRO TEE",
      price: "$29",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      isNew: true
    },
    {
      title: "POP JACKET",
      price: "$89",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    },
    {
      title: "COMIC SHOES",
      price: "$59",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      isNew: true
    },
    {
      title: "BOOM BAG",
      price: "$39",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    },
    {
      title: "WOW HAT",
      price: "$19",
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=400&fit=crop",
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-yellow-100 to-pink-100 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #ff6b6b 4px, transparent 4px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-black mb-4 transform -rotate-1">
            FEATURED ITEMS
          </h2>
          <div className="bg-orange-400 text-white px-6 py-2 inline-block transform rotate-1 shadow-lg">
            <p className="font-bold">GRAB THEM BEFORE THEY'RE GONE!</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="group bg-pink-500 text-white px-12 py-4 rounded-lg font-black text-2xl transform hover:scale-110 transition-all duration-200 shadow-2xl border-4 border-black">
            <span className="group-hover:animate-bounce inline-block">SEE ALL!</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;