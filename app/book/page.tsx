"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Coffee, Bus, CheckCircle2 } from "lucide-react";

export default function BookRide() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API delay for smoothness
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <CheckCircle2 size={80} className="text-green-500 mb-6" />
        <h2 className="text-3xl font-black text-gray-800 mb-2 text-center">Booking Confirmed!</h2>
        <p className="text-gray-500 mb-8 text-center">Your safe transit is secured. We will see you at the boarding point.</p>
        <Link href="/">
          <button className="bg-pink-500 text-white font-bold py-3 px-8 rounded-2xl shadow-lg hover:bg-pink-600 transition">
            Back to Home
          </button>
        </Link>
        <p className="mt-12 text-pink-400 font-medium">Made with care by Dhanyataa &lt;3</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      <header className="bg-white p-4 shadow-sm flex items-center gap-4 sticky top-0 z-50">
        <Link href="/" className="text-gray-500 hover:text-pink-500 bg-pink-50 p-2 rounded-full">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-xl font-bold text-gray-800">Review & Book</h1>
      </header>

      <main className="max-w-2xl mx-auto px-4 mt-6">
        <form onSubmit={handleBooking} className="space-y-6">
          
          {/* Ride Details Card */}
          <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-50">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Bus className="text-pink-500" /> Preferences
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-600 ml-1">On-board Washroom</label>
                <select className="w-full mt-1 bg-pink-50/50 border border-pink-100 text-gray-800 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-400 appearance-none">
                  <option>Required (Clean & Verified)</option>
                  <option>Not Required</option>
                </select>
              </div>
            </div>
          </div>

          {/* Pre-order Store Card */}
          <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-50">
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Coffee className="text-pink-500" /> Safe Stop Pre-orders
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Pre-order snacks from our verified Pink Wheels rest stops. They will be ready when you arrive!
            </p>
            
            {/* Quick Select Options */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="border border-pink-100 rounded-2xl p-3 flex flex-col items-center justify-center cursor-pointer hover:bg-pink-50 transition text-center">
                <span className="text-2xl mb-1">☕</span>
                <span className="text-sm font-bold text-gray-700">Filter Coffee</span>
                <span className="text-xs text-pink-500">+ ₹40</span>
              </div>
              <div className="border border-pink-100 rounded-2xl p-3 flex flex-col items-center justify-center cursor-pointer hover:bg-pink-50 transition text-center">
                <span className="text-2xl mb-1">🌸</span>
                <span className="text-sm font-bold text-gray-700">Sanitary Care Kit</span>
                <span className="text-xs text-pink-500">+ ₹60</span>
              </div>
            </div>

            <textarea 
              className="w-full bg-pink-50/50 border border-pink-100 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-800 resize-none placeholder-gray-400"
              rows={2}
              placeholder="Any specific requests or other items?"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white text-lg font-bold py-4 rounded-2xl shadow-lg shadow-pink-200 transition-all flex justify-center items-center h-14"
          >
            {loading ? "Processing Secure Payment..." : "Slide to Pay ₹850"}
          </button>
        </form>

        <footer className="text-center py-10 text-pink-400 font-medium">
          Made with care by Dhanyataa &lt;3
        </footer>
      </main>
    </div>
  );
}