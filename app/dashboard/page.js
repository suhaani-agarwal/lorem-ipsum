"use client";
import { IoIosNotifications } from "react-icons/io";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";
import React from "react";
import NavbarAfterLogin from "@/components/navbarAfterLogin";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Stay Updated",
    description: "Stay updated to everything, from politics to Bigg Boss",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    photo:"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
  },
  {
    title: "Your points",
    description: "Are you as active as Gupta Aunty??",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    photo:""
  },
  {
    title: "My Community",
    description: "Do anything you wish you had a sister for",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    photo:""

  },
  {
    title: "Ask Anything",
    description:
      "Our ai will answer every question. Keep in mind, the AI cant judge...",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    photo:""
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    photo:""
  },
];

const words = `Hello Suhaani Agarwal`;


const page = () => {
  return (
    <div className='relative bg-rose-100 h-full min-h-screen'>
      <NavbarAfterLogin/>
      <nav className='flex justify-between '>
        <div className='p-3'>
            {/* <button className='text-2xl font-bold'>SukhSaheli</button> */}
        </div>
        <div className='flex gap-10 p-3'>
            {/* <Link href='/'><button className='text-2xl font-bold'>Logout</button></Link>
            <button  className='text-2xl'><IoIosNotifications /></button> */}
        </div>
      </nav>

      <div className='w-screen text-center text-3xl'>
      <TextGenerateEffect words={words} />
      </div>
      {/* <div className="w-screen flex justify-center items-center gap-8 mt-20">
        <button className=" border rounded-xl w-44 h-12 bg-black text-xl text-white font-bold">Create a meet</button>
        <button className=" border rounded-xl w-44 h-12 bg-black text-xl text-white font-bold">Join a meet</button>
        
      </div> */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex justify-center gap-4">
        <Link href='/host'><button className="border-2 border-rose-300 rounded-xl bg-gradient-to-r from-rose-200 to-pink-200 text-xl text-gray-700 font-bold w-64 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
            Be the Host
          </button></Link>
          <div className="relative group">
          <Link href='/join'><button className="border-2 border-sky-300 rounded-xl bg-gradient-to-r from-sky-200 to-indigo-200 text-xl text-gray-700 font-bold w-64 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
              Join as a Member
            </button></Link>
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tambola Night</button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Talent Night</button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dance Workshop</button>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
      <div className="my-10 flex flex-col lg:flex-row gap-6 w-full px-4">
        <div className="lg:w-1/4 bg-gradient-to-br from-amber-400/60 to-orange-500/60 rounded-2xl p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105">
          <h3 className="text-2xl font-bold text-white mb-4">Upcoming Events</h3>
          <ul className="space-y-3 text-white/90">
            <li className="flex items-center text-lg font-semibold text-white">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Tambola Night - Today, 10:00 AM
            </li>
            <li className="flex items-center text-lg font-semibold text-white">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Talent Night - Today, 12:00 PM
            </li>
            <li className="flex items-center text-lg font-semibold text-white">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Dance Workshop - Today, 2:00 PM
            </li>
            <li className="flex items-center text-lg font-semibold text-white">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Karaoke Competition - Today, 4:00 PM
            </li>
            <li className="flex items-center text-lg font-semibold text-white">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Poetry Slam - Today, 6:00 PM
            </li>
            <li className="flex items-center text-lg font-semibold text-white">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Cooking Class - Today, 7:30 PM
            </li>
            <li className="flex items-center text-lg font-semibold text-white">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Yoga Session - Today, 9:00 PM
            </li>
            <li className="flex items-center text-lg font-semibold text-white">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Movie Night - Today, 10:30 PM
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
            <Link href="/sharing">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-400/70 backdrop-blur-sm min-h-[400px] lg:min-h-[250px] transition-all duration-300 hover:shadow-xl hover:scale-105"
              className=""
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-lg lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                  Anonymous Support for Housewives
                </h2>
                <p className="mt-4 text-left text-sm lg:text-base text-neutral-200">
                  Find solutions to your problems in a safe, anonymous space. Connect with other housewives and get the support you need.
                </p>
                <button className="mt-6 bg-white text-pink-600 font-semibold py-2 px-4 rounded-full hover:bg-pink-100 transition-colors duration-300">
                  Join Anonymous Platform
                </button>
              </div>
              {/* <Image
                src="/housewives-support.webp"
                width={400}
                height={400}
                alt="Housewives support illustration"
                className="absolute -right-4 lg:-right-[30%] grayscale filter -bottom-8 object-contain rounded-2xl"
              /> */}
            </WobbleCard>
            </Link>
            <Link href="/stayUpdated"><WobbleCard containerClassName="col-span-1 min-h-[250px] bg-purple-500/60 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105">
              <h2 className="max-w-60 text-left text-balance text-base md:text-lg lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                Stay in the Loop
              </h2>
              <p className="mt-4 max-w-[20rem] text-left text-sm lg:text-base text-neutral-200">
                Get the latest updates on gossip, politics, and more!
              </p>
              <button className="mt-6 bg-white text-purple-600 font-semibold py-2 px-4 rounded-full hover:bg-purple-100 transition-colors duration-300">
                Explore Updates
              </button>
            </WobbleCard></Link>
            <Link href="/supportAI"><WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-pink-600/70 backdrop-blur-sm min-h-[400px] lg:min-h-[500px] xl:min-h-[250px] transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="max-w-xs lg:max-w-sm">
                <h2 className="max-w-xs md:max-w-md text-left text-balance text-base md:text-lg lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                  Ask Anything: Your Personal AI Companion
                </h2>
                <p className="mt-4 max-w-[20rem] text-left text-sm lg:text-base text-neutral-200">
                  Fill the gaps in your life with our intuitive AI. Get answers, advice, and support tailored just for you.
                </p>
                <button className="mt-6 bg-white text-pink-600 font-semibold py-2 px-4 rounded-full hover:bg-pink-100 transition-colors duration-300">
                  Start Chatting Now
                </button>
              </div>
              {/* <Image
                src="/ai-companion.webp"
                width={400}
                height={400}
                alt="AI companion illustration"
                className="absolute -right-8 md:-right-[30%] lg:-right-[15%] -bottom-8 object-contain rounded-2xl"
              /> */}
            </WobbleCard></Link>
          </div>
        </div>
        <div className="lg:w-1/4 bg-gradient-to-br from-cyan-400/60 to-blue-500/60 rounded-2xl p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105">
          <h3 className="text-2xl font-bold text-white mb-4">Community Rankings</h3>
          <ul className="space-y-3 text-white/90">
            <li className="flex items-center justify-between">
              <span className="font-semibold">1. Priyanka C.</span>
              <span className="bg-yellow-400/80 text-yellow-900 px-2 py-1 rounded-full text-xs">5280 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">2. Deepika P.</span>
              <span className="bg-gray-200/80 text-gray-800 px-2 py-1 rounded-full text-xs">5150 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">3. Aishwarya R.</span>
              <span className="bg-orange-400/80 text-orange-900 px-2 py-1 rounded-full text-xs">5020 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">4. Kareena K.</span>
              <span className="bg-green-400/80 text-green-900 px-2 py-1 rounded-full text-xs">4950 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">5. Alia B.</span>
              <span className="bg-blue-400/80 text-blue-900 px-2 py-1 rounded-full text-xs">4900 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">6. Anushka S.</span>
              <span className="bg-purple-400/80 text-purple-900 px-2 py-1 rounded-full text-xs">4850 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">7. Shraddha K.</span>
              <span className="bg-yellow-400/80 text-yellow-900 px-2 py-1 rounded-full text-xs">4800 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">8. Kajol D.</span>
              <span className="bg-gray-200/80 text-gray-800 px-2 py-1 rounded-full text-xs">4750 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">9. Rani M.</span>
              <span className="bg-orange-400/80 text-orange-900 px-2 py-1 rounded-full text-xs">4700 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">10. Madhuri D.</span>
              <span className="bg-pink-400/80 text-pink-900 px-2 py-1 rounded-full text-xs">4650 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">11. Sridevi K.</span>
              <span className="bg-blue-400/80 text-blue-900 px-2 py-1 rounded-full text-xs">4600 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">12. Juhi C.</span>
              <span className="bg-purple-400/80 text-purple-900 px-2 py-1 rounded-full text-xs">4550 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">13. Tabu H.</span>
              <span className="bg-yellow-400/80 text-yellow-900 px-2 py-1 rounded-full text-xs">4500 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">14. Urmila M.</span>
              <span className="bg-gray-200/80 text-gray-800 px-2 py-1 rounded-full text-xs">4450 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">15. Preity Z.</span>
              <span className="bg-orange-400/80 text-orange-900 px-2 py-1 rounded-full text-xs">4400 pts</span>
            </li>
            <li className="flex items-center justify-between bg-green-500/20 p-2 rounded-lg">
              <span className="font-semibold">24. You</span>
              <span className="bg-green-400/80 text-green-900 px-2 py-1 rounded-full text-xs">3750 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">25. Shilpa S.</span>
              <span className="bg-blue-400/80 text-blue-900 px-2 py-1 rounded-full text-xs">3700 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">26. Raveena T.</span>
              <span className="bg-purple-400/80 text-purple-900 px-2 py-1 rounded-full text-xs">3680 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">27. Karisma K.</span>
              <span className="bg-pink-400/80 text-pink-900 px-2 py-1 rounded-full text-xs">3650 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">28. Manisha K.</span>
              <span className="bg-yellow-400/80 text-yellow-900 px-2 py-1 rounded-full text-xs">3620 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">29. Ameesha P.</span>
              <span className="bg-gray-200/80 text-gray-800 px-2 py-1 rounded-full text-xs">3590 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-semibold">30. Mahima C.</span>
              <span className="bg-orange-400/80 text-orange-900 px-2 py-1 rounded-full text-xs">3560 pts</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default page
