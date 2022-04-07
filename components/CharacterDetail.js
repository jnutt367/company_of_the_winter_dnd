import React from "react";
import Image from "next/image";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";

const CharacterDetail = ({ character }) => {
  return (
    <div className="md:flex md:items-center bg-white">
    
      <div className="w-full bg-green-900 border-8 border-green-600 h-96 md:w-1/2 lg:h-96 relative">
        <Image
          src={character.image}
          alt={character.name}
          layout="fill"
          objectFit="contain"
          className="absolute z-0 rounded"
          
        />
         
      </div>
      <div className="w-full font-mono bg-green-100 max-w-lg px-4 mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
      <h3 className="text-black font-mono uppercase text-lg">{character.category}</h3>
        <h3 className="text-gray-700 uppercase text-lg">{character.character_name}</h3>
        <hr className="my-3" />
        <label className="text-black text-sm" htmlFor="weapons">
            Ability Scores : 
          </label>
        <span className="text-gray-500 mt-3">{character.ability_scores}</span>
        <hr className="my-3" />
        <label className="text-black text-sm" htmlFor="ability Scores">
            Weapons :  
          </label>
        <span className="text-gray-500 mt-3">{character.weapons}</span>
        <hr className="my-3" />
        <label className="text-black text-sm" htmlFor="attributess">
            Attributes : 
          </label>
        <span className="text-gray-500 mt-3">{character.attributes}</span>

        <hr className="my-3" />
          <label className="text-black text-sm" htmlFor="attributess">
            Quick Build : 
          </label>
        <span className="text-gray-500 mt-3">{character.quick_build}</span>
        <hr className="my-3" />
        <div className="flex items-center mt-6">
          <button className="px-8 py-2 bg-green-800 text-white text-sm font-medium rounded hover:bg-green-600 focus:outline-none focus:bg-red-500">
            Add to Party
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
