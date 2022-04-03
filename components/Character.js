import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/outline';
import Category from './Category';
const Character = ({ character }) => {
    return (
        <Link href={`/characters/${character._id}`}>
        <div className="w-full max-w-lg p-4 rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition">
          <div className="flex items-end justify-end h-screen w-full bg-contain relative">
          
          
            <Image
              className="z-0 border-4 border-zinc-800 rounded"
              src={character.image}
              alt={character.character_name}
              layout="fixed"
              width="400px"
              height="300px"
              objectFit="fill"
            />
            <button className="absolute z-10 p-2 rounded-full bg-black text-white mx-5 mb-4 hover:bg-green-600 focus:outline-none focus:bg-indigo-500">
              <UserIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="px-5 bg-black text-white py-3">
            <h3 className="bg-opacity-40 font-serif text-white uppercase">{character.character_name}</h3>
            <h3 className="bg-opacity-90 font-mono text-white uppercase">{character.category}</h3>
            <span className="bg-opacity-90 font-sans text-white mt-2">{character.attributes}</span>
          </div>
        </div>
      </Link>
    );
  };

export default Character;
