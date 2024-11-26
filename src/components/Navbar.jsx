import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import Logo from './Logo';

const menuItems = [
  { name: 'Beranda', href: '#home' },
  { name: 'Tentang', href: '#about' },
  { name: 'Menu', href: '#products' },
  { name: 'Galeri', href: '#gallery' },
  { name: 'Promo', href: '#promos' },
  { name: 'FAQ', href: '#faq' },
];

const whatsappMessage = encodeURIComponent(
  "Halo Jajanan Menyala! Saya ingin bertanya mengenai menu yang tersedia."
);

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/jajanan_menyala',
    icon: FaInstagram,
    hoverColor: 'hover:text-pink-500'
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@jajanan_menyala',
    icon: FaTiktok,
    hoverColor: 'hover:text-black'
  },
  {
    name: 'WhatsApp',
    href: `https://wa.me/6282130363881?text=${whatsappMessage}`,
    icon: FaWhatsapp,
    hoverColor: 'hover:text-green-500'
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-lg shadow-lg py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo dan Text */}
            <motion.a
              href="#home"
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Logo className={`w-8 h-8 ${isScrolled ? 'text-gray-900' : 'text-white'} transition-colors duration-300`} />
              <span className={`text-lg font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              } transition-colors duration-300`}>
                Jajanan Menyala
              </span>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Navigation Links */}
              <div className="flex space-x-6">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-300
                      ${isScrolled 
                        ? 'text-gray-900 hover:text-secondary' 
                        : 'text-white hover:text-primary'}`}
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              {/* Social Links dengan style baru */}
              <div className="flex items-center space-x-4 border-l pl-4 border-gray-200">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full bg-white/10 backdrop-blur-sm 
                              shadow-lg transition-all duration-300 
                              hover:shadow-xl ${social.hoverColor}
                              ${isScrolled ? 'bg-gray-100' : 'bg-white/20'}`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      backgroundColor: 'rgba(255, 255, 255, 0.3)' 
                    }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <social.icon className={`w-5 h-5 ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button dengan style baru */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg backdrop-blur-sm
                ${isScrolled 
                  ? 'bg-gray-100' 
                  : 'bg-white/20'}`}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className={`w-full h-0.5 block transition-transform origin-left
                    ${isScrolled ? 'bg-gray-900' : 'bg-white'}`}
                ></motion.span>
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`w-full h-0.5 block
                    ${isScrolled ? 'bg-gray-900' : 'bg-white'}`}
                ></motion.span>
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className={`w-full h-0.5 block transition-transform origin-left
                    ${isScrolled ? 'bg-gray-900' : 'bg-white'}`}
                ></motion.span>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-lg border-t mt-2"
            >
              <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="text-gray-900 hover:text-secondary font-medium py-2"
                      onClick={() => setIsOpen(false)}
                      whileHover={{ x: 10 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  <div className="flex space-x-6 pt-4 border-t">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-600 ${social.hoverColor}`}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Overlay for Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
} 