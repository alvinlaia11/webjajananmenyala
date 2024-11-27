import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaMotorcycle, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function FloatingButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBalloon, setShowBalloon] = useState(false);
  const [isBalloonClosed, setIsBalloonClosed] = useState(false);
  
  const whatsappMessage = encodeURIComponent(
    "Halo Jajanan Menyala! Saya ingin bertanya mengenai menu yang tersedia."
  );

  const deliveryOptions = [
    {
      name: 'GoFood',
      logo: 'https://seduhteh.wordpress.com/wp-content/uploads/2019/11/logo-gofood-baru.png',
      link: 'https://gofood.link/u/qDNvb',
      bgColor: 'bg-green-500'
    },
    {
      name: 'GrabFood',
      logo: 'https://seduhteh.wordpress.com/wp-content/uploads/2019/11/grabfood-vector-logo.png',
      link: 'https://r.grab.com/g/6-20241126_201928_AA6F38DB26134671AB24860120475FFB_MEXMPS-6-C6MKRUETA4NWKE',
      bgColor: 'bg-green-600'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!isBalloonClosed && window.scrollY > 300) {
        setShowBalloon(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBalloonClosed]);

  const handleCloseBalloon = () => {
    setShowBalloon(false);
    setIsBalloonClosed(true);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col items-end gap-4 z-50">
      {/* Chat Balloon */}
      <AnimatePresence>
        {showBalloon && !isMenuOpen && !isBalloonClosed && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="relative bg-white rounded-2xl shadow-xl p-4 max-w-[280px] sm:max-w-[320px] mb-4"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseBalloon}
              className="absolute -top-2 -right-2 bg-gray-100 rounded-full p-1
                         hover:bg-gray-200 transition-colors duration-200"
            >
              <FaTimes className="w-4 h-4 text-gray-500" />
            </button>

            {/* Chat Content */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-900">
                Pesan Sekarang! 🚀
              </p>
              <p className="text-xs text-gray-600">
                Nikmati menu spesial kami melalui GoFood atau GrabFood. Klik tombol di bawah untuk memesan.
              </p>
              <button
                onClick={() => {
                  setShowBalloon(false);
                  setIsMenuOpen(true);
                }}
                className="text-xs font-medium text-[#F94545] hover:text-[#E03B3B]
                           transition-colors duration-200 flex items-center gap-1"
              >
                Pesan Sekarang
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Chat Tail */}
            <div className="absolute -bottom-2 right-12 w-4 h-4 bg-white transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            className="flex flex-col gap-3 mb-2"
          >
            {/* Delivery Options */}
            {deliveryOptions.map((option, index) => (
              <motion.a
                key={option.name}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg
                          hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
                          w-full sm:w-auto"
              >
                <img 
                  src={option.logo} 
                  alt={option.name}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  Pesan di {option.name}
                </span>
              </motion.a>
            ))}

            {/* WhatsApp Button */}
            <motion.a
              href={`https://wa.me/6282130363881?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 bg-green-500 px-4 py-2 rounded-full shadow-lg
                        hover:bg-green-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
                        w-full sm:w-auto"
            >
              <FaWhatsapp className="w-6 h-6 text-white" />
              <span className="text-sm font-medium text-white whitespace-nowrap">Chat WhatsApp</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                   ${isMenuOpen ? 'bg-[#F94545] hover:bg-[#E03B3B]' : 'bg-[#9AE66E] hover:bg-[#8AD562]'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMenuOpen ? (
          <FaTimes className="w-6 h-6 text-white" />
        ) : (
          <FaMotorcycle className="w-6 h-6 text-gray-900" />
        )}
      </motion.button>

      {/* Background Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            style={{ zIndex: -1 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
} 