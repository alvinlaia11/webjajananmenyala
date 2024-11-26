import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaTag } from 'react-icons/fa';

const promos = [
  {
    title: "Promo Weekday Special",
    description: "Diskon 10% untuk pembelian di hari Senin-Jumat",
    period: "Berlaku hingga 30 April 2024",
    time: "11:00 - 17:00 WIB",
    code: "WEEKDAY10",
    terms: ["Minimal pembelian 50K", "Tidak dapat digabung dengan promo lain"]
  },
  {
    title: "Happy Hour",
    description: "Beli 2 minuman gratis 1 snack pilihan",
    period: "Setiap hari",
    time: "15:00 - 17:00 WIB",
    code: "HAPPY2GET1",
    terms: ["Berlaku untuk semua jenis minuman", "Snack tertentu yang berlaku"]
  },
  {
    title: "Student Special",
    description: "Diskon 15% dengan menunjukkan kartu pelajar/mahasiswa",
    period: "Setiap hari",
    time: "Selama jam operasional",
    code: "STUDENT15",
    terms: ["Wajib menunjukkan kartu identitas", "Maksimal diskon 20K"]
  },
  {
    title: "Weekend Package",
    description: "Paket hemat untuk 4 orang",
    period: "Sabtu-Minggu",
    time: "Selama jam operasional",
    code: "WEEKEND4",
    terms: ["4 Rice Bowl", "4 Minuman", "2 Snack"]
  }
];

export default function Promos() {
  return (
    <section id="promos" className="py-20 bg-gradient-to-b from-primary/10 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Promo
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-secondary mb-4">
            Penawaran Spesial
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nikmati berbagai penawaran menarik untuk pengalaman kuliner yang lebih hemat
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promos.map((promo, index) => (
            <motion.div
              key={promo.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{promo.title}</h3>
                  <span className="px-4 py-1 bg-primary/10 text-gray-900 rounded-full text-sm font-semibold">
                    {promo.code}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">{promo.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaCalendar className="w-4 h-4" />
                    <span>{promo.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaClock className="w-4 h-4" />
                    <span>{promo.time}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <FaTag className="w-4 h-4 text-secondary" />
                    Syarat dan Ketentuan:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {promo.terms.map((term, idx) => (
                      <li key={idx}>{term}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 