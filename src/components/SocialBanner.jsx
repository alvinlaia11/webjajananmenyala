import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SocialBanner() {
  return (
    <motion.div 
      className="bg-gradient-to-r from-secondary/90 to-primary/90 text-white py-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-6">
          <span className="text-sm font-medium">Ikuti kami di:</span>
          <a
            href="https://www.instagram.com/jajanan_menyala?igsh=MW91dWNxeGE1aWp5cA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-white/80 transition-colors"
          >
            <FaInstagram className="h-4 w-4" />
            <span className="text-sm">@jajanan_menyala</span>
          </a>
          <a
            href="https://www.tiktok.com/@jajanan_menyala?_t=8riUwhu9hGa&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-white/80 transition-colors"
          >
            <FaTiktok className="h-4 w-4" />
            <span className="text-sm">@jajanan_menyala</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
} 