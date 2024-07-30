import React, { createContext, useContext, useState } from "react";

const BagContext = createContext();

export const BagProvider = ({ children }) => {
    const [bag, setBag] = useState([]);

    const addToBag = (item) => {
        if (bag.length < 5 && !bag.find((i) => i.id === item.id && i.name === item.name)) {
            setBag([...bag, item]);
        } else if (bag.find((i) => i.id === item.id && i.name === item.name)) {
            alert("This item is already in your bag");
        } else {
            alert("Bag is full! You can only have 5 items in your bag");
        }
    };

    const removeFromBag = (id, name) => {
        setBag(bag.filter((item) => !(item.id === id && item.name === name)));
    };

    return (
        <BagContext.Provider value={{ bag, addToBag, removeFromBag }}>
            {children}
        </BagContext.Provider>
    );
};

export const useBag = () => useContext(BagContext);
