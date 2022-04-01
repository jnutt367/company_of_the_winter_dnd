import React from 'react'
import Image from "next/image";
import {
    XIcon,
    PlusCircleIcon,
    ArrowNarrowRightIcon,
} from "@heroicons/react/outline";
const Group = ({ isGroupOpen, setIsGroupOpen }) => {
    return (
      <div
        className={`${
          isGroupOpen ? "translate-x-0 ease-out" : "translate-x-full ease-in"
        } fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-black border-l-2 border-gray-300 z-20`}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-medium text-white">Characters in Adventuring Party</h3>
          <button className="text-red-600 focus:outline-none">
            <XIcon
              onClick={() => setIsGroupOpen(!isGroupOpen)}
              className="h-5 w-5"
            />
          </button>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between mt-6">
          <div className="flex">
            <Image
              src="/images/brian_bard.jpg"
              height={170}
              width={180}
              objectFit="fill"
              className="rounded"
              alt="DnD Character"
            />
            <div className="mx-3">
              <h3 className="text-sm text-white">Brucey the "Mightiest"</h3>
              <div className="flex items-center mt-2">
                <button className="text-white focus:outline-none focus:text-white">
                  <PlusCircleIcon className="h-5 w-5" />
                </button>
                <span className="text-white mx-2">1</span>
                <button className="text-white focus:outline-none focus:text-indigo-600">
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <span className="text-white">Lvl 10 Barbarian</span>
        </div>
        <div className="flex justify-between mt-6">
          <div className="flex">
          <Image
              src="/images/brian_druid.jpg"
              height={200}
              width={150}
              objectFit="cover"
              className="rounded"
              alt="A D&D Character"
            />
            <div className="mx-3">
              <h3 className="text-sm text-white">Bleather Tarbuckle</h3>
              <div className="flex items-center mt-2">
                <button className="text-white focus:outline-none focus:text-indigo-600">
                  <PlusCircleIcon className="h-5 w-5" />
                </button>
                <span className="text-white mx-2">2</span>
                <button className="text-white focus:outline-none focus:text-indigo-600">
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <span className="text-white">Lvl 18 Monk</span>
        </div>
        <div className="flex justify-between mt-6">
          <div className="flex">
            <Image
              src="/images/brian_thief.jpg"
              height={200}
              width={100}
              objectFit="cover"
              className="rounded"
              alt="A D&D Character"
            />
            <div className="mx-3">
              <h3 className="text-sm text-white">Molechu</h3>
              <div className="flex items-center mt-2">
                <button className="text-white focus:outline-none focus:text-indigo-600">
                  <PlusCircleIcon className="h-5 w-5" />
                </button>
                <span className="text-white mx-2">3</span>
                <button className="text-white focus:outline-none focus:text-indigo-600">
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <span className="text-white">Lvl 19 Magic User</span>
        </div>
        <div className="mt-8">
          <form className="flex items-center justify-center">
            <input
              className="form-input w-48"
              type="text"
              placeholder="Character Name"
            />
            <button className="ml-3 flex items-center px-3 py-2 bg-red-600 text-white text-sm uppercase font-medium rounded hover:bg-gray-500 focus:outline-none focus:bg-green-500">
              <span>Characters</span>
            </button>
          </form>
        </div>
        <a href="https://roll-a-rama-random-encounters.vercel.app/" className="flex items-center justify-center mt-4 px-3 py-2 bg-red-600 text-white text-sm uppercase font-medium rounded hover:bg-gray-500 focus:outline-none focus:bg-green-500 cursor-pointer">
          <span>Roll for Scores</span>
          <ArrowNarrowRightIcon className="w-5 h-5" />
        </a>
      </div>
    );
  };
  
  export default Group;
 
  