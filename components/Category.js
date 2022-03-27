import React from 'react'
import Image from 'next/dist/client/image'
const Category = ({ category, categoryCount }) => {
    return (
        <>
        <div className="bg-black-300 border-8 border-dashed border-zinc-600 rounded-lg">
       
        <h3 className="mb-10 font-sans p-4 text-white text-2xl font-medium block mt-16">
            {category}
        </h3>
        <span className="font-mono p-8 text-md text-white border-8 border-solid border-zinc-600 rounded-lg">{categoryCount}</span>
        </div>
        </>
        )
}

export default Category

