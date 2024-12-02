import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaMotorcycle, FaTimes, FaInstagram, FaTiktok } from 'react-icons/fa';
import { useState } from 'react';

const deliveryOptions = [
  {
    name: 'GoFood',
    logo: 'https://seduhteh.wordpress.com/wp-content/uploads/2019/11/logo-gofood-baru.png',
    description: 'Pesan melalui GoFood',
    link: 'https://gofood.link/u/qDNvb',
    bgColor: 'bg-green-500'
  },
  {
    name: 'GrabFood',
    logo: 'https://seduhteh.wordpress.com/wp-content/uploads/2019/11/grabfood-vector-logo.png',
    description: 'Pesan melalui Grab Food',
    link: 'https://r.grab.com/g/6-20241126_201928_AA6F38DB26134671AB24860120475FFB_MEXMPS-6-C6MKRUETA4NWKE',
    bgColor: 'bg-green-600'
  }
];

const whatsappMessage = encodeURIComponent(
  "Halo Jajanan Menyala! Saya ingin bertanya mengenai menu yang tersedia."
);

const socialLinks = [
  {
    name: 'Instagram',
    icon: FaInstagram,
    username: '@jajanan_menyala',
    link: 'https://instagram.com/jajanan_menyala',
    color: 'text-pink-500'
  },
  {
    name: 'TikTok',
    icon: FaTiktok,
    username: '@jajanan_menyala',
    link: 'https://tiktok.com/@jajanan_menyala',
    color: 'text-black'
  },
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    username: '+62 821-3036-3881',
    link: `https://wa.me/6282130363881?text=${whatsappMessage}`,
    color: 'text-green-500'
  }
];

export default function CTA({ isModalOpen, setIsModalOpen }) {
  return (
    <>
      <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Mencoba Menu Kami?
            </h2>
            <p className="text-xl mb-12 text-white/90">
              Kunjungi outlet kami atau pesan melalui platform delivery favoritmu
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <motion.a
                href={`https://wa.me/6282130363881?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-lg
                           hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="w-6 h-6 text-green-500" />
                <span>Chat WhatsApp</span>
              </motion.a>

              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-black/25 text-white px-8 py-3 rounded-full font-bold text-lg
                           hover:bg-black/30 backdrop-blur-sm transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaMotorcycle className="w-6 h-6" />
                <span>Pesan Delivery</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Delivery Options Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-6 max-w-lg w-full relative"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pilih Cara Pesan</h3>
                <p className="text-gray-600">Pilih platform delivery favoritmu</p>
              </div>

              {/* Delivery Options */}
              <div className="grid gap-4 mb-8">
                {deliveryOptions.map((option) => (
                  <motion.a
                    key={option.name}
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img
                      src={option.logo}
                      alt={option.name}
                      className="w-24 h-12 object-contain"
                    />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900">{option.name}</h4>
                      <p className="text-sm text-gray-600">{option.description}</p>
                    </div>
                    <motion.div
                      className="ml-auto"
                      whileHover={{ x: 5 }}
                    >
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </motion.a>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="border-t pt-6">
                <p className="text-center text-sm text-gray-600 mb-4">Atau ikuti kami di sosial media</p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 ${social.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 