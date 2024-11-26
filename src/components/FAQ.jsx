import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: "Apakah tersedia layanan delivery?",
    answer: "Ya, kami melayani delivery melalui berbagai platform seperti GoFood dan GrabFood untuk memudahkan pelanggan menikmati menu kami."
  },
  {
    question: "Apakah tersedia untuk catering?",
    answer: "Ya, kami menerima pesanan catering untuk berbagai acara dengan minimal pemesanan dan dapat disesuaikan dengan kebutuhan Anda."
  },
  {
    question: "Bagaimana cara melakukan reservasi?",
    answer: "Reservasi dapat dilakukan melalui WhatsApp atau telepon ke nomor yang tertera. Sebaiknya reservasi dilakukan minimal 1 hari sebelumnya."
  },
  {
    question: "Apakah tersedia menu vegetarian?",
    answer: "Ya, kami memiliki beberapa pilihan menu vegetarian yang dapat disesuaikan dengan preferensi Anda."
  },
  {
    question: "Berapa lama waktu pengantaran?",
    answer: "Waktu pengantaran berkisar antara 30-45 menit tergantung jarak dan kondisi lalu lintas."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            FAQ
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-secondary mb-4">
            Pertanyaan yang Sering Diajukan
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban dari pertanyaan-pertanyaan umum seputar layanan kami
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="w-5 h-5 text-gray-500" />
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 