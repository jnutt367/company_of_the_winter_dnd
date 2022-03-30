import React from "react";
import Image from "next/image";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";

const CharacterDetail = ({ character }) => {
  return (
    <div className="md:flex md:items-center">
      <div className="w-full  border-8 bg-black border-zinc-600 h-64 md:w-1/2 lg:h-96 relative">
        <Image
          src={character.image}
          alt={character.name}
          layout="fill"
          objectFit="fill"
          className="absolute z-0 rounded"
        />
      </div>
      <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
        <h3 className="text-gray-700 uppercase text-lg">{character.character_name}</h3>
        <span className="text-gray-500 mt-3">{character.ability_scores}</span>
        <hr className="my-3" />
        <label className="text-black text-sm" htmlFor="weapons">
            Weapons:  
          </label>
        <span className="text-gray-500 mt-3">{character.weapons}</span>
        <hr className="my-3" />
        <span className="text-gray-500 mt-3">{character.player_name}</span>
        <div className="flex items-center mt-6">
          <button className="px-8 py-2 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-500 focus:outline-none focus:bg-green-500">
            Choose Character
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
