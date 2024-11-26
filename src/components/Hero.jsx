import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#F94545] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
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
                  className="absolute -right-4 top-0 w-12 md:w-16 h-12 md:h-16 bg-white rounded-full blur-sm"
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
                  className="absolute -right-12 top-8 w-20 h-20 bg-white rounded-full blur-sm"
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
                {/* Cloud Effect 3 */}
                <motion.div
                  className="absolute right-20 -top-4 w-14 h-14 bg-white rounded-full blur-sm"
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
                {/* Cloud Effect 4 */}
                <motion.div
                  className="absolute right-8 top-12 w-12 h-12 bg-white rounded-full blur-sm"
                  animate={{ 
                    scale: [1, 1.25, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                />
                {/* Cloud Effect 5 */}
                <motion.div
                  className="absolute -right-8 -top-8 w-24 h-24 bg-white rounded-full blur-md"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Selamat datang di
                </h1>
                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  UMKM Jajanan Menyala
                </h1>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-lg md:text-xl text-black font-bold"
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
              className="pt-2 md:pt-4"
            >
              <motion.a
                href="#about"
                className="inline-block bg-[#9AE66E] hover:bg-[#8AD562] text-white 
                         px-6 md:px-8 py-2 rounded-full text-sm md:text-base font-medium 
                         transform transition-all duration-300
                         hover:shadow-lg w-full md:w-auto text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                About Us
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative aspect-[4/3] md:aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
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