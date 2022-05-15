import React from 'react'
import Image from 'next/dist/client/image'
import Link from "next/link";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";


const Category = ({ category, categoryCount }) => {
    return (
        <>
        <div className="bg w-auto font-mono rounded-lg">
        <Link href={`https://rollwithme.xyz/r/cup-found-actual-country-sitting-then`}>
              <button className="font-mono flex items-center mt-4 px-3 py-2 bg-black text-white text-sm uppercase  rounded hover:bg-green-800 focus:outline-none focus:bg-red-500">
                <span>Dice Roller</span>
                <ArrowNarrowRightIcon className="w-5 h-5" />
              </button>
            </Link>
        <h3 className="mb-10 mt-10 font-mono border-zinc-600 bg-green-900 font-sans p-4 text-white text-2xl font-medium block mt-16">
            {category}
        </h3>
        <span className="ml-20 font-mono p-8 text-md text-white-300 rounded-lg">{categoryCount}</span>
        </div>
        </>
        )
}

export default Category

