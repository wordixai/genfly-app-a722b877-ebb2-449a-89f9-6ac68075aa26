const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-pink-400 via-orange-400 to-yellow-300 py-20 px-6 relative overflow-hidden">
      {/* Comic dots pattern */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, #000 3px, transparent 3px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '20px 20px'
          }}
        />
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8">
          <h2 className="text-6xl md:text-8xl font-black text-white transform -rotate-2 drop-shadow-2xl mb-4">
            BOOM!
          </h2>
          <div className="bg-black text-white px-6 py-3 inline-block transform rotate-1 shadow-2xl">
            <p className="text-xl font-bold">EXPLOSIVE FASHION & ART</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
          <button className="group bg-yellow-400 text-black px-8 py-4 rounded-lg font-black text-xl transform hover:scale-110 hover:rotate-2 transition-all duration-200 shadow-2xl border-4 border-black">
            <span className="group-hover:animate-bounce inline-block">SHOP NOW!</span>
          </button>
          
          <button className="group bg-white text-pink-500 px-8 py-4 rounded-lg font-black text-xl transform hover:scale-110 hover:-rotate-2 transition-all duration-200 shadow-2xl border-4 border-pink-500">
            <span className="group-hover:animate-pulse inline-block">VIEW ART</span>
          </button>
        </div>
        
        {/* Speech bubble */}
        <div className="absolute top-10 right-10 transform rotate-12 hidden lg:block">
          <div className="bg-white p-4 rounded-lg shadow-lg border-4 border-black relative">
            <p className="text-black font-bold">WOW!</p>
            <div className="absolute bottom-[-10px] left-4 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent border-t-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;