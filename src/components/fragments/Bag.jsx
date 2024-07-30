import React from "react";
import { useBag } from "../../context/Bagcontext";

const Bag = () => {
    const { bag, removeFromBag } = useBag();

    return (
        <div className="w-1/3 flex items-end flex-col fixed py-3 right-0 m-6 ">
            <b>My Bag</b>
            {bag.map((item) => (
                <div key={`${item.id}-${item.name}`} className="flex mb-2 mt-5">
                    {item.sprites && item.sprites.default ? (
                        <img
                            src={item.sprites.default}
                            alt={item.name}
                            className="w-10 h-10 mr-2"
                        />
                    ) : (
                        <div className="w-10 h-10 mr-2 bg-gray-300"></div>
                    )}
                    <span>{item.name}</span>
                    <button
                        onClick={() => removeFromBag(item.id, item.name)}
                        className="ml-2 px-2 py-1 text-white rounded bg-red-500 hover:bg-red-700"
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Bag;
