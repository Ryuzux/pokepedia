const Party = ({ party, setParty }) => {
    const removeFromParty = (pokemonId) => {
      const updatedParty = party.filter(pokemon => pokemon.id !== pokemonId);
      setParty(updatedParty);
      localStorage.setItem("party", JSON.stringify(updatedParty));
    };
  
    return (
      <div className="w-1/3 flex items-end flex-col fixed py-3 right-0 m-6">
        <b>My party</b>
        {party.map((poke) => (
          <div key={poke.id} className="flex mb-2 mt-5">
            <img
              src={poke.sprites.front_default}
              alt={poke.name}
              className="w-10 h-10 mr-2"
            />
            <span>{poke.name}</span>
            <button
              onClick={() => removeFromParty(poke.id)}
              className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default Party;
  