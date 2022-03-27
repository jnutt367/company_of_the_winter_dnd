import React from 'react'
import Image from 'next/dist/client/image'
const Category = ({ category, categoryCount }) => {
    return (
        <>
        <div className="bg-red-600 rounded-lg">
       
        <h3 className="font-sans p-4 text-white text-2xl font-medium block mt-16">
            {category}
        </h3>
        <span className="mt-3 font-mono p-8 text-md text-white">{categoryCount}</span>
        </div>
        </>
        )
}

export default Category

