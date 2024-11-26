import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/jajanan_menyala?igsh=MW91dWNxeGE1aWp5cA==',
    icon: FaInstagram,
    username: '@jajanan_menyala'
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@jajanan_menyala?_t=8riUwhu9hGa&_r=1',
    icon: FaTiktok,
    username: '@jajanan_menyala'
  }
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-400 via-rose-300 to-amber-300">
      {/* Background Pattern Overlay - Disederhanakan */}
      <div className="absolute inset-0">
        {/* Dark Gradient Overlay tanpa blur */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30" />
        
        {/* Pattern Overlay dengan opacity yang lebih rendah */}
        <div className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        />

        {/* Radial Gradient tanpa blur */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Logo/Brand Name dengan style lebih sederhana */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-relaxed">
              <span className="block text-white py-2">
                Jajanan
              </span>
              <span className="block text-white py-2">
                Menyala
              </span>
            </h1>

            {/* Subtitle dengan ukuran yang lebih proporsional */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative inline-block"
            >
              <span className="text-2xl md:text-4xl font-bold relative">
                <span className="text-white">
                  Cita Rasa Tradisional
                </span>
                <span className="ml-2 text-white">Modern</span>
              </span>
            </motion.div>
          </motion.div>
          
          {/* Deskripsi dengan ukuran yang lebih kecil dan tanpa blur */}
          <motion.p
            className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Menghadirkan jajanan tradisional Indonesia dengan sentuhan modern yang 
            mengutamakan kualitas dan kelezatan dalam setiap sajian
          </motion.p>
          
          {/* Buttons dengan ukuran yang lebih proporsional */}
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {/* CTA Button */}
            <motion.a
              href="#products"
              className="group relative overflow-hidden bg-white/20
                        px-6 py-3 rounded-full border border-white/30
                        font-medium text-base text-white
                        hover:bg-white/30 transition-all duration-300
                        flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Lihat Menu Kami</span>
              <motion.span
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.span>
            </motion.a>

            {/* Social Media Links dengan ukuran yang lebih kecil */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-3 py-2 rounded-full
                            bg-white/10 border border-white/20
                            hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 text-white" />
                  <span className="text-white text-sm">
                    {social.username}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator dengan ukuran yang lebih kecil */}
          <motion.div
            className="flex flex-col items-center gap-2 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.span 
              className="text-white/80 text-xs font-medium"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll untuk melihat menu
            </motion.span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg 
                className="w-5 h-5 text-white" 
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
          </motion.div>
        </div>
      </div>
    </section>
  );
} 