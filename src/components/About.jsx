import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About US
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="aspect-square relative"
          >
            <img
              src="/images/gambar2.jpg"
              alt="About Jajanan Menyala"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="space-y-6"
          >
            <p className="text-gray-700 leading-relaxed">
              Kami hadirkan cita rasa yang menggugah selera!
            </p>
            <p className="text-gray-700 leading-relaxed">
              Di Jajanan Menyala, kami berkomitmen untuk menyajikan hidangan kekinian yang lezat dan sesuai dengan Selera lokal. Berdiri sejak Mei 2024 dan berlokasi strategis di dekat Universitas Sumatra Utara, kami menjadi tujuan favorit bagi mahasiswa dan masyarakat yang mencari makanan berkualitas dengan harga terjangkau.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F94545] text-white px-8 py-3 rounded-full font-medium hover:bg-[#E03B3B] transition-colors duration-300"
            >
              Menu
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 