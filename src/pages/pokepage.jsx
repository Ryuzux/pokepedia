import { useEffect, useState } from "react";
import CardPoke from "../components/fragments/CardPoke";
import PokeInfo from "../components/fragments/Pokeinf";
import axios from "axios";
import Button from "../components/elements/Button";
import Navbar from "../components/fragments/Navbar";
import Party from "../components/fragments/Party";

const PokePage = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeInfo, setPokeInfo] = useState();
    const [party, setParty] = useState(() => {
    const savedParty = localStorage.getItem("party");
        return savedParty ? JSON.parse(savedParty) : [];
    });

    const pokeFun = async () => {
        setLoading(true);
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
    };

    const getPokemon = async (results) => {
        const pokemonData = await Promise.all(
            results.map(async (item) => {
                const result = await axios.get(item.url);
                return result.data;
            })
        );
        setPokeData(pokemonData.sort((a, b) => a.id - b.id));
        setLoading(false);
        if (!pokeInfo && pokemonData.length > 0) {
            setPokeInfo(pokemonData[0]); 
        }
    };

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

    useEffect(() => {
        localStorage.setItem("party", JSON.stringify(party));
    }, [party]);

    useEffect(() => {
        pokeFun();
    }, [url]);

    return (
        <>
        <Navbar />
        <div className="flex pt-24">
            <div className="w-2/3 flex flex-col">
                <div className="flex justify-between gap-4 mr-8">
                <Button.Prev setUrl={setUrl} prevUrl={prevUrl} />
                <Button.Next setUrl={setUrl} nextUrl={nextUrl} />
                </div>
                <div className="grid grid-cols-2 gap-4 mr-8">
                <CardPoke
                    pokemon={pokeData}
                    loading={loading}
                    infoPokemon={(poke) => {
                        setPokeInfo(poke);
                    }}
                    addToParty={addToParty}
                />
                </div>

            </div>
            <div className="w-2/3 flex">
                <PokeInfo data={pokeInfo} />     
                </div>
                <div className="w-1/3 flex items-end flex-col fixed right-0">
                    <Party party={party} setParty={setParty} />
                
                </div>
            </div>


        </>
    );
};

export default PokePage;
