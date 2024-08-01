const CardBerryItem = ({ berryitem, loading, addToBag }) => {
    return (
      <>
        {loading ? (
          <p>Loading...</p>
        ) : (
          berryitem.map((item) => (
            <div
              className="bg-blue-500 border border-gray-700 rounded-lg shadow flex flex-col items-center p-4"
              key={`${item.id}-${item.name}`}
            >
              {item.sprites && item.sprites.default ? (
                <img
                  src={item.sprites.default}
                  alt={item.name}
                  className="w-16 h-16 mr-4"
                />
              ) : (
                <div className="w-16 h-16 mr-4 bg-gray-300 flex items-center justify-center">
                  <span>No Image</span>
                </div>
              )}
              <h2>
                <b>{item.name}</b>
              </h2>
              <button
                onClick={(e) => {
                  addToBag(item);
                }}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
              >
                Add to Bag
              </button>
            </div>
          ))
        )}
      </>
    );
  };
  
  export default CardBerryItem;
  