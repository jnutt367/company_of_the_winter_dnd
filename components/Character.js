import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/outline';
import Category from './Category';
const Character = ({ character }) => {
    return (
        <Link href={`/characters/${character._id}`}>
        <div className="mt-0 border-8 border-zinc-800 w-full max-w-sm p-4 mx-auto rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition">
          <div className="flex items-end justify-end h-screen w-full bg-cover relative">
          
          <hr></hr>
            <Image
              className="z-0 border-8 border-zinc-800 rounded"
              src={character.image}
              alt={character.character_name}
              layout="fixed"
              width="400px"
              height="400px"
              objectFit="fill"
            />
            <button className="absolute z-10 p-2 rounded-full bg-black text-white mx-5 -mb-4 hover:bg-green-600 focus:outline-none focus:bg-indigo-500">
              <UserIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="px-5 bg-white py-3">
            <h3 className="bg-opacity-40 font-serif text-black uppercase">{character.character_name}</h3>
            <h3 className="bg-opacity-90 font-mono text-black uppercase">{character.category}</h3>
            <span className="bg-opacity-90 font-sans text-black mt-2">{character.attributes}</span>
          </div>
        </div>
      </Link>
    );
  };

export default Character;
