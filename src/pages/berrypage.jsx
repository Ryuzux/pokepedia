import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../components/elements/Button";
import Navbar from "../components/fragments/Navbar";
import CardBerryItem from "../components/fragments/Card";
import Party from "../components/fragments/Party";

const BerryPage = () => {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/berry/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [party, setParty] = useState(() => {
    const savedParty = localStorage.getItem("party");
    return savedParty ? JSON.parse(savedParty) : [];
  });

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
      <Navbar />
      <div className="flex pt-24">
        <div className="w-2/3 flex flex-col">
          <div className="flex justify-between gap-4 mr-8">
            <Button.Prev setUrl={setUrl} prevUrl={prevUrl} />
            <Button.Next setUrl={setUrl} nextUrl={nextUrl} />
          </div>
          <div className="grid grid-cols-2 gap-4 mr-8">
            <CardBerryItem berryitem={Data} loading={loading} />
          </div>
        </div>
        <div className="w-2/3 flex">
          <Party party={party} setParty={setParty} />
        </div>
      </div>
    </>
  );
};
export default BerryPage;
