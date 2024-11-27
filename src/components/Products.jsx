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
        name: 'Ricebowl Blackpepper',
        description: 'Nasi dengan ayam bumbu blackpepper yang gurih dan sedikit pedas',
        details: ['Bestseller', 'Pedas', 'Gurih'],
        price: '18K',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&h=400',
        badge: 'Best Seller',
        calories: '450 kal'
      },
      {
        id: 2,
        name: 'Ricebowl Salted Egg',
        description: 'Nasi dengan ayam saus telur asin yang creamy dan gurih',
        details: ['Premium', 'Creamy', 'Rich Taste'],
        price: '20K',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&h=400',
        badge: 'Premium',
        calories: '520 kal'
      },
      {
        id: 3,
        name: 'Ricebowl Sambal Matah',
        description: 'Nasi dengan ayam goreng dan sambal matah khas Bali',
        details: ['Spicy', 'Traditional', 'Fresh'],
        price: '18K',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&h=400',
        calories: '480 kal'
      },
      {
        id: 4,
        name: 'Ricebowl Geprek',
        description: 'Nasi dengan ayam geprek level pedas',
        details: ['Extra Spicy', 'Popular', 'Local Taste'],
        price: '18K',
        image: 'https://images.unsplash.com/photo-1569058242567-93de6f36f8eb?auto=format&fit=crop&w=600&h=400',
        badge: 'Pedas!!!',
        calories: '500 kal'
      },
      {
        id: 5,
        name: 'Ricebowl Korean BBQ',
        description: 'Nasi dengan ayam bumbu Korean BBQ yang manis pedas',
        details: ['Korean Style', 'Sweet Spicy', 'Fusion'],
        price: '20K',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&h=400',
        badge: 'New',
        calories: '510 kal'
      },
      {
        id: 6,
        name: 'Ricebowl Teriyaki',
        description: 'Nasi dengan ayam saus teriyaki khas Jepang',
        details: ['Japanese', 'Sweet', 'Family Favorite'],
        price: '18K',
        image: 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?auto=format&fit=crop&w=600&h=400',
        calories: '460 kal'
      }
    ]
  },
  {
    id: 'noodles',
    name: 'Mie Spesial',
    description: 'Aneka mie dengan racikan bumbu khas',
    icon: FaStar,
    items: [
      {
        id: 7,
        name: 'Mie Goreng Jawa',
        description: 'Mie goreng dengan bumbu Jawa yang otentik',
        details: ['Authentic', 'Savory', 'Traditional'],
        price: '15K',
        image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=600&h=400',
        calories: '400 kal'
      },
      {
        id: 8,
        name: 'Mie Goreng Seafood',
        description: 'Mie goreng dengan campuran seafood segar',
        details: ['Seafood', 'Premium', 'Fresh'],
        price: '22K',
        image: 'https://images.unsplash.com/photo-1569058242567-93de6f36f8eb?auto=format&fit=crop&w=600&h=400',
        badge: 'Premium',
        calories: '450 kal'
      },
      {
        id: 9,
        name: 'Mie Kuah Spesial',
        description: 'Mie kuah dengan kaldu ayam special',
        details: ['Hot Soup', 'Comfort Food'],
        price: '16K',
        image: 'https://images.unsplash.com/photo-1569058242567-93de6f36f8eb?auto=format&fit=crop&w=600&h=400',
        calories: '380 kal'
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
        id: 10,
        name: 'Chicken Wings',
        description: 'Sayap ayam crispy dengan saus spesial',
        details: ['Crispy', 'Spicy Option', 'Shareable'],
        price: '15K',
        image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&h=400',
        calories: '320 kal'
      },
      {
        id: 11,
        name: 'Potato Wedges',
        description: 'Kentang wedges dengan bumbu special',
        details: ['Crispy', 'Seasoned', 'Perfect Snack'],
        price: '12K',
        image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&h=400',
        calories: '250 kal'
      },
      {
        id: 12,
        name: 'Cireng Mozzarella',
        description: 'Cireng isi keju mozzarella meleleh',
        details: ['Cheesy', 'Traditional', 'Hot'],
        price: '10K',
        image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&h=400',
        badge: 'New',
        calories: '200 kal'
      }
    ]
  },
  {
    id: 'drinks',
    name: 'Minuman',
    description: 'Pilihan minuman segar pendamping',
    icon: FaLeaf,
    items: [
      {
        id: 13,
        name: 'Es Teh Lemon',
        description: 'Teh segar dengan perasan lemon',
        details: ['Refreshing', 'Fresh'],
        price: '8K',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&h=400',
        calories: '80 kal'
      },
      {
        id: 14,
        name: 'Mango Smoothie',
        description: 'Smoothie mangga dengan whipped cream',
        details: ['Fresh', 'Sweet', 'Creamy'],
        price: '15K',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&h=400',
        badge: 'Best Seller',
        calories: '200 kal'
      },
      {
        id: 15,
        name: 'Thai Tea',
        description: 'Teh Thailand dengan susu yang creamy dan manis',
        details: ['Creamy', 'Sweet', 'Popular'],
        price: '12K',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&h=400',
        badge: 'Favorite',
        calories: '180 kal'
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={item.id}
                  className="group h-full"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Card Container */}
                  <div className="relative bg-white h-full rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                    {/* Image Section dengan Overlay yang Lebih Menarik */}
                    <div className="relative w-full aspect-[4/3]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Improved Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Price Tag dengan Style Baru */}
                      <div className="absolute top-4 right-4 flex items-center gap-2">
                        <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-xl px-4 py-2 text-sm font-bold text-gray-900 transform group-hover:scale-105 transition-all duration-300">
                          {item.price}
                        </div>
                      </div>

                      {/* Badge dengan Animasi */}
                      {item.badge && (
                        <motion.div 
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          className="absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary 
                                     shadow-lg rounded-xl px-4 py-2 text-sm font-bold text-white 
                                     flex items-center gap-2 transform group-hover:scale-105 transition-all duration-300"
                        >
                          <FaStar className="w-4 h-4" />
                          {item.badge}
                        </motion.div>
                      )}

                      {/* Calories Info dengan Style Baru */}
                      <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm 
                                     shadow-lg rounded-xl px-4 py-2 text-sm font-medium text-white 
                                     opacity-0 group-hover:opacity-100 transform translate-y-2 
                                     group-hover:translate-y-0 transition-all duration-300">
                        {item.calories}
                      </div>
                    </div>

                    {/* Content Section dengan Layout Baru - Fixed Height */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Title dengan Underline Effect */}
                      <div className="relative mb-4 pb-2">
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-secondary transition-colors duration-300 line-clamp-1">
                          {item.name}
                        </h4>
                        <div className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </div>

                      {/* Description dengan Style Baru */}
                      <p className="text-gray-600 line-clamp-2 mb-4 text-sm leading-relaxed flex-grow">
                        {item.description}
                      </p>

                      {/* Tags dengan Design Baru */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {item.details.map((detail, index) => (
                          <span 
                            key={index}
                            className="inline-flex items-center px-3 py-1 text-xs font-medium
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

                    {/* Hover Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-secondary/5 
                                   opacity-0 group-hover:opacity-100 pointer-events-none 
                                   transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 