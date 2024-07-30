import React, { createContext, useContext, useState, useEffect } from "react";

const PartyContext = createContext();

export const PartyProvider = ({ children }) => {
    const [party, setParty] = useState([]);

    const addToParty = (pokemon) => {
        if (party.length < 5 && !party.find(p => p.id === pokemon.id)) {
            setParty([...party, pokemon]);
        } else if (party.find(p => p.id === pokemon.id)) {
            alert("This Pokémon is already in your party.");
        } else {
            alert("Party is full! You can only have 5 Pokémon in your party.");
        }
    };

    const removeFromParty = (pokemonId) => {
        setParty(party.filter(pokemon => pokemon.id !== pokemonId));
    };

    return (
        <PartyContext.Provider value={{ party, addToParty, removeFromParty }}>
            {children}
        </PartyContext.Provider>
    );
};

export const useParty = () => useContext(PartyContext);
