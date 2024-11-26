import { motion } from 'framer-motion';
import { FaLeaf, FaHeart, FaAward, FaClock, FaMapMarkerAlt, FaPhoneAlt, FaHistory, FaUsers } from 'react-icons/fa';

const features = [
  {
    icon: FaLeaf,
    title: 'Bahan Berkualitas',
    description: 'Menggunakan bahan-bahan pilihan terbaik untuk menjaga kualitas dan cita rasa',
    color: 'text-green-500'
  },
  {
    icon: FaHeart,
    title: 'Dibuat dengan Cinta',
    description: 'Setiap hidangan diolah dengan penuh dedikasi dan passion',
    color: 'text-red-500'
  },
  {
    icon: FaAward,
    title: 'Resep Autentik',
    description: 'Menggunakan resep tradisional yang dipadukan dengan sentuhan modern',
    color: 'text-yellow-500'
  }
];

const milestones = [
  {
    year: '2020',
    title: 'Awal Perjalanan',
    description: 'Memulai usaha dari dapur rumah dengan semangat wirausaha'
  },
  {
    year: '2021',
    title: 'Pembukaan Outlet',
    description: 'Membuka outlet pertama di pusat kuliner kota'
  },
  {
    year: '2022',
    title: 'Pengembangan Menu',
    description: 'Menambah variasi menu dan inovasi produk baru'
  },
  {
    year: '2023',
    title: 'Ekspansi Bisnis',
    description: 'Memperluas jangkauan delivery dan kerjasama platform'
  }
];

const operationalInfo = [
  {
    icon: FaClock,
    title: 'Jam Operasional',
    details: ['Senin - Minggu: 10:00 - 21:00 WIB', 'Weekend Extended: 10:00 - 22:00 WIB']
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Lokasi',
    details: ['Jl. Contoh No. 123', 'Kota, Provinsi 12345']
  },
  {
    icon: FaPhoneAlt,
    title: 'Kontak',
    details: ['WhatsApp: 0812-3456-7890', 'Email: info@jajananmenyala.com']
  }
];

const teamValues = [
  {
    icon: FaUsers,
    title: 'Tim Profesional',
    description: 'Didukung oleh tim yang berpengalaman dan terlatih dalam bidang kuliner'
  },
  {
    icon: FaHistory,
    title: 'Konsistensi',
    description: 'Menjaga kualitas dan standar pelayanan di setiap waktu'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tentang Kami
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-secondary mb-4">
            Cerita Jajanan Menyala
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami hadir untuk memberikan pengalaman kuliner yang memadukan cita rasa tradisional 
            dengan penyajian modern yang instagramable
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&h=600"
                alt="Proses Pembuatan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
            </div>
            <motion.div 
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full filter blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Menghadirkan Cita Rasa yang Tak Terlupakan
            </h3>
            <p className="text-gray-600">
              Jajanan Menyala hadir untuk melestarikan warisan kuliner Indonesia melalui 
              jajanan tradisional yang dibuat dengan penuh cinta dan dedikasi. Kami 
              berkomitmen untuk menggunakan bahan-bahan berkualitas terbaik dan mengikuti 
              resep tradisional yang telah diwariskan secara turun-temurun.
            </p>
            <motion.div 
              className="pt-4"
              whileHover={{ x: 5 }}
            >
              <a
                href="#products"
                className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300"
              >
                <span>Lihat Menu Kami</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`inline-block p-3 rounded-full bg-gray-100 ${feature.color} mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline/Milestone Section */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Perjalanan Kami</h3>
            <p className="text-gray-600">Melihat kembali perjalanan Jajanan Menyala dari waktu ke waktu</p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {/* Mobile Layout */}
                  <div className="md:hidden bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-white">{milestone.year}</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">{milestone.title}</h4>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`hidden md:flex items-center ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}>
                    <div className="w-1/2" />
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 flex-shrink-0">
                      <span className="text-sm font-bold text-white">{milestone.year}</span>
                    </div>
                    <div className="w-1/2" />
                  </div>
                  <div className={`hidden md:block mt-4 ${
                    index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'
                  }`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 inline-block max-w-lg">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Operational Info Section - New */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {operationalInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-gray-50 p-8 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <info.icon className="w-8 h-8 text-secondary mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h4>
                <ul className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-600">{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Values Section - New */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nilai-Nilai Kami</h3>
            <p className="text-gray-600">Komitmen kami dalam memberikan yang terbaik</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <value.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 