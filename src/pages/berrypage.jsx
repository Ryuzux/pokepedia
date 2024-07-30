import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../components/elements/Button";
import Navbar from "../components/fragments/Navbar";
import CardBerryItem from "../components/fragments/Card";
import Party from "../components/fragments/Party";
import { useParty } from "../context/Partycontext";
import Bag from "../components/fragments/Bag";
import { useBag } from "../context/Bagcontext";

const BerryPage = () => {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/berry/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [showParty, setShowParty] = useState(false);
  const [showBag, setShowBag] = useState(false);
  const { party, addToParty, removeFromParty } = useParty();
  const { bag, addToBag, removeFromBag } = useBag();

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    await getData(res.data.results);
    setLoading(false);
  };

  const getData = async (results) => {
    const Data = await Promise.all(
      results.map(async (item) => {
        const result = await axios.get(item.url);
        return result.data;
      })
    );
    setData(Data.sort((a, b) => a.id - b.id));
  };

  useEffect(() => {
    fetchData();
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
            <CardBerryItem berryitem={Data}
              addToBag={addToBag}
               loading={loading} />
          </div>
        </div>
        <div className="w-2/3">
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
      </div>
    </>
  );
};
export default BerryPage;
