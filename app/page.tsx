import Link from "next/link";
import Image from "next/image";
import { Search, Menu, ShoppingCart, Home, Heart, Compass, User, MapPin } from "lucide-react";

export default function HomePage() {
  // Real images for categories from Unsplash
  const categories = [
    { name: "AC Sleeper", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300&h=300&fit=crop" },
    { name: "Semi-Sleeper", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=300&h=300&fit=crop" },
    { name: "Pre-orders", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=300&fit=crop" },
    { name: "Safety Kits", img: "https://images.unsplash.com/photo-1584308666744-24d5e4785429?w=300&h=300&fit=crop" }
  ];

  return (
    <div className="max-w-6xl mx-auto bg-[#fcf8f9] min-h-screen relative pb-24 shadow-2xl font-sans">
      
      {/* Responsive Header */}
      <header className="px-5 pt-6 pb-4 flex justify-between items-center sticky top-0 bg-[#fcf8f9]/95 backdrop-blur-md z-50 border-b border-pink-100">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Pink Wheels Logo" width={45} height={45} className="rounded-full shadow-sm" />
          <div className="flex flex-col">
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">Pink Wheels</h1>
            <p className="text-sm font-medium text-pink-500 mt-0.5 flex items-center gap-1">
              <MapPin size={14} /> Trichy to Chennai
            </p>
          </div>
        </div>
        
        {/* Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link href="/" className="hover:text-pink-500 flex items-center gap-2 transition-colors"><Home size={18}/> Home</Link>
          <Link href="/book" className="hover:text-pink-500 flex items-center gap-2 transition-colors"><Compass size={18}/> Bookings</Link>
          <button className="hover:text-pink-500 flex items-center gap-2 transition-colors"><User size={18}/> Profile</button>
        </div>

        <div className="relative cursor-pointer hover:scale-105 transition-transform">
          <ShoppingCart className="text-gray-800" size={26} />
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#fcf8f9]">
            1
          </span>
        </div>
      </header>

      <main className="px-5 mt-6">
        {/* Search Bar - Wider on Desktop */}
        <div className="relative mb-8 max-w-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <input 
            type="text" 
            placeholder="Search for safe rides, AC, Non-AC..." 
            className="w-full bg-white py-4 pl-6 pr-14 rounded-full outline-none text-sm font-medium text-gray-700 shadow-sm border border-pink-100 focus:ring-2 focus:ring-pink-300 transition-all"
          />
          <button className="absolute right-2 top-2 bg-pink-500 p-2.5 rounded-full text-white cursor-pointer hover:bg-pink-600 transition-colors shadow-md">
            <Search size={18} />
          </button>
        </div>

        {/* Dynamic Image Categories */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar mb-10 pb-4">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center gap-3 min-w-[90px] md:min-w-[110px] cursor-pointer group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-[20px] shadow-sm border border-pink-100 flex items-center justify-center overflow-hidden p-1 group-hover:border-pink-400 group-hover:shadow-md transition-all group-hover:-translate-y-1">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover rounded-[14px] opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-sm font-bold text-gray-700 group-hover:text-pink-600 transition-colors">{cat.name}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-black text-gray-900 mb-6">Popular Rides</h2>

        {/* Responsive Grid - Auto expands to 4 columns on large laptop screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Option 1 */}
          <div className="bg-white rounded-[24px] p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] border border-pink-50 hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-full h-40 md:h-48 bg-pink-200 rounded-[18px] mb-4 relative flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&h=300&fit=crop" alt="Bus Interior" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply" />
                <span className="text-white font-black text-2xl z-10 drop-shadow-lg tracking-wide">AC Sleeper</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 leading-tight px-1">Premium AC</h3>
              <div className="flex justify-between items-center mt-2 mb-6 px-1">
                <span className="font-extrabold text-gray-900 text-xl">₹850</span>
                <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-md">4.9 ★</span>
              </div>
            </div>
            {/* Working Link Button */}
            <Link href="/book" className="block w-full">
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-extrabold py-3.5 rounded-[16px] shadow-md shadow-pink-200 transition-colors text-sm uppercase tracking-wide">
                Book Now
              </button>
            </Link>
          </div>

          {/* Option 2 */}
          <div className="bg-white rounded-[24px] p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] border border-pink-50 hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-full h-40 md:h-48 bg-pink-100 rounded-[18px] mb-4 relative flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=300&fit=crop" alt="Bus Seats" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply" />
                <span className="text-white font-black text-2xl z-10 drop-shadow-lg text-center leading-tight tracking-wide">Semi<br/>Sleeper</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 leading-tight px-1">Comfort Non-AC</h3>
              <div className="flex justify-between items-center mt-2 mb-6 px-1">
                <span className="font-extrabold text-gray-900 text-xl">₹550</span>
                <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-md">4.7 ★</span>
              </div>
            </div>
            {/* Working Link Button */}
            <Link href="/book" className="block w-full">
              <button className="w-full bg-pink-50 hover:bg-pink-100 text-pink-600 font-extrabold py-3.5 rounded-[16px] transition-colors text-sm uppercase tracking-wide border border-pink-200">
                Book Now
              </button>
            </Link>
          </div>

        </div>
      </main>

      {/* Mobile Bottom Navigation (Hidden on Desktop) */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-100 flex justify-around items-center py-4 px-2 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.05)] rounded-t-3xl z-50">
        <Link href="/" className="flex flex-col items-center text-pink-500 transition-transform hover:scale-110">
          <Home size={24} strokeWidth={2.5} />
        </Link>
        <button className="flex flex-col items-center text-gray-400 hover:text-pink-400 transition-transform hover:scale-110">
          <Heart size={24} />
        </button>
        <Link href="/book" className="flex flex-col items-center text-gray-400 hover:text-pink-400 transition-transform hover:scale-110">
          <Compass size={24} />
        </Link>
        <button className="flex flex-col items-center text-gray-400 hover:text-pink-400 transition-transform hover:scale-110">
          <User size={24} />
        </button>
      </nav>
    </div>
  );
}