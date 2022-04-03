import React from 'react'

const Container = ({ children }) => {
    return (
        <main className="bg-black-600 my-0">
            <div className="container mx-auto px-6 py-0">{children}</div>
        </main>
    )
}

export default Container
