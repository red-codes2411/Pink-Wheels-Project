"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Coffee, CheckCircle2, Loader2, MapPin } from "lucide-react";

export default function CheckoutPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // This simulates an API call to your AWS Database
  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulating network delay for DynamoDB insertion
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000); 
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in duration-500 font-sans">
        <CheckCircle2 size={100} className="text-green-500 mb-6 drop-shadow-md" />
        <h2 className="text-3xl font-black text-gray-900 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600 mb-8 max-w-sm">Your safe transit is secured. Your driver details and Store pre-orders have been saved to the database.</p>
        <Link href="/">
          <button className="bg-pink-500 text-white font-extrabold py-4 px-10 rounded-2xl shadow-lg hover:bg-pink-600 transition">
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-[#f8f9fa] min-h-screen relative pb-32 font-sans">
      <header className="bg-white px-5 py-4 flex items-center gap-4 sticky top-0 z-50 shadow-sm">
        <Link href="/" className="p-2 bg-pink-50 rounded-full text-gray-700 hover:text-pink-500"><ArrowLeft size={20} /></Link>
        <h1 className="text-lg font-black text-gray-900 tracking-tight">Review Booking</h1>
      </header>

      <main className="px-4 mt-4 space-y-4 max-w-2xl mx-auto">
        
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start border-b border-dashed border-gray-200 pb-4 mb-4">
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Premium AC Sleeper</h3>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-1"><MapPin size={12}/> Trichy ➔ Chennai</p>
            </div>
            <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-lg text-xs font-bold uppercase">1 Seat</div>
          </div>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm font-semibold text-gray-700">Verified On-board Washroom</span>
            <input type="checkbox" defaultChecked className="w-5 h-5 accent-pink-500 rounded" />
          </label>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Coffee size={18} className="text-pink-500"/> Safe Rest Stop Pre-orders
          </h3>
          <div className="flex items-center justify-between bg-pink-50 border border-pink-100 p-3 rounded-2xl">
            <div className="flex items-center gap-3">
               <div className="text-2xl">☕</div>
               <div>
                 <p className="text-sm font-bold text-gray-800">Filter Coffee Combo</p>
                 <p className="text-xs text-gray-500">Ready upon arrival</p>
               </div>
            </div>
            <span className="text-pink-600 font-extrabold text-sm">₹60</span>
          </div>
          <Link href="/store" className="block text-center mt-3 text-sm font-bold text-pink-500 hover:underline">
            + Add more from store
          </Link>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4">Bill Details</h3>
          <div className="space-y-2 text-sm text-gray-600 border-b border-dashed border-gray-200 pb-3 mb-3">
            <div className="flex justify-between"><span>Ticket Fare</span><span>₹850</span></div>
            <div className="flex justify-between"><span>Pre-orders</span><span>₹60</span></div>
            <div className="flex justify-between"><span>Safety Fee & Taxes</span><span>₹45</span></div>
          </div>
          <div className="flex justify-between font-black text-gray-900 text-lg">
            <span>To Pay</span><span>₹955</span>
          </div>
        </div>

      </main>

      {/* Fixed Checkout Bar - Fully Working */}
      <div className="fixed bottom-0 w-full max-w-4xl mx-auto bg-white p-4 rounded-t-3xl shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.15)] z-50">
        <button 
          onClick={handlePayment}
          disabled={isProcessing}
          className="w-full flex items-center justify-between bg-pink-500 text-white rounded-2xl p-1 pr-2 pl-6 h-14 shadow-lg shadow-pink-200 transition-all hover:bg-pink-600 disabled:bg-pink-300"
        >
          <div className="flex flex-col text-left">
            <span className="font-black text-lg leading-tight">₹955</span>
            <span className="text-[10px] font-bold text-pink-100 uppercase tracking-wider">Total Amount</span>
          </div>
          <div className="bg-white text-pink-600 h-11 px-8 rounded-xl font-extrabold flex items-center justify-center gap-2">
            {isProcessing ? (
              <><Loader2 className="animate-spin" size={18} /> SECURING...</>
            ) : (
              <>PAY SECURELY</>
            )}
          </div>
        </button>
      </div>

    </div>
  );
}