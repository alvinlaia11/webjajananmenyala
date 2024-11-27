import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';
import { SiGrab, SiGojek } from 'react-icons/si';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-[#F94545] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Maps Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="w-full h-[450px] rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.3586687835493!2d98.64884767490577!3d3.567522551253095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312fdb328d4e19%3A0x2472c8d5da4a07c6!2sJl.%20Dr.%20Mansyur%2C%20Kota%20Medan%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1709612345678!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Description Section - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                Terimakasih telah memilih Jajanan Menyala sebagai destinasi kuliner Anda! Kami selalu siap mendengar masukan, pertanyaan, atau bahkan sekadar cerita tentang pengalaman Anda menikmati hidangan kami.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                Hubungi kami untuk pesanan, kerja sama, atau sekadar menyapa karena di Jajanan Menyala, Anda adalah bagian dari perjalanan kami yang penuh warna. Mari terus menciptakan momen yang menyala bersama!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Info Section - Below Maps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 p-8 rounded-2xl">
          {/* Address Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[#F94545] rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900">Alamat</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed pl-4 border-l-2 border-gray-200">
              Jln Dr. Mansyur, Merdeka, Kecamatan Medan Baru, Kota Medan, Sumatera Utara (Seberang Fakultas FK)
            </p>
          </motion.div>

          {/* Find Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[#F94545] rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900">Find Us</h3>
            </div>
            <div className="grid grid-cols-3 gap-6 pl-4">
              <a href="https://wa.me/6282130363881" 
                 className="flex items-center gap-3 text-gray-700 hover:text-green-500 transition-all duration-300 transform hover:-translate-y-1">
                <FaWhatsapp className="w-8 h-8" />
                <span className="text-lg font-medium">WA</span>
              </a>
              <a href="https://instagram.com/jajanan_menyala" 
                 className="flex items-center gap-3 text-gray-700 hover:text-pink-500 transition-all duration-300 transform hover:-translate-y-1">
                <FaInstagram className="w-8 h-8" />
                <span className="text-lg font-medium">IG</span>
              </a>
              <a href="https://tiktok.com/@jajanan_menyala" 
                 className="flex items-center gap-3 text-gray-700 hover:text-black transition-all duration-300 transform hover:-translate-y-1">
                <FaTiktok className="w-8 h-8" />
                <span className="text-lg font-medium">TikTok</span>
              </a>
              <a href="https://gofood.link/u/qDNvb" 
                 className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-all duration-300 transform hover:-translate-y-1">
                <SiGojek className="w-8 h-8" />
                <span className="text-lg font-medium">GoJek</span>
              </a>
              <a href="https://r.grab.com/g/6-20241126_201928_AA6F38DB26134671AB24860120475FFB_MEXMPS-6-C6MKRUETA4NWKE" 
                 className="flex items-center gap-3 text-gray-700 hover:text-green-500 transition-all duration-300 transform hover:-translate-y-1">
                <SiGrab className="w-8 h-8" />
                <span className="text-lg font-medium">Grab</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 