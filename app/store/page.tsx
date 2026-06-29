"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";

export default function StorePage() {
  // Swiggy style item tracking: { "Item Name": quantity }
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const items = [
    { name: "Filter Coffee Combo", price: 60, img: "☕", desc: "Hot coffee + biscuits. Ready at the next stop." },
    { name: "Sanitary Care Kit", price: 45, img: "🌸", desc: "Pads, wipes, and sanitizer." }, // Price fixed
    { name: "Pepper Spray", price: 250, img: "🛡️", desc: "Pink Wheels verified safety essential." },
    { name: "Mineral Water (1L)", price: 20, img: "💧", desc: "Chilled and sealed." }
  ];

  const updateCart = (itemName: string, delta: number) => {
    setCart(prev => {
      const current = prev[itemName] || 0;
      const next = Math.max(0, current + delta);
      const newCart = { ...prev, [itemName]: next };
      if (next === 0) delete newCart[itemName];
      return newCart;
    });
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = items.reduce((sum, item) => sum + (cart[item.name] || 0) * item.price, 0);

  return (
    <div className="max-w-4xl mx-auto bg-[#f8f9fa] min-h-screen relative pb-32 font-sans shadow-xl">
      <header className="bg-white px-5 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm border-b border-pink-100">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 bg-pink-50 rounded-full text-gray-700 hover:text-pink-500 transition"><ArrowLeft size={20} /></Link>
          <h1 className="text-xl font-black text-gray-900 tracking-tight">Pink Wheels Store</h1>
        </div>
        <div className="relative">
          <ShoppingBag className="text-gray-800" size={24} />
          {totalItems > 0 && <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">{totalItems}</span>}
        </div>
      </header>

      <main className="px-5 mt-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Pre-order for your journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-pink-50 flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="text-3xl bg-pink-50 p-3 rounded-xl border border-pink-100">{item.img}</div>
                <div>
                  <h3 className="font-bold text-gray-900 leading-tight">{item.name}</h3>
                  <p className="text-xs text-gray-500 mb-1 line-clamp-1">{item.desc}</p>
                  <p className="font-extrabold text-pink-600">₹{item.price}</p>
                </div>
              </div>
              
              {/* Swiggy Style Add/Remove Buttons */}
              <div className="w-24 flex justify-end">
                {cart[item.name] ? (
                  <div className="flex items-center justify-between w-full bg-pink-50 border border-pink-200 text-pink-600 rounded-lg px-2 py-1.5 shadow-sm">
                    <button onClick={() => updateCart(item.name, -1)} className="font-black text-lg px-2 hover:scale-125 transition">-</button>
                    <span className="font-bold text-sm">{cart[item.name]}</span>
                    <button onClick={() => updateCart(item.name, 1)} className="font-black text-lg px-2 hover:scale-125 transition">+</button>
                  </div>
                ) : (
                  <button onClick={() => updateCart(item.name, 1)} className="bg-white border border-pink-200 text-pink-600 font-extrabold text-xs px-5 py-2 rounded-lg shadow-sm hover:bg-pink-50 transition w-full">
                    ADD +
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {totalItems > 0 && (
        <div className="fixed bottom-4 left-0 right-0 w-full max-w-4xl mx-auto px-4 z-50">
          <Link href={`/book?preorderTotal=${totalPrice}`}>
            <div className="bg-pink-500 text-white rounded-2xl p-4 shadow-xl shadow-pink-200 flex justify-between items-center cursor-pointer hover:bg-pink-600 transition-colors">
              <div className="flex flex-col">
                <span className="font-bold text-sm">{totalItems} Item(s) added</span>
                <span className="font-black">₹{totalPrice}</span>
              </div>
              <div className="font-extrabold flex items-center gap-2">Checkout <ArrowLeft size={16} className="rotate-180"/></div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}