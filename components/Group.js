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
          <h3 className="text-2xl font-mono text-white">Characters in Adventuring Party</h3>
          <button className="text-green-600 focus:outline-none">
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
              height={230}
              width={200}
              objectFit="cover"
              className="rounded-b-full"
              alt="A D&D Character"
            />
            <div className="mx-3 font-mono">
              <h3 className="text-sm text-white">Bard</h3>
              <div className="flex items-center mt-2">
                <button className="text-white focus:outline-none focus:text-green-600">
                  <PlusCircleIcon className="h-5 w-5" />
                </button>
                <span className="text-white mx-2">1</span>
                <button className="text-white focus:outline-none focus:text-green-600">
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <span className="text-white">Lvl: 1 Bard</span>
        </div>
        <div className="flex justify-between mt-6">
          <div className="flex">
          <Image
              src="/images/brian_druid.jpg"
              height={240}
              width={200}
              objectFit="cover"
              className="rounded-b-full"
              alt="A D&D Character"
            />
            <div className="mx-3">
              <h3 className="text-sm text-white">Druid</h3>
              <div className="flex items-center mt-2">
                <button className="text-white focus:outline-none focus:text-green-600">
                  <PlusCircleIcon className="h-5 w-5" />
                </button>
                <span className="text-white mx-2">1</span>
                <button className="text-white focus:outline-none focus:text-green-600">
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <span className="text-white">Lvl: 1 Druid</span>
        </div>
        <div className="flex justify-between mt-6">
          <div className="flex">
            <Image
              src="/images/brian_thief.jpg"
              height={240}
              width={200}
              objectFit="cover"
              className="rounded-b-full"
              alt="A D&D Character"
            />
            <div className="mx-3">
              <h3 className="text-sm text-white">Rogue</h3>
              <div className="flex items-center mt-2">
                <button className="text-white focus:outline-none focus:text-green-600">
                  <PlusCircleIcon className="h-5 w-5" />
                </button>
                <span className="text-white mx-2">1</span>
                <button className="text-white focus:outline-none focus:text-green-600">
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <span className="text-white">Lvl: 1 Rogue</span>
        </div>
        <div className="mt-8">
          <form className="flex items-center justify-center">
            <input
              className="ml-6 form-input w-48"
              type="text"
              placeholder="Choose Character"
            />
            <button className="ml-2 flex items-center mr-4 px-3 py-2 bg-green-600 text-white text-sm uppercase font-medium rounded hover:bg-green-900 focus:outline-none focus:bg-green-900">
              <span>Encounters</span>
              <ArrowNarrowRightIcon className="w-5 h-5" />
            </button>
          </form>
        </div>
        <a href="https://roll-a-rama-random-encounters.vercel.app/" className="flex items-center justify-center mt-4 px-3 py-2 bg-green-600 text-white text-sm uppercase font-medium rounded hover:bg-green-900 focus:outline-none focus:bg-green-500 cursor-pointer">
          <span>Roll for Scores</span>
          <ArrowNarrowRightIcon className="w-5 h-5" />
        </a>
      </div>
    );
  };
  
  export default Group;
 
  