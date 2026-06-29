"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, Plus, Minus } from "lucide-react";

export default function StorePage() {
  const [cartCount, setCartCount] = useState(0);

  const items = [
    { name: "Filter Coffee Combo", price: 60, img: "☕", desc: "Hot coffee + biscuits. Ready at the next stop." },
    { name: "Sanitary Care Kit", price: 120, img: "🌸", desc: "Pads, wipes, and sanitizer." },
    { name: "Pepper Spray", price: 250, img: "🛡️", desc: "Pink Wheels verified safety essential." },
    { name: "Mineral Water (1L)", price: 20, img: "💧", desc: "Chilled and sealed." }
  ];

  return (
    <div className="max-w-4xl mx-auto bg-[#f8f9fa] min-h-screen relative pb-32 font-sans">
      <header className="bg-white px-5 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 bg-pink-50 rounded-full text-gray-700 hover:text-pink-500"><ArrowLeft size={20} /></Link>
          <h1 className="text-xl font-black text-gray-900 tracking-tight">Pink Wheels Store</h1>
        </div>
        <div className="relative">
          <ShoppingBag className="text-gray-800" size={24} />
          {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">{cartCount}</span>}
        </div>
      </header>

      <main className="px-5 mt-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Pre-order for your journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-pink-50 flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="text-3xl bg-pink-50 p-3 rounded-xl">{item.img}</div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <p className="text-xs text-gray-500 mb-1">{item.desc}</p>
                  <p className="font-extrabold text-pink-600">₹{item.price}</p>
                </div>
              </div>
              <button 
                onClick={() => setCartCount(c => c + 1)}
                className="bg-white border border-pink-200 text-pink-600 font-extrabold text-sm px-4 py-2 rounded-xl shadow-sm hover:bg-pink-50 transition"
              >
                ADD +
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Floating Cart Checkout Bar */}
      {cartCount > 0 && (
        <div className="fixed bottom-4 left-0 right-0 w-full max-w-4xl mx-auto px-4 z-50">
          <Link href="/book">
            <div className="bg-pink-500 text-white rounded-2xl p-4 shadow-lg flex justify-between items-center cursor-pointer hover:bg-pink-600 transition">
              <div className="font-bold">{cartCount} Item(s) added</div>
              <div className="font-extrabold flex items-center gap-2">Proceed to Checkout <ArrowLeft size={16} className="rotate-180"/></div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}