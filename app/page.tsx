import Link from "next/link";
import Image from "next/image";
import { Search, Menu, ShoppingCart, Home, Heart, Compass, User, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="max-w-md mx-auto bg-[#fcf8f9] min-h-screen relative pb-24 shadow-2xl font-sans">
      
      {/* Top Navigation */}
      <header className="px-5 pt-6 pb-4 flex justify-between items-center sticky top-0 bg-[#fcf8f9]/90 backdrop-blur-md z-50">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <Menu className="text-gray-800" size={24} />
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">Safe Transit.</h1>
          </div>
          <p className="text-sm font-medium text-pink-500 mt-1 flex items-center gap-1">
            <MapPin size={14} /> Trichy to Chennai
          </p>
        </div>
        <div className="relative">
          <ShoppingCart className="text-gray-800" size={24} />
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">1</span>
        </div>
      </header>

      <main className="px-5">
        {/* Search Bar */}
        <div className="relative mt-2 mb-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <input 
            type="text" 
            placeholder="Search for rides, AC, Non-AC..." 
            className="w-full bg-white py-4 pl-5 pr-12 rounded-full outline-none text-sm font-medium text-gray-700 shadow-sm border border-pink-50"
          />
          <div className="absolute right-2 top-2 bg-pink-500 p-2 rounded-full text-white">
            <Search size={18} />
          </div>
        </div>

        {/* Categories (Horizontal Scroll) */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar mb-8 pb-2">
          {["AC Sleeper", "Semi-Sleeper", "Pre-orders", "Safety Kits"].map((cat, i) => (
            <div key={i} className="flex flex-col items-center gap-2 min-w-[72px]">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-pink-100 flex items-center justify-center overflow-hidden p-2">
                 {/* Fallback if logo doesn't load */}
                <Image src="/logo.png" alt={cat} width={40} height={40} className="object-contain opacity-80" />
              </div>
              <span className="text-xs font-bold text-gray-700">{cat}</span>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-black text-gray-900 mb-4">Popular now</h2>

        {/* Zomato Style Grid Cards */}
        <div className="grid grid-cols-2 gap-4">
          
          {/* Card 1 */}
          <div className="bg-white rounded-[24px] p-3 pb-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] border border-pink-50/50">
            <div className="w-full h-32 bg-pink-100 rounded-[18px] mb-3 relative flex items-center justify-center">
              <span className="text-pink-300 font-black text-lg">AC Sleeper</span>
              <button className="absolute -bottom-3 bg-white text-pink-600 font-extrabold text-sm px-6 py-1.5 rounded-lg shadow-md border border-gray-100 uppercase tracking-wide">
                Book
              </button>
            </div>
            <div className="mt-5 px-1">
              <h3 className="text-[15px] font-bold text-gray-800 leading-tight">Premium AC</h3>
              <div className="flex justify-between items-center mt-1">
                <span className="font-extrabold text-gray-900">₹850</span>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-1.5 rounded">4.9 ★</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[24px] p-3 pb-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] border border-pink-50/50">
            <div className="w-full h-32 bg-pink-50 rounded-[18px] mb-3 relative flex items-center justify-center">
              <span className="text-pink-300 font-black text-lg text-center">Semi<br/>Sleeper</span>
              <button className="absolute -bottom-3 bg-white text-pink-600 font-extrabold text-sm px-6 py-1.5 rounded-lg shadow-md border border-gray-100 uppercase tracking-wide">
                Book
              </button>
            </div>
            <div className="mt-5 px-1">
              <h3 className="text-[15px] font-bold text-gray-800 leading-tight">Comfort Non-AC</h3>
              <div className="flex justify-between items-center mt-1">
                <span className="font-extrabold text-gray-900">₹550</span>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-1.5 rounded">4.7 ★</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Fixed Bottom Navigation (Swiggy Style) */}
      <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-100 flex justify-around items-center py-4 px-2 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.05)] rounded-t-3xl z-50">
        <Link href="/" className="flex flex-col items-center text-pink-500">
          <Home size={24} strokeWidth={2.5} />
        </Link>
        <div className="flex flex-col items-center text-gray-400 hover:text-pink-400">
          <Heart size={24} />
        </div>
        <Link href="/book" className="flex flex-col items-center text-gray-400 hover:text-pink-400">
          <Compass size={24} />
        </Link>
        <div className="flex flex-col items-center text-gray-400 hover:text-pink-400">
          <User size={24} />
        </div>
      </nav>
    </div>
  );
}