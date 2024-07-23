

const CardBerryItem = ({ berryitem, loading }) => {
    return (
      <>

        {loading ? (
          <p>Loading...</p>
        ) : (
          berryitem.map((item) => (
            <div
            className=" bg-blue-500 border border-gray-700 rounded-lg shadow flex flex-col items-center p-4"
            key={item.id}
            >
              <h2 className="mr-4">{item.id}</h2>
              {item.sprites && item.sprites.default ? (
                <img
                  src={item.sprites.default}
                  alt={item.name}
                  className="w-16 h-16 mr-4"
                />
              ) : (
                <div className="w-16 h-16 mr-4 bg-gray-300"></div>
              )}
              <h2>
                <b>{item.name}</b>
              </h2>
            </div>
          ))
        )}
      </>
    );
  };

  export default CardBerryItem;