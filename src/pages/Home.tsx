import { Link } from 'react-router-dom';
import { PawPrint, Heart, ShieldCheck, Truck } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-[#7ec8e3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10 text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Welcome to</span>
              <span className="block text-[#fdfbf7] font-serif mt-2">Tiny Tails!</span>
            </h1>
            <p className="mt-4 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-medium">
              Your One-Stop Shop for Pets and Pet Supplies. We provide everything your furry friend needs to live a happy, healthy life.
            </p>
            <div className="mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
              <div className="rounded-md shadow">
                <Link
                  to="/products"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-[#e67e22] hover:bg-[#d35400] md:py-4 md:text-lg md:px-10 transition-transform hover:scale-105"
                >
                  Shop Now
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 rounded-md shadow">
                <Link
                  to="/about"
                  className="w-full flex items-center justify-center px-8 py-3 border-2 border-white text-base font-bold rounded-full text-white hover:bg-white hover:text-[#7ec8e3] md:py-4 md:text-lg md:px-10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative z-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img
                className="w-full object-cover h-[400px]"
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Happy dog and cat"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.93,192.39,101.86Z" fill="#8bc34a"></path>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#8bc34a] py-16 border-b-8 border-[#689f38]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="flex flex-col items-center text-center bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="bg-white p-4 rounded-full mb-4">
                <Heart className="h-8 w-8 text-[#8bc34a]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Pet Food</h3>
              <p className="text-white/90">Premium nutrition for all breeds and ages to keep them healthy.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="bg-white p-4 rounded-full mb-4">
                <PawPrint className="h-8 w-8 text-[#8bc34a]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fun Accessories</h3>
              <p className="text-white/90">Toys, collars, and beds that your pets will absolutely love.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="bg-white p-4 rounded-full mb-4">
                <Truck className="h-8 w-8 text-[#8bc34a]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-white/90">Quick and reliable shipping right to your doorstep.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-[#4a4a4a] sm:text-4xl">
            Ready to spoil your pet?
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Join our community of pet lovers and get access to exclusive deals.
          </p>
          <div className="mt-8">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-[#8b5a2b] hover:bg-[#6b4420] shadow-lg transition-transform hover:-translate-y-1"
            >
              Create an Account Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
