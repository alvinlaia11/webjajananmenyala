import { motion } from 'framer-motion';
import { useState } from 'react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    title: 'Suasana Outlet',
    category: 'Outlet',
    description: 'Interior modern dan nyaman'
  },
  {
    url: 'https://images.unsplash.com/photo-1543353071-873f17a7a088',
    title: 'Proses Memasak',
    category: 'Behind The Scene',
    description: 'Dapur profesional kami'
  },
  {
    url: 'https://images.unsplash.com/photo-1542528180-1c2803fa048c',
    title: 'Menu Favorit',
    category: 'Food',
    description: 'Rice Bowl Spesial'
  },
  {
    url: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
    title: 'Plating',
    category: 'Food',
    description: 'Penyajian yang instagramable'
  },
  {
    url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19',
    title: 'Tim Kami',
    category: 'Team',
    description: 'Profesional dan berpengalaman'
  },
  {
    url: 'https://images.unsplash.com/photo-1569058242567-93de6f36f8eb',
    title: 'Event',
    category: 'Events',
    description: 'Berbagai acara spesial'
  }
];

const categories = ['All', 'Food', 'Outlet', 'Behind The Scene', 'Team', 'Events'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Galeri
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-secondary mb-4">
            Momen Spesial Jajanan Menyala
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dokumentasi perjalanan dan momen-momen berharga kami dalam 
            menghadirkan pengalaman kuliner terbaik
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === category 
                  ? 'bg-secondary text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.title}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {image.description}
                  </p>
                  <span className="inline-block mt-4 text-xs font-semibold px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 