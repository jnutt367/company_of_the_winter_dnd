import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/outline';
import Category from './Category';
const Character = ({ character }) => {
    return (
        <Link href={`/characters/${character._id}`}>
        <div className="cursor-pointer hover:shadow-2xl border-rounded transition">
          <div className="flex items-end justify-end h-screen w-full bg-contain relative">
          
          
            <Image
              className="z-0 border-4 py-10"
              src={character.image}
              alt={character.character_name}
              layout="fill"
              width="400px"
              height="400px"
              objectFit="fill"
              objectPosition="50% 50%"
            />
            <button className="absolute z-10 p-2 rounded-full bg-black text-white mx-5 mb-4 hover:bg-green-600 focus:outline-none focus:bg-indigo-500">
              <UserIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="px-5 bg-white text-black py-10 border-4 border-green-400">
            <h3 className="bg-opacity-40 font-serif uppercase">{character.character_name}</h3>
            <h3 className="bg-opacity-90 font-mono uppercase">{character.category}</h3>
            <span className="bg-opacity-90 font-sans mt-2">{character.attributes}</span>
          </div>
        </div>
      </Link>
    );
  };

export default Character;
