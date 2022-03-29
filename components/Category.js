import React from 'react'
import Image from 'next/dist/client/image'
const Category = ({ category, categoryCount }) => {
    return (
        <>
        <div className="bg-green-600 w-auto border-2 border-zinc-600 rounded-lg">
       
        <h3 className="mb-10 mt-10 border-zinc-600 bg-red-500 font-sans p-4 text-black text-2xl font-medium block mt-16">
            {category}
        </h3>
        <span className="ml-20 font-mono p-8 text-md text-white-300 border-2 rounded-lg">{categoryCount}</span>
        </div>
        </>
        )
}

export default Category

