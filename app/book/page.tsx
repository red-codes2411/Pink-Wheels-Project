"use client";
import Link from "next/link";
import { ArrowLeft, PercentCircle, Coffee, ShieldCheck } from "lucide-react";

export default function CheckoutPage() {
  return (
    <div className="max-w-md mx-auto bg-[#f8f9fa] min-h-screen relative pb-32 font-sans">
      
      {/* Minimal Header */}
      <header className="bg-white px-5 py-4 flex items-center gap-4 sticky top-0 z-50 shadow-sm">
        <Link href="/">
          <ArrowLeft className="text-gray-800" size={24} />
        </Link>
        <h1 className="text-lg font-black text-gray-900 tracking-tight">Review Booking</h1>
      </header>

      <main className="px-4 mt-4 space-y-4">
        
        {/* Ticket Details Card */}
        <div className="bg-white p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex justify-between items-start border-b border-dashed border-gray-200 pb-4 mb-4">
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Premium AC Sleeper</h3>
              <p className="text-sm text-gray-500 mt-1">Trichy ➔ Chennai</p>
            </div>
            <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-lg text-xs font-bold uppercase">
              1 Seat
            </div>
          </div>
          
          <label className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-700">Verified On-board Washroom</span>
            <input type="checkbox" defaultChecked className="w-5 h-5 accent-pink-500 rounded" />
          </label>
        </div>

        {/* Pre-order Add-ons (Instamart style) */}
        <div className="bg-white p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Coffee size={18} className="text-pink-500"/> Safe Rest Stop Pre-orders
          </h3>
          <div className="flex items-center justify-between bg-pink-50/50 border border-pink-100 p-3 rounded-2xl">
            <div className="flex items-center gap-3">
               <div className="text-2xl">☕</div>
               <div>
                 <p className="text-sm font-bold text-gray-800">Filter Coffee Combo</p>
                 <p className="text-xs text-gray-500">Ready upon arrival</p>
               </div>
            </div>
            <button className="bg-white border border-pink-200 text-pink-600 font-extrabold text-xs px-4 py-1.5 rounded-lg shadow-sm">
              ADD +
            </button>
          </div>
        </div>

        {/* Offers Section */}
        <div className="bg-white p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-100 flex justify-between items-center cursor-pointer">
          <div className="flex items-center gap-3">
            <PercentCircle className="text-pink-500" size={24} />
            <div>
              <p className="font-bold text-gray-900 text-sm">Apply Coupon</p>
              <p className="text-xs text-gray-500">Save on your safe transit</p>
            </div>
          </div>
          <span className="text-pink-500 font-bold text-sm">View &gt;</span>
        </div>

        {/* Bill Details */}
        <div className="bg-white p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h3 className="font-bold text-gray-900 mb-4">Bill Details</h3>
          <div className="space-y-2 text-sm text-gray-600 border-b border-dashed border-gray-200 pb-3 mb-3">
            <div className="flex justify-between"><span>Ticket Fare</span><span>₹850</span></div>
            <div className="flex justify-between"><span>Safety Fee & Taxes</span><span>₹45</span></div>
          </div>
          <div className="flex justify-between font-black text-gray-900 text-lg">
            <span>To Pay</span><span>₹895</span>
          </div>
        </div>

      </main>

      {/* Fixed Checkout Bar (Swiggy Style) */}
      <div className="fixed bottom-0 w-full max-w-md bg-white p-4 rounded-t-3xl shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.15)] z-50">
        <div className="flex items-center justify-between bg-pink-500 text-white rounded-2xl p-1 pr-1.5 pl-5 h-14 shadow-lg shadow-pink-200 cursor-pointer hover:bg-pink-600 transition-colors">
          <div className="flex flex-col">
            <span className="font-black text-lg leading-tight">₹895</span>
            <span className="text-[10px] font-bold text-pink-100 uppercase tracking-wider">Total Amount</span>
          </div>
          <div className="bg-white text-pink-600 h-11 px-6 rounded-xl font-extrabold flex items-center justify-center gap-2">
            SLIDE TO PAY <span className="text-xl">&rarr;</span>
          </div>
        </div>
      </div>

    </div>
  );
}