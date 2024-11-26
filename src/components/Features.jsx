import { ShieldCheckIcon, CurrencyDollarIcon, HeartIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Kualitas Terjamin',
    description: 'Menggunakan bahan-bahan berkualitas dan proses produksi yang higienis',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Harga Terjangkau',
    description: 'Harga bersahabat dengan kualitas yang tidak mengecewakan',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Dukungan UMKM Lokal',
    description: 'Mendukung pertumbuhan ekonomi lokal melalui UMKM',
    icon: HeartIcon,
  },
];

export default function Features() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-gray-600">
            Keunggulan yang membuat kami berbeda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="text-center">
              <div className="flex justify-center mb-4">
                <feature.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 