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
      logo: 'https://seeklogo.com/images/G/gofood-logo-0581DE183D-seeklogo.com.png',
      link: 'https://gofood.link/u/qDNvb',
      bgColor: 'bg-green-500'
    },
    {
      name: 'GrabFood',
      logo: 'https://seeklogo.com/images/G/grab-food-logo-5B12FDE513-seeklogo.com.png',
      link: 'https://r.grab.com/g/6-20241126_201928_AA6F38DB26134671AB24860120475FFB_MEXMPS-6-C6MKRUETA4NWKE',
      bgColor: 'bg-green-600'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!isBalloonClosed && window.scrollY > 400) {
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
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      {/* Chat Balloon */}
      <AnimatePresence>
        {showBalloon && !isMenuOpen && !isBalloonClosed && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="relative bg-white rounded-2xl shadow-xl p-4 max-w-[280px] mb-4"
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
              <div className="flex justify-between items-center">
                <button
                  onClick={() => {
                    setShowBalloon(false);
                    setIsMenuOpen(true);
                  }}
                  className="text-xs font-medium text-red-500 hover:text-red-600
                             transition-colors duration-200 flex items-center gap-1"
                >
                  Pesan Sekarang
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
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
                          hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <img 
                  src={option.logo} 
                  alt={option.name}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-sm font-medium text-gray-700">
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
                        hover:bg-green-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaWhatsapp className="w-6 h-6 text-white" />
              <span className="text-sm font-medium text-white">Chat WhatsApp</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Menu Toggle Button */}
      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300
                   ${isMenuOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary/90'}`}
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