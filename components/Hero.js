import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
const Hero = () => {
    return (
      
        <div className="h-96 max-w-5xl mx-auto rounded-md overflow-hidden bg-cover bg-center relative">
        
         <Image
          src="/images/company_winter.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="bg-red-600 bg-opacity-40 flex items-center h-full absolute w-full z-10">
          <div className="px-10 max-w-xl my-10">
            <h2 className="bg-slate-900 bg-opacity-30 font-serif text-2xl text-white font-semibold">Create & Alter Existing Characters</h2>
            <p className="bg-red-900 bg-opacity-50 mt-2 text-white">
            This is a great app for anyone wanting to make a new Character or pick one that I've already made for their D & D Campaign or RPG fantasy game.
            Their are pre-defined fields and the ability to add new fields as you see fit. And all of the Character's data will be kept for you if you have authenticated yourself with a UserName & Password.
             </p>
            <Link href={`/characters`}>
              <button className="font-serif flex items-center mt-4 px-3 py-2 bg-black text-white text-sm uppercase font-medium rounded hover:bg-red-500 focus:outline-none focus:bg-green-500">
                <span>See Existing Characters</span>
                <ArrowNarrowRightIcon className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  
