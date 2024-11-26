const testimonials = [
  {
    id: 1,
    name: 'Sarah Wijaya',
    role: 'Pelanggan Setia',
    image: 'https://placehold.co/100x100/FFD700/FFF?text=SW',
    content: 'Jajanan di sini sangat lezat dan autentik. Rasanya mengingatkan saya akan jajanan masa kecil.',
  },
  {
    id: 2,
    name: 'Budi Santoso',
    role: 'Food Blogger',
    image: 'https://placehold.co/100x100/FFD700/FFF?text=BS',
    content: 'Kualitas produk sangat terjaga dan konsisten. Pelayanannya juga sangat ramah.',
  },
  {
    id: 3,
    name: 'Ani Kusuma',
    role: 'Ibu Rumah Tangga',
    image: 'https://placehold.co/100x100/FFD700/FFF?text=AK',
    content: 'Harganya terjangkau dan rasanya enak. Cocok untuk cemilan keluarga.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-gray-600">
            Testimoni dari pelanggan setia kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 