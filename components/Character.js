import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/outline';
import Category from './Category';
const Character = ({ character }) => {
    return (
        <Link href={`/characters/${character._id}`}>
        <div className="w-full max-w-sm p-4 mx-auto rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition">
          <div className="flex items-end justify-end h-screen w-full bg-contain relative">
            <Image
              src={character.image}
              alt={character.character_name}
              layout="fill"
              objectFit="fill"
              className="absolute z-0 border-4 border-zinc-800 rounded"
            />
            <button className="absolute z-10 p-2 rounded-full bg-black text-white mx-5 -mb-4 hover:bg-red-600 focus:outline-none focus:bg-indigo-500">
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
