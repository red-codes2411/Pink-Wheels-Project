"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    busType: "AC",
    washroom: "Yes",
    seating: "Sleeper",
    preOrder: "None",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Yay! Your safe journey is booked. See you onboard!");
      }
    } catch (err) {
      alert("Something went wrong, please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-soft-white text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-baby-pink p-4 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 relative bg-white rounded-full overflow-hidden border-2 border-hot-pink">
            {/* Make sure logo.png is in the public folder */}
            <Image src="/logo.png" alt="Pink Wheels Logo" fill className="object-cover" />
          </div>
          <h1 className="text-2xl font-bold text-hot-pink tracking-wide">Pink Wheels</h1>
        </div>
        <div className="hidden md:block text-hot-pink font-medium">Safe Transit for Women</div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-12 px-4 bg-gradient-to-b from-baby-pink to-soft-white">
        <h2 className="text-4xl font-extrabold text-hot-pink mb-4">Trichy to Chennai, Safely.</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-6">
          Exclusively for women. Verified drivers, onboard safety measures, and secure Pink Wheels designated rest stops. Travel with peace of mind.
        </p>
        <img 
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop" 
          alt="Comfortable Bus" 
          className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg border-4 border-baby-pink h-64 object-cover"
        />
      </header>

      {/* Booking Form */}
      <main className="max-w-3xl mx-auto p-6 bg-white rounded-3xl shadow-xl border border-baby-pink mt-[-40px] relative z-10 mb-12">
        <h3 className="text-2xl font-bold text-hot-pink mb-6 border-b-2 border-baby-pink pb-2">Customize Your Journey</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Passenger Name</label>
            <input 
              required 
              type="text" 
              className="w-full p-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-hot-pink outline-none" 
              placeholder="Enter your name"
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bus Type */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">AC / Non-AC</label>
              <select 
                className="w-full p-3 border border-pink-200 rounded-xl bg-white"
                onChange={e => setFormData({...formData, busType: e.target.value})}
              >
                <option>AC</option>
                <option>Non-AC</option>
              </select>
            </div>

            {/* Seating */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">Seating Type</label>
              <select 
                className="w-full p-3 border border-pink-200 rounded-xl bg-white"
                onChange={e => setFormData({...formData, seating: e.target.value})}
              >
                <option>Sleeper</option>
                <option>Semi-Sleeper</option>
                <option>Normal Seater</option>
              </select>
            </div>

            {/* Washroom */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">Onboard Washroom</label>
              <select 
                className="w-full p-3 border border-pink-200 rounded-xl bg-white"
                onChange={e => setFormData({...formData, washroom: e.target.value})}
              >
                <option>Yes (With Washroom)</option>
                <option>No (Without Washroom)</option>
              </select>
            </div>
          </div>

          {/* Rest Stop Pre-orders */}
          <div className="bg-baby-pink/30 p-6 rounded-2xl border border-baby-pink mt-6">
            <h4 className="text-xl font-semibold text-hot-pink mb-2">Pink Wheels Safe Rest Stop</h4>
            <p className="text-sm text-gray-600 mb-4">We only stop at our verified, clean, and safe stores. Pre-order your snacks/essentials now so they are ready when we arrive!</p>
            <select 
              className="w-full p-3 border border-pink-200 rounded-xl bg-white"
              onChange={e => setFormData({...formData, preOrder: e.target.value})}
            >
              <option>No Pre-order</option>
              <option>Hot Filter Coffee & Snacks Combo</option>
              <option>Hygiene & Sanitary Kit</option>
              <option>Dinner Meal Box (Veg)</option>
            </select>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-hot-pink text-white font-bold text-lg py-4 rounded-xl hover:bg-pink-600 transition shadow-lg disabled:opacity-50"
          >
            {loading ? "Confirming..." : "Book My Safe Ride"}
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 bg-baby-pink text-gray-800">
        <p className="font-medium text-lg">Made with care by Dhanyataa &lt;3</p>
      </footer>
    </div>
  );
}