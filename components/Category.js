import React from 'react'

const Category = ({ category, categoryCount }) => {
    return (
        <>
        <div className="bg-indigo-300 rounded-md">
        <h3 className="font-serif p-4 text-black text-2xl font-medium block mt-16">
            {category}
        </h3>
        <span className="mt-3 font-mono p-8 text-sm text-black">{categoryCount}</span>
        </div>
        </>
        )
}

export default Category

