import React from "react";

const CardPoke = ({ pokemon, loading, infoPokemon, addToParty }) => {
    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                pokemon.map((item) => (
                    <div
                        key={item.id}
                        className=" bg-blue-500 border border-gray-700 rounded-lg shadow flex flex-col items-center p-4"
                        onClick={() => infoPokemon(item)}
                    >
                        <h2 className="mr-4">{item.id}.</h2>
                        <img src={item.sprites.front_default} alt={item.name} className="w-16 h-16 mr-4" />
                        <h2><b>{item.name}</b></h2>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                addToParty(item);
                            }}
                            className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                        >
                            Add to Party
                        </button>
                    </div>
                ))
            )}
        </>
    );
};

export default CardPoke;
