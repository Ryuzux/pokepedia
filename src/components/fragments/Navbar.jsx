import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex bg-blue-800 text-white text-3xl items-center p-5 fixed w-full ">
        <Link to="/pokemon" className=" px-2 py-1  text-white rounded hover:bg-red-500"> <b>PokePedia</b></Link>
        <Link to="/berry" className="ml-2 px-2 py-1  text-white rounded hover:bg-red-500">Berry</Link>
        <Link to="/item" className="ml-2 px-2 py-1  text-white rounded hover:bg-red-500">Item</Link>
      </div>
    )
}

export default Navbar;