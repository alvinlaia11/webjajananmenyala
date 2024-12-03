import { motion } from 'framer-motion';
import { FaFire, FaStar, FaLeaf } from 'react-icons/fa';

const categories = [
  {
    id: 'ricebowl',
    name: 'Rice Bowl',
    description: 'Pilihan rice bowl dengan berbagai varian saus spesial',
    icon: FaFire,
    items: [
      {
        id: 1,
        name: 'Rice Bowl Black Pepper',
        description: 'Nasi dengan ayam bumbu blackpepper yang gurih dan sedikit pedas',
        details: ['Bestseller', 'Pedas', 'Gurih'],
        price: '12K',
        image: '/images/blackpepper.jpg',
        badge: 'Best Seller',
        calories: '450 kal'
      },
      {
        id: 2,
        name: 'Rice Bowl BBQ',
        description: 'Nasi dengan ayam saus BBQ yang manis gurih',
        details: ['Premium', 'Sweet', 'Rich Taste'],
        price: '12K',
        image: '/images/bbq.jpg',
        badge: 'Premium',
        calories: '520 kal'
      },
      
      {
        id: 4,
        name: 'Rice Bowl Suwir',
        description: 'Nasi dengan ayam suwir bumbu special yang gurih',
        details: ['Traditional', 'Spicy', 'Authentic'],
        price: '12K',
        image: '/images/suwir.jpg',
        badge: 'Local Taste',
        calories: '470 kal'
      },
      {
        id: 5,
        name: 'Rice Bowl Teriyaki',
        description: 'Nasi dengan ayam saus teriyaki khas Jepang',
        details: ['Japanese Style', 'Sweet', 'Popular'],
        price: '12K',
        image: '/images/teriyaki.jpg',
        badge: 'Favorite',
        calories: '500 kal'
      }
    ]
  },
  {
    id: 'dimsum',
    name: 'Dimsum',
    description: 'Aneka dimsum dengan berbagai varian isi',
    icon: FaStar,
    items: [
      {
        id: 1,
        name: 'Dimsum Ayam',
        description: 'Dimsum dengan isian ayam yang juicy',
        details: ['Fresh', 'Juicy', 'Homemade'],
        price: '10K',
        image: '/images/dimsumayam.jpg',
        badge: 'Best Seller',
        calories: '220 kal'
      },
      {
        id: 2,
        name: 'Ekado',
        description: 'Ekado dengan isian udang dan ayam special',
        details: ['Premium', 'Seafood', 'Homemade'],
        price: '12K',
        image: '/images/ekado.jpg',
        calories: '200 kal'
      },
      {
        id: 3,
        name: 'Udang Gulung Moza',
        description: 'Udang gulung dengan balutan kulit yang crispy',
        details: ['Crispy', 'Seafood', 'Premium'],
        price: '15K',
        image: '/images/Udanggulungmonza.jpg',
        badge: 'Premium',
        calories: '180 kal'
      },
      {
        id: 4,
        name: 'Pangsit Pedas',
        description: 'Pangsit goreng dengan bumbu pedas special',
        details: ['Spicy', 'Crispy', 'Addictive'],
        price: '15K',
        image: '/images/pangsitpedas.jpg',
        badge: 'Pedas',
        calories: '200 kal'
      }
    ]
  },
  {
    id: 'snackball',
    name: 'Aneka Bola',
    description: 'Aneka bola-bola dengan berbagai varian isi',
    icon: FaLeaf,
    items: [
      {
        id: 1,
        name: 'Bola Udang',
        description: 'Bola-bola dengan isian udang yang gurih',
        details: ['Seafood', 'Crispy', 'Premium'],
        price: '15K',
        image: '/images/bolaudang.jpg',
        badge: 'Best Seller',
        calories: '180 kal'
      },
      {
        id: 2,
        name: 'Bola Rambutan',
        description: 'Bola-bola dengan tekstur rambutan yang unik',
        details: ['Unique', 'Crispy', 'Special'],
        price: '15K',
        image: '/images/bolarambutan.jpg',
        calories: '160 kal'
      }
    ]
  },
  {
    id: 'traditional',
    name: 'Menu Tradisional',
    description: 'Aneka menu tradisional dengan cita rasa autentik',
    icon: FaStar,
    items: [
      {
        id: 1,
        name: 'Sop Daging',
        description: 'Sop daging dengan kuah bening segar',
        details: ['Fresh', 'Healthy', 'Traditional'],
        price: '15K',
        image: '/images/sopdaging.jpg',
        calories: '300 kal'
      },
      {
        id: 2,
        name: 'Sop Ayam',
        description: 'Sop ayam dengan kuah gurih dan segar',
        details: ['Fresh', 'Healthy', 'Comfort Food'],
        price: '13K',
        image: '/images/sopayam.jpg',
        calories: '280 kal'
      },
      {
        id: 3,
        name: 'Soto Ayam',
        description: 'Soto ayam dengan kuah kuning yang gurih',
        details: ['Traditional', 'Authentic', 'Favorite'],
        price: '13K',
        image: '/images/sotoayam.jpg',
        badge: 'Favorite',
        calories: '320 kal'
      },
      {
        id: 4,
        name: 'Ayam Penyet',
        description: 'Ayam penyet dengan sambal pedas special',
        details: ['Spicy', 'Traditional', 'Popular'],
        price: '12K',
        image: '/images/ayampenyet.jpg',
        badge: 'Pedas',
        calories: '450 kal'
      }
    ]
  },
  {
    id: 'snacks',
    name: 'Cemilan',
    description: 'Aneka cemilan untuk teman nongkrong',
    icon: FaLeaf,
    items: [
      {
        id: 1,
        name: 'Pancake Mini',
        description: 'Pancake mini yang lembut dan manis',
        details: ['Sweet', 'Soft', 'Snack Time'],
        price: '12K',
        image: '/images/pancakemini.jpg',
        calories: '200 kal'
      },
      {
        id: 2,
        name: 'Taiso',
        description: 'Taiso dengan isian special',
        details: ['Unique', 'Traditional', 'Tasty'],
        price: '12K',
        image: '/images/Taiso.jpg',
        calories: '180 kal'
      },
      {
        id: 3,
        name: 'Lumpia Salad',
        description: 'Lumpia dengan isian salad segar',
        details: ['Fresh', 'Healthy', 'Crispy'],
        price: '12K',
        image: '/images/lumpiasalad.jpg',
        calories: '150 kal'
      },
      {
        id: 4,
        name: 'Lumpiah Kulit Tahu',
        description: 'Lumpia dengan kulit tahu yang unik',
        details: ['Unique', 'Vegetarian Option', 'Crispy'],
        price: '10K',
        image: '/images/lumpiah.jpg',
        badge: 'Vegetarian',
        calories: '170 kal'
      }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Products() {
  console.log('Categories:', categories);
  console.log('Rice Bowl items:', categories[0].items.length);

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 text-secondary font-semibold px-4 py-1 rounded-full bg-secondary/10">
            <FaFire className="w-4 h-4" />
            <span>Menu Spesial</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Menu Jajanan Menyala
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nikmati berbagai pilihan menu kami yang diolah dengan bahan-bahan berkualitas 
            dan resep spesial untuk memberikan pengalaman kuliner terbaik
          </p>
        </motion.div>

    {/* Categories Section */}
        {categories.map((category, index) => (
          <motion.div 
            key={category.id} 
            className="mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Category Header */}
            <motion.div 
              className="text-center mb-12"
              variants={itemVariants}
            >
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <span className="p-2 rounded-full bg-secondary/10">
                  <category.icon className="w-6 h-6 text-secondary" />
                </span>
                <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
            </motion.div>

            {/* Products Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8
              ${category.id === 'snackball' ? 'justify-items-center' : ''}`}>
              {category.id === 'snackball' && <div className="hidden xl:block" />} {/* Spacer untuk 4 kolom */}
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={item.id}
                  className={`group h-full flex ${
                    category.id === 'snackball' ? 'w-full max-w-[350px] sm:max-w-[400px]' : 'w-full'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Card Container */}
                  <div className="relative bg-white w-full rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                    {/* Image Section dengan Ukuran Tetap */}
                    <div className="relative w-full h-[180px] sm:h-[220px]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Price Tag */}
                      <div className="absolute top-3 right-3 flex items-center gap-2">
                        <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-xl px-3 py-1.5 text-sm font-bold text-gray-900 transform group-hover:scale-105 transition-all duration-300">
                          {item.price}
                        </div>
                      </div>

                      {/* Badge */}
                      {item.badge && (
                        <motion.div 
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          className="absolute top-3 left-3 bg-gradient-to-r from-primary to-secondary shadow-lg rounded-xl px-3 py-1.5 text-sm font-bold text-white flex items-center gap-2"
                        >
                          <FaStar className="w-3 h-3" />
                          {item.badge}
                        </motion.div>
                      )}

                      {/* Calories Info */}
                      <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm shadow-lg rounded-xl px-3 py-1.5 text-xs font-medium text-white">
                        {item.calories}
                      </div>
                    </div>

                    {/* Content Section dengan Padding yang Disesuaikan */}
                    <div className="p-4 sm:p-6 flex flex-col flex-grow">
                      {/* Title */}
                      <div className="relative mb-2 sm:mb-4 pb-2">
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                          {item.name}
                        </h4>
                        <div className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 line-clamp-2 mb-3 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                        {item.details.map((detail, index) => (
                          <span 
                            key={index}
                            className="inline-flex items-center px-2 py-1 text-xs sm:text-sm font-medium
                                     bg-gray-100 text-gray-700 rounded-lg
                                     hover:bg-primary/10 hover:text-gray-900 
                                     transform hover:-translate-y-0.5
                                     transition-all duration-300"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              {category.id === 'snackball' && <div className="hidden xl:block" />} {/* Spacer untuk 4 kolom */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 