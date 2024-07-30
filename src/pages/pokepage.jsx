import { useEffect, useState } from 'react';
import CardPoke from '../components/fragments/CardPoke';
import PokeInfo from '../components/fragments/Pokeinf';
import axios from 'axios';
import Button from '../components/elements/Button';
import Navbar from '../components/fragments/Navbar';
import Party from '../components/fragments/Party';
import { useParty } from '../context/Partycontext';
import Bag from '../components/fragments/Bag';
import { useBag } from "../context/Bagcontext";

const PokePage = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeInfo, setPokeInfo] = useState();
  const [showParty, setShowParty] = useState(false);
  const [showBag, setShowBag] = useState(false);
  const { party, addToParty, removeFromParty } = useParty();
  const { bag, addToBag, removeFromBag } = useBag();

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

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
        <Navbar showParty={showParty} setShowParty={setShowParty} showBag={showBag} setShowBag={setShowBag} />
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
                        addToBag={addToBag} 
                    />
                </div>
            </div>
            <div className="w-2/3 flex">
                <PokeInfo data={pokeInfo} />     
            </div>
            {showParty && (
                <div className="w-1/3 flex items-end flex-col fixed right-0">
                    <Party party={party} removeFromParty={removeFromParty} />
                </div>
            )}
            {showBag && (
                <div className="w-1/3 flex items-end flex-col fixed right-0">
                    <Bag bag={bag} removeFromBag={removeFromBag} />
                </div>
            )}
        </div>
    </>
);
};

export default PokePage;
