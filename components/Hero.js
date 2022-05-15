import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
const Hero = () => {
    return (
      
        <div className="h-96 border-double font-sans border-4 border-green-100 max-w-2xl mx-auto mt-20 overflow-hidden  rounded-lg bg-cover bg-center relative">
        
         <Image
          src="/images/brian_bg_giant_wizard.jpeg"
          alt="Hero Image"
          layout="fill"
          objectFit="fill"
          className="absolute z-0"
        />
        <div className="bg-black bg-opacity-30 flex items-center h-full absolute w-full z-10">
          <div className="px-10 max-w-xl my-10">
            <h2 className="bg-slate-900 bg-opacity-90 font-sans text-2xl text-white font-bold">Choose 3 Characters</h2>
            
            <Link href={`/characters`}>
              <button className="font-sans flex items-center mt-4 ml-10 px-3 py-2 bg-black text-white text-sm uppercase font-medium rounded hover:bg-green-800 focus:outline-none focus:bg-red-500">
                <span>Characters</span>
                <ArrowNarrowRightIcon className="w-5 h-5" />
              </button>
            </Link>
            <Link href={`https://www.lightheartadventures.com/dungeon-master-tips/ten-random-dd-encounter-ideas/`}>
              <button className="font-mono flex items-center mt-4 ml-10 px-3 py-2 bg-green-900 text-white text-sm uppercase font-medium rounded hover:bg-green-800 focus:outline-none focus:bg-green-500">
                <span>Go on an Encounter</span>
                <ArrowNarrowRightIcon className="w-5 h-5" />
              </button>
            </Link>
            

          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  
