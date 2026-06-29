"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Coffee, CheckCircle2, Loader2, MapPin, Car } from "lucide-react";

// Component that reads URL params
function BookingContent() {
  const searchParams = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Read dynamic details from URL (defaults to Bus if nothing is clicked)
  const isCab = searchParams.get("type") === "cab";
  const rideName = searchParams.get("name") || (isCab ? "Private Pink Cab" : "Premium AC Sleeper");
  const ticketFare = parseInt(searchParams.get("price") || (isCab ? "2100" : "850"));
  const preOrdersFare = parseInt(searchParams.get("preorderTotal") || "60"); // 60 default for demo
  const safetyFee = 45;
  const totalAmount = ticketFare + preOrdersFare + safetyFee;

  const handlePayment = async () => {
    setIsProcessing(true);
    setTimeout(() => { setIsProcessing(false); setIsSuccess(true); }, 2000); 
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6 text-center">
        <CheckCircle2 size={100} className="text-green-500 mb-6 drop-shadow-md" />
        <h2 className="text-3xl font-black text-gray-900 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600 mb-8 max-w-sm">Your safe transit is secured. Data successfully saved to AWS.</p>
        <Link href="/"><button className="bg-pink-500 text-white font-extrabold py-4 px-10 rounded-2xl shadow-lg hover:bg-pink-600 transition">Back to Home</button></Link>
      </div>
    );
  }

  return (
    <>
      <header className="bg-white px-5 py-4 flex items-center gap-4 sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <Link href="/" className="p-2 bg-pink-50 rounded-full text-gray-700 hover:text-pink-500 transition"><ArrowLeft size={20} /></Link>
        <h1 className="text-lg font-black text-gray-900 tracking-tight">Review Booking</h1>
      </header>

      <main className="px-4 mt-6 space-y-5">
        
        {/* Dynamic Ride Details Card */}
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-pink-50">
          <div className="flex justify-between items-start border-b border-dashed border-gray-200 pb-4 mb-4">
            <div>
              <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                {isCab ? <Car className="text-pink-500" size={20}/> : null} {rideName}
              </h3>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-1"><MapPin size={12}/> Route Confirmed</p>
            </div>
            <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
              {isCab ? "Private" : "1 Seat"}
            </div>
          </div>
          
          <label className="flex items-center justify-between cursor-pointer group">
            <span className="text-sm font-semibold text-gray-700 group-hover:text-pink-600 transition">{isCab ? "Female Driver Guaranteed" : "Verified On-board Washroom"}</span>
            <input type="checkbox" defaultChecked className="w-5 h-5 accent-pink-500 rounded cursor-pointer" />
          </label>
        </div>

        {/* Store Card */}
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-pink-50">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Coffee size={18} className="text-pink-500"/> Safe Pre-orders
          </h3>
          <div className="flex items-center justify-between bg-pink-50/50 border border-pink-100 p-3 rounded-2xl">
            <div className="flex items-center gap-3">
               <div className="text-2xl bg-white p-2 rounded-xl shadow-sm">🛍️</div>
               <div>
                 <p className="text-sm font-bold text-gray-800">Store Items Added</p>
                 <p className="text-xs text-gray-500">Ready upon arrival</p>
               </div>
            </div>
            <span className="text-pink-600 font-extrabold text-sm">₹{preOrdersFare}</span>
          </div>
          <Link href="/store" className="block text-center mt-4 text-sm font-bold text-pink-500 hover:underline">
            + Edit store items
          </Link>
        </div>

        {/* Bill Details */}
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-pink-50">
          <h3 className="font-bold text-gray-900 mb-4">Bill Details</h3>
          <div className="space-y-3 text-sm text-gray-600 border-b border-dashed border-gray-200 pb-4 mb-4">
            <div className="flex justify-between"><span>{isCab ? "Cab Fare" : "Ticket Fare"}</span><span className="font-medium text-gray-900">₹{ticketFare}</span></div>
            <div className="flex justify-between"><span>Pre-orders</span><span className="font-medium text-gray-900">₹{preOrdersFare}</span></div>
            <div className="flex justify-between"><span>Safety Fee & Taxes</span><span className="font-medium text-gray-900">₹{safetyFee}</span></div>
          </div>
          <div className="flex justify-between font-black text-gray-900 text-xl">
            <span>To Pay</span><span className="text-pink-600">₹{totalAmount}</span>
          </div>
        </div>
      </main>

      {/* FIXED ALIGNMENT BOTTOM BAR - centered perfectly */}
      <div className="fixed bottom-0 left-0 right-0 w-full max-w-2xl mx-auto bg-white p-4 rounded-t-3xl shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.15)] z-50">
        <button onClick={handlePayment} disabled={isProcessing} className="w-full flex items-center justify-between bg-pink-500 text-white rounded-2xl p-1.5 pr-2 pl-6 h-14 shadow-lg shadow-pink-200 transition-all hover:bg-pink-600 disabled:bg-pink-300">
          <div className="flex flex-col text-left">
            <span className="font-black text-lg leading-tight">₹{totalAmount}</span>
            <span className="text-[10px] font-bold text-pink-100 uppercase tracking-wider">Total Amount</span>
          </div>
          <div className="bg-white text-pink-600 h-11 px-8 rounded-xl font-extrabold flex items-center justify-center gap-2">
            {isProcessing ? <><Loader2 className="animate-spin" size={18} /> SECURING</> : "PAY SECURELY"}
          </div>
        </button>
      </div>
    </>
  );
}

// Next.js requires useSearchParams to be wrapped in a Suspense boundary
export default function CheckoutPage() {
  return (
    <div className="max-w-2xl mx-auto bg-[#f8f9fa] min-h-screen relative pb-32 font-sans shadow-2xl">
      <Suspense fallback={<div className="p-8 text-center text-pink-500 font-bold">Loading secure checkout...</div>}>
        <BookingContent />
      </Suspense>
    </div>
  );
}