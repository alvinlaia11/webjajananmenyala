import { FaInstagram, FaTiktok, FaMapMarkerAlt, FaClock, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/jajanan_menyala',
    icon: FaInstagram,
    color: 'hover:text-pink-500 hover:scale-110'
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@jajanan_menyala',
    icon: FaTiktok,
    color: 'hover:text-white hover:scale-110'
  }
];

const footerSections = [
  {
    title: 'Jam Buka',
    icon: FaClock,
    content: [
      'Senin - Jumat',
      '09:30 - 17:30 WIB',
      'Sabtu & Minggu',
      'Tutup'
    ]
  },
  {
    title: 'Lokasi',
    icon: FaMapMarkerAlt,
    content: [
      'Jln Dr. Mansyur, Merdeka,',
      'Kecamatan Medan Baru,',
      'Kota Medan, Sumatera Utara',
      '(Seberang Fakultas FK)'
    ]
  }
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/5 to-secondary/5 rotate-45"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Jajanan Menyala
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Menghadirkan cita rasa tradisional dengan sentuhan modern yang tak terlupakan
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Made with</span>
                <FaHeart className="text-secondary animate-pulse" />
                <span>in Indonesia</span>
              </div>
            </motion.div>

            {/* Info Sections */}
            {footerSections.map((section, index) => (
              <motion.div 
                key={section.title} 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <section.icon className="text-primary w-5 h-5" />
                  <h4 className="text-lg font-semibold">{section.title}</h4>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="text-gray-400 hover:text-primary transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Social Media Section */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold">Ikuti Kami</h4>
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl transition-all duration-300 ${item.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <item.icon />
                  </motion.a>
                ))}
              </div>
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4 rounded-lg">
                <p className="text-sm text-gray-300">
                  Dapatkan update terbaru dan promo menarik di social media kami
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <motion.div 
              className="flex flex-col md:flex-row justify-between items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Jajanan Menyala. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Kebijakan Privasi
                </a>
                <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Syarat & Ketentuan
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Just update the address section
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">Alamat:</h3>
        <p className="text-gray-700">
          Jln Dr. Mansyur, Merdeka, Kecamatan Medan Baru, Kota Medan, Sumatera Utara (Seberang Fakultas FK)
        </p>
      </div> */}
    </footer>
  );
} 