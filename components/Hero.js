import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
const Hero = () => {
    return (
      
        <div className="h-96 max-w-5xl mx-auto rounded-md overflow-hidden bg-cover bg-center relative">
        
         <Image
          src="/images/Angelica-Overview-Landscape-Map.jpeg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="bg-indigo-900 bg-opacity-40 flex items-center h-full absolute w-full z-10">
          <div className="px-10 max-w-xl my-10">
            <h2 className="bg-indigo-900 bg-opacity-30 font-serif text-2xl text-white font-semibold">The Lost Land of Angelica</h2>
            <p className="bg-indigo-900 bg-opacity-50 mt-2 text-white">
            A dark cloud of uncertainty envelops the land as the swarm of dragons seems to increase & circle like sharks of the sky over the land. <i className="font-mono text-green-100"> Your Company,</i> is voluntered to investigate what could be making Dragons interested in Angelica. 
            </p>
            <Link href={`/characters`}>
              <button className="font-serif flex items-center mt-4 px-3 py-2 bg-indigo-600 text-white text-sm uppercase font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                <span>Choose your Characters</span>
                <ArrowNarrowRightIcon className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  
