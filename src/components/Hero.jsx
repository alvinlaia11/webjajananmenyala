import { motion } from 'framer-motion';
import { FaArrowRight, FaUtensils, FaMotorcycle } from 'react-icons/fa';

export default function Hero({ onOrderClick }) {
  return (
    <section className="min-h-screen flex items-center bg-[#990808] relative overflow-hidden px-4 sm:px-6">
      {/* Spacer untuk header */}
      <div className="absolute top-0 left-0 w-full h-24 sm:h-20" />

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-white/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-black/10 rounded-full filter blur-3xl animate-pulse" />
        {/* Added decorative patterns */}
        <div className="absolute inset-0 bg-[url('/patterns/noise.png')] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto w-full pt-32 sm:pt-24 md:pt-32 pb-12 md:pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Enhanced Text Content */}
          <motion.div 
            className="text-center md:text-left space-y-6 md:space-y-8 order-2 md:order-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Added Pre-title badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                🔥 Kuliner Kekinian Medan
              </span>
            </motion.div>

            {/* Main Title with enhanced styling */}
            <div className="space-y-4">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Selamat datang di
                <span className="block mt-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  UMKM Jajanan Menyala
                </span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-white/80 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Nikmati sensasi kuliner yang memanjakan lidah dengan cita rasa yang menyala-nyala
              </motion.p>
            </div>

            {/* Enhanced Tagline */}
            <motion.div
              className="flex items-center justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-xl md:text-2xl font-bold text-white">
                #RasanyaMenyalaBosku
              </span>
              <div className="h-8 w-0.5 bg-white/20 rounded-full" />
              <div className="animate-bounce">
                <FaUtensils className="w-6 h-6 text-yellow-400" />
              </div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#about"
                className="group flex items-center gap-2 bg-[#9AE66E] hover:bg-[#8AD562] 
                         px-8 py-4 rounded-full text-base font-semibold text-white
                         transform transition-all duration-300 hover:shadow-lg
                         w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Jelajahi Menu
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                onClick={(e) => {
                  e.preventDefault();
                  onOrderClick();
                }}
                className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 
                         backdrop-blur-sm px-8 py-4 rounded-full text-base font-semibold 
                         text-white transform transition-all duration-300
                         w-full sm:w-auto justify-center border border-white/20
                         cursor-pointer select-none"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaMotorcycle className="w-4 h-4" />
                Pesan Sekarang
              </motion.a>
            </motion.div>

            {/* Added Features Badges */}
            <motion.div 
              className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {['Halal', 'Fresh Ingredients', 'Fast Delivery'].map((feature, index) => (
                <div 
                  key={feature}
                  className="bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full
                           text-sm text-white/80 border border-white/10"
                >
                  {feature}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Image Section with Multiple Images */}
          <motion.div
            className="relative order-1 md:order-2 mx-auto w-full max-w-lg md:max-w-none px-4 sm:px-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative flex gap-4">
              {/* Image 1 - Large Image (Left) */}
              <motion.div 
                className="w-[60%] relative aspect-square rounded-3xl overflow-hidden shadow-xl
                           border-4 border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/images/gambar3.png"
                  alt="Jajanan Menyala Showcase 1"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  style={{ objectPosition: 'center center' }}
                />
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm 
                              px-4 py-2 rounded-full shadow-lg">
                  <span className="text-[#990808] font-semibold">Best Seller 🌟</span>
                </div>
              </motion.div>

              {/* Right Side Images Container */}
              <div className="w-[40%] flex flex-col justify-between">
                {/* Image 2 - Top Right (Offset to right) */}
                <motion.div 
                  className="relative aspect-square w-full ml-auto rounded-3xl overflow-hidden shadow-xl
                             border-4 border-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <img
                    src="/images/gambar4.png"
                    alt="Jajanan Menyala Showcase 2"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: 'center center' }}
                  />
                </motion.div>

                {/* Image 3 - Bottom Right */}
                <motion.div 
                  className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-xl
                             border-4 border-white/10 backdrop-blur-sm mt-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <img
                    src="/images/gambar1.png"
                    alt="Jajanan Menyala Showcase 3"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: 'center center' }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400/20 
                              rounded-full blur-2xl animate-pulse" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-400/20 
                              rounded-full blur-2xl animate-pulse" />
          </motion.div>
        </div>
      </div>

      {/* Enhanced Mobile Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:hidden
                   flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-white/60 text-sm">Scroll untuk melihat</span>
        <svg 
          className="w-6 h-6 text-white/60" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </motion.div>
    </section>
  );
} 