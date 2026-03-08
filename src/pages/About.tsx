import { PawPrint } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#4a4a4a] sm:text-5xl">
          ABOUT US
        </h1>
      </div>
      
      <div className="bg-[#f5f0e6] rounded-3xl p-8 md:p-12 shadow-lg border-4 border-[#4a4a4a] relative">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 border-4 border-[#4a4a4a]">
          <PawPrint className="h-10 w-10 text-[#4a4a4a]" />
        </div>
        
        <p className="text-xl text-center text-[#4a4a4a] leading-relaxed font-medium mt-4">
          Tiny tails Pet Shop and Care will be a friendly haven for all animal lovers. 
          It will provide pet food and basic pet accessories in one place. 
          The main aim of this website is to make pet care easy and convenient.
        </p>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center text-[#4a4a4a] mb-12">SERVICES OFFERED</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md flex items-start">
            <PawPrint className="h-8 w-8 text-[#5c6bc0] mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-[#4a4a4a] mb-2">Nutritious Food</h3>
              <p className="text-[#666]">High quality meals designed for every pet's age and breed.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-md flex items-start">
            <PawPrint className="h-8 w-8 text-[#5c6bc0] mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-[#4a4a4a] mb-2">Stylish Accessories</h3>
              <p className="text-[#666]">Collars, harnesses, and toys that add flair and function.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-md flex items-start">
            <PawPrint className="h-8 w-8 text-[#5c6bc0] mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-[#4a4a4a] mb-2">Comfortable Bedding</h3>
              <p className="text-[#666]">Soft, durable, and cozy spots for peaceful naps.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-md flex items-start">
            <PawPrint className="h-8 w-8 text-[#5c6bc0] mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-[#4a4a4a] mb-2">Daily Hygiene</h3>
              <p className="text-[#666]">Essential grooming tools for maintaining freshness and comfort.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
