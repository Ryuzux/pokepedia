const PokeInfo = ({ data }) => {
    return (
      <div className="fixed top-24 left-15 w-64 h-64 " >
        {!data ? (
          ""
        ) : (
          <div>
            <h1
            className=" font-bold py-2 px-4 text-center rounded-t-xl text-4xl mt-5 border-4 border-black bg-blue-500"
            >{data.name}</h1>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt=""
              className="w-64 h-64 border-4 border-black bg-gray-400"
            />
            <div>
              {data.abilities.map((poke, index) => {
                return <h2 
                key={index}
                className="bg-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 border-4 border-black"
                >{poke.ability.name}</h2>;
              })}
  
              {data.stats.map((poke, index) => {
                return (
                  <li key={index}
                  className="bg-blue-500 px-2"
                  >
                    {poke.stat.name}: {poke.base_stat}
                  </li>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default PokeInfo;
  