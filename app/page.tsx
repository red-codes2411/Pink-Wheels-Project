"use client";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, ShoppingCart, Home, Heart, Compass, User, MapPin } from "lucide-react";

export default function HomePage() {
  const categories = [
    { name: "AC Sleeper", link: "/book", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300&h=300&fit=crop" },
    { name: "Pink Cabs", link: "/book", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=300&fit=crop" },
    { name: "Pre-orders", link: "/store", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=300&fit=crop" },
    { name: "Safety Kits", link: "/store", img: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=300&h=300&fit=crop" }
  ];

  return (
    <div className="max-w-6xl mx-auto bg-[#fcf8f9] min-h-screen relative pb-24 shadow-2xl font-sans">
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
        
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link href="/" className="text-pink-500 flex items-center gap-2"><Home size={18}/> Home</Link>
          <Link href="/book" className="hover:text-pink-500 flex items-center gap-2 transition-colors"><Compass size={18}/> Bookings</Link>
          <Link href="/store" className="hover:text-pink-500 flex items-center gap-2 transition-colors"><ShoppingCart size={18}/> Store</Link>
        </div>

        <div className="relative cursor-pointer hover:scale-105 transition-transform">
          <ShoppingCart className="text-gray-800" size={26} />
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#fcf8f9]">0</span>
        </div>
      </header>

      <main className="px-5 mt-6">
        <div className="relative mb-8 max-w-2xl mx-auto shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <input 
            type="text" 
            placeholder="Search for safe rides, cabs, essentials..." 
            className="w-full bg-white py-4 pl-6 pr-14 rounded-full outline-none text-sm font-medium text-gray-700 shadow-sm border border-pink-100 focus:ring-2 focus:ring-pink-300 transition-all"
          />
          <button className="absolute right-2 top-2 bg-pink-500 p-2.5 rounded-full text-white cursor-pointer hover:bg-pink-600 transition-colors shadow-md" onClick={() => alert("Searching DB...")}>
            <Search size={18} />
          </button>
        </div>

        <div className="flex gap-6 overflow-x-auto no-scrollbar mb-10 pb-4 justify-start md:justify-center">
          {categories.map((cat, i) => (
            <Link href={cat.link} key={i} className="flex flex-col items-center gap-3 min-w-[90px] md:min-w-[110px] cursor-pointer group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-[20px] shadow-sm border border-pink-100 flex items-center justify-center overflow-hidden p-1 group-hover:border-pink-400 group-hover:shadow-md transition-all group-hover:-translate-y-1">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover rounded-[14px] opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-sm font-bold text-gray-700 group-hover:text-pink-600 transition-colors">{cat.name}</span>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-black text-gray-900 mb-6 max-w-4xl mx-auto">Popular Rides</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-[24px] p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] border border-pink-50 flex flex-col justify-between">
            <div>
              <div className="w-full h-40 bg-pink-200 rounded-[18px] mb-4 relative flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&h=300&fit=crop" alt="Bus Interior" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply" />
                <span className="text-white font-black text-2xl z-10 drop-shadow-lg tracking-wide">AC Sleeper</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 leading-tight px-1">Premium AC</h3>
              <div className="flex justify-between items-center mt-2 mb-6 px-1">
                <span className="font-extrabold text-gray-900 text-xl">₹850</span>
                <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-md">4.9 ★</span>
              </div>
            </div>
            <Link href="/book" className="block w-full">
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-extrabold py-3.5 rounded-[16px] shadow-md transition-colors text-sm uppercase">Book Now</button>
            </Link>
          </div>

          {/* Card 2: Pink Cab */}
          <div className="bg-white rounded-[24px] p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] border border-pink-50 flex flex-col justify-between">
            <div>
              <div className="w-full h-40 bg-pink-100 rounded-[18px] mb-4 relative flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=300&fit=crop" alt="Cab" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply" />
                <span className="text-pink-600 font-black text-2xl z-10 drop-shadow-lg text-center leading-tight tracking-wide bg-white/80 px-4 py-1 rounded-full">Pink Cab</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 leading-tight px-1">Private Safe Cab</h3>
              <div className="flex justify-between items-center mt-2 mb-6 px-1">
                <span className="font-extrabold text-gray-900 text-xl">₹2,100</span>
                <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-md">5.0 ★</span>
              </div>
            </div>
            <Link href="/book" className="block w-full">
              <button className="w-full bg-pink-50 hover:bg-pink-100 text-pink-600 border border-pink-200 font-extrabold py-3.5 rounded-[16px] transition-colors text-sm uppercase">Book Now</button>
            </Link>
          </div>
        </div>
      </main>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-100 flex justify-around items-center py-4 px-2 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.05)] rounded-t-3xl z-50">
        <Link href="/" className="flex flex-col items-center text-pink-500"><Home size={24} strokeWidth={2.5} /></Link>
        <Link href="/store" className="flex flex-col items-center text-gray-400"><ShoppingCart size={24} /></Link>
        <Link href="/book" className="flex flex-col items-center text-gray-400"><Compass size={24} /></Link>
        <button className="flex flex-col items-center text-gray-400" onClick={() => alert("Profile Coming Soon")}><User size={24} /></button>
      </nav>
    </div>
  );
}