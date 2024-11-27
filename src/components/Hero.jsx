import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#F94545] relative overflow-hidden px-4 sm:px-6">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-white/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-black/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="text-center md:text-left space-y-4 md:space-y-6 order-2 md:order-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Main Title with Multiple Cloud Effects */}
            <motion.div 
              className="relative"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative space-y-2">
                {/* Cloud Effects - Adjusted for mobile */}
                <motion.div
                  className="absolute -right-4 top-0 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-white rounded-full blur-sm"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 0.9, 0.7]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                {/* Cloud Effect 2 */}
                <motion.div
                  className="absolute -right-8 sm:-right-12 top-8 w-12 sm:w-20 h-12 sm:h-20 bg-white rounded-full blur-sm"
                  animate={{ 
                    scale: [1, 1.15, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                {/* Cloud Effect 3 - Hidden on mobile */}
                <motion.div
                  className="hidden sm:block absolute right-20 -top-4 w-14 h-14 bg-white rounded-full blur-sm"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.7, 0.5]
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                  Selamat datang di
                </h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                  UMKM Jajanan Menyala
                </h1>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-black font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              #Rasanya menyala bosku
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-4 sm:pt-6"
            >
              <motion.a
                href="#about"
                className="inline-block bg-[#9AE66E] hover:bg-[#8AD562] text-white 
                         px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-medium 
                         transform transition-all duration-300
                         hover:shadow-lg w-full sm:w-auto text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                About Us
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative order-1 md:order-2 mx-auto w-full max-w-md md:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <motion.img
                src="/images/gambar1.jpg"
                alt="Jajanan Menyala Showcase"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:hidden"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
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