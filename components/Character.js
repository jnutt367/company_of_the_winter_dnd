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
              objectFit="cover"
              className="absolute z-0"
            />
            <button className="absolute z-10 p-2 rounded-full bg-indigo-600 text-white mx-5 -mb-4 hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
              <UserIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="px-5 py-3">
            <h3 className="text-white uppercase">{character.character_name}</h3>
            <h3 className="text-white uppercase">{character.category}</h3>
            <span className="text-white mt-2">{character.ability_scores}</span>
          </div>
        </div>
      </Link>
    );
  };

export default Character;
