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
        <div className="bg-indigo-900 bg-opacity-40 flex items-center h-full absolute w-full z-10">
          <div className="px-10 max-w-xl my-10">
            <h2 className="bg-indigo-900 bg-opacity-30 font-serif text-2xl text-white font-semibold">The Forgotten Realms</h2>
            <p className="mt-2 text-white">
            A dark cloud of uncertainty envelops the land as the swarm of dragons seems to increase and circle like sharks of the sky over the land. <i className="font-mono text-green-100"> The Company, a rag tag group of miscellaneously skilled adventurers (Not perfectly resembling but similarly configured to the group we played as kids)</i> , is voluntered out of necessity to get to the bottom of what could be making these Dragons so interested in devouring the town of Waterdeep. 
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
  
