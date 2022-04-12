import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/outline';
import Category from './Category';
const Character = ({ character }) => {
    return (
        <Link href={`/characters/${character._id}`}>
        <div className="cursor-pointer bg-green-900 hover:shadow-2xl border-8 border-silver-600 rounded transition">
        <div className="w-full bg-green-900 border-8 border-green-600 h-96 lg:h-96 relative">
        <Image
          src={character.image}
          alt={character.name}
          layout="fill"
          objectFit="fill"
          className="absolute z-0 rounded"
          
        />
         
      
            <button className="absolute z-10 p-2 rounded-full bg-black text-white mx-5 mb-4 hover:bg-green-600 focus:outline-none focus:bg-indigo-500">
              <UserIcon className="w-5 h-5" />
            </button>
          </div>
        
          <div className="px-5 bg-green-900 text-gray-300 py-10 border-4 border-silver-600">
          <h1 className="bg-opacity-90 font-mono uppercase">{character.character_name}</h1>
            <h3 className="bg-opacity-90 font-mono uppercase">{character.category}</h3>
            <span className="bg-opacity-90 font-mono mt-2">{character.attributes}</span>
            <hr className="my-3" />
          <label className="text-gray-400 text-sm" htmlFor="attributess">
            Quick Build : 
          </label>
        <span className="text-white mt-3">{character.quick_build}</span>
          </div>
        </div>
      
      </Link>
    );
  };

export default Character;
