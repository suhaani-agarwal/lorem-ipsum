import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/navbar";

export default function Home() {
  return (

    <div className="bg-gradient-to-br from-rose-100 to-pink-200 w-screen h-screen">
      <Navbar/>
      {/* <div className="p-5 text-3xl font-bold text-rose-600">SukhSaheli</div> */}
      <div className="relative left-20 top-20 text-6xl text-gray-800 font-bold w-[60%] leading-tight">
        Your Companion in Life's Colorful Moments
      </div>
      <div className="relative left-20 top-28 text-xl text-gray-700 w-[70%] leading-relaxed backdrop-blur-sm bg-white/30 p-6 rounded-lg shadow-lg">
        In the vibrant tapestry of daily life, 'SukhSaheli' emerges as your trusted confidante, transforming fleeting moments into bursts of joy and self-discovery. We offer a modern sanctuary where you can reconnect with forgotten passions, unleash your creativity, and find serenity amidst the whirlwind of responsibilities. Through our carefully curated activities and inspirations, we help you infuse each day with renewed purpose and energy, elevating even the most routine tasks into meaningful experiences. Let 'SukhSaheli' be your guide to rediscovering the magic in your everyday life, painting each moment with colors of fulfillment and happiness.
      </div>
      <div className="relative left-20 top-36 bg-rose-500 text-white w-[200px] h-12 text-center font-bold rounded-full flex items-center justify-center hover:bg-rose-600 transition duration-300 shadow-md">
        <button><Link href='/login' className="text-lg">Begin Your Journey</Link></button>
      </div>
    </div>
  );
}
