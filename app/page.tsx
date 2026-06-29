import Link from "next/link";
import Image from "next/image";
import { Star, ShieldCheck, Clock, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-sans pb-20">
      {/* Soft Pink Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-pink-100">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-pink-100 p-1 rounded-full shadow-sm">
              <Image src="/logo.png" alt="Pink Wheels Logo" width={45} height={45} className="rounded-full" />
            </div>
            <h1 className="text-2xl font-extrabold text-pink-600 tracking-tight">Pink Wheels</h1>
          </div>
          <div className="bg-pink-50 text-pink-600 px-4 py-1.5 rounded-full text-sm font-semibold border border-pink-200">
            Trichy ➔ Chennai
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 mt-8">
        {/* Swiggy-style Hero Banner */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-400 rounded-3xl p-8 text-white shadow-lg mb-10 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-3">Safe Transit, Simplified.</h2>
            <p className="text-pink-50 text-lg flex items-center gap-2 max-w-md">
              <ShieldCheck size={24} /> Verified female drivers, secure rest stops, and a community of safe travelers.
            </p>
          </div>
          {/* Decorative background circle */}
          <div className="absolute -right-10 -top-20 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-6 px-2">Available Rides</h3>

        {/* Variety of Options Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Option 1: Premium */}
          <div className="bg-white rounded-3xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-50 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="bg-pink-50 rounded-2xl h-40 mb-4 flex items-center justify-center relative overflow-hidden">
               <span className="absolute top-3 left-3 bg-white text-pink-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">Bestseller</span>
               <span className="text-pink-300 font-bold text-xl">AC Sleeper</span>
            </div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-bold text-gray-800">Premium AC Sleeper</h4>
              <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded-lg text-sm font-bold">
                4.9 <Star size={14} fill="currentColor" />
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-4 flex gap-4">
              <span className="flex items-center gap-1"><Clock size={14}/> 10:30 PM</span>
              <span className="flex items-center gap-1"><MapPin size={14}/> Trichy</span>
            </p>
            <Link href="/book">
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-2xl transition-colors shadow-md shadow-pink-200">
                Book for ₹850
              </button>
            </Link>
          </div>

          {/* Option 2: Standard */}
          <div className="bg-white rounded-3xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-50 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="bg-gray-50 rounded-2xl h-40 mb-4 flex items-center justify-center">
               <span className="text-gray-400 font-bold text-xl">Semi-Sleeper</span>
            </div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-bold text-gray-800">Comfort Semi-Sleeper</h4>
              <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded-lg text-sm font-bold">
                4.7 <Star size={14} fill="currentColor" />
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-4 flex gap-4">
              <span className="flex items-center gap-1"><Clock size={14}/> 11:00 PM</span>
              <span className="flex items-center gap-1"><MapPin size={14}/> Trichy</span>
            </p>
            <Link href="/book">
              <button className="w-full bg-pink-100 text-pink-600 hover:bg-pink-200 font-bold py-3 rounded-2xl transition-colors">
                Book for ₹550
              </button>
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}