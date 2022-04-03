import React from 'react'
import Image from 'next/dist/client/image'
import Link from "next/link";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";


const Category = ({ category, categoryCount }) => {
    return (
        <>
        <div className="bg w-auto rounded-lg">
        <Link href={`https://www.lightheartadventures.com/dungeon-master-tips/ten-random-dd-encounter-ideas/`}>
              <button className="font-serif flex items-center mt-4 px-3 py-2 bg-green-500 text-white text-sm uppercase font-medium rounded hover:bg-green-800 focus:outline-none focus:bg-green-500">
                <span>Explore Adventures</span>
                <ArrowNarrowRightIcon className="w-5 h-5" />
              </button>
            </Link>
        <h3 className="mb-10 mt-10 border-zinc-600 bg-green-500 font-sans p-4 text-black text-2xl font-medium block mt-16">
            {category}
        </h3>
        <span className="ml-20 font-mono p-8 text-md text-white-300 rounded-lg">{categoryCount}</span>
        </div>
        </>
        )
}

export default Category

