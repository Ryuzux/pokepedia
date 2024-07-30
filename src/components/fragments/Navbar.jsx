import { Link } from "react-router-dom";
import { UserGroupIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import { useParty } from "../../context/Partycontext";
import { useBag } from "../../context/Bagcontext";

const Navbar = ({ setShowParty, setShowBag }) => {
    const { party } = useParty();
    const { bag } = useBag();
    const toggleParty = () => {
        setShowParty((prev) => {
            setShowBag(false);
            return !prev;
        });
    };

    const toggleBag = () => {
        setShowBag((prev) => {
            setShowParty(false);
            return !prev;
        });
    };

    return (
        <div className="flex bg-blue-800 text-white text-3xl items-center p-5 fixed w-full">
            <Link to="/pokemon" className="px-2 py-1 text-white rounded hover:bg-red-500"><b>PokePedia</b></Link>
            <Link to="/berry" className="ml-2 px-2 py-1 text-white rounded hover:bg-red-500">Berry</Link>
            <Link to="/item" className="ml-2 px-2 py-1 text-white rounded hover:bg-red-500">Item</Link>
            <div className="ml-auto flex items-center space-x-4">
                <button 
                    onClick={toggleParty} 
                    className="flex items-center ml-2 px-2 py-1 text-white rounded  hover:bg-green-700"
                >
                    <UserGroupIcon className="h-6 w-6 mr-1" />
                    ({party.length})
                </button>
                <button 
                    onClick={toggleBag} 
                    className="flex items-center ml-2 px-2 py-1 text-white rounded  hover:bg-green-700"
                >
                    <ShoppingBagIcon className="h-6 w-6 mr-1" />
                    ({bag.length})
                </button>
            </div>
        </div>
    );
};

export default Navbar;
