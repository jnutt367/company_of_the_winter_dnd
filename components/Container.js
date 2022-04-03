import React from 'react'

const Container = ({ children }) => {
    return (
        <main className="bg-gray-600 my-8">
            <div className="container mx-auto px-6 py-4">{children}</div>
        </main>
    )
}

export default Container
