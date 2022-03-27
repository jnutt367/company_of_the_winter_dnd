import React from 'react'
import Image from 'next/dist/client/image'
const Category = ({ category, categoryCount }) => {
    return (
        <>
        <div className="bg-black border-2 border-dotted border-zinc-600 rounded-lg">
       
        <h3 className="mb-10  border-dotted border-zinc-600 bg-red-500 font-sans p-4 text-black text-2xl font-medium block mt-16">
            {category}
        </h3>
        <span className="font-mono p-8 text-md text-red-300 border-2 rounded-lg">{categoryCount}</span>
        </div>
        </>
        )
}

export default Category

