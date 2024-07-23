import React from "react";

const Button = ({children}) => {
    return <>{children}</>;
};

const Prev = ({ setUrl, prevUrl }) => {
  return (
    <button
      onClick={() => setUrl(prevUrl)}
      disabled={!prevUrl}
      className={` px-4 py-2 bg-blue-500 w-fit text-white rounded m-2 ${!prevUrl ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
    >
      Previous
    </button>
  );
};

const Next = ({ setUrl, nextUrl }) => {
  return (
    <button
      onClick={() => setUrl(nextUrl)}
      disabled={!nextUrl}
      className={` px-4 py-2 bg-blue-500 w-fit px-8 text-white rounded m-2 ${!nextUrl ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
    >
      Next
    </button>
  );
};

Button.Prev = Prev;
Button.Next = Next;

export default Button;
