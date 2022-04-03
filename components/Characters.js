import React from 'react'
import Character from './Character';

const Characters = ({ characters }) => {
    return (
        <div className="grid gap-2 grid-cols-1 sm-:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-0">
            {characters.map((character) => (
                <Character key={character._id} character={character} />
            ))}
        </div>
    )
}
export default Characters
