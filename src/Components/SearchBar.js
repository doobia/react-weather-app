import React, { useRef } from "react";

const SearchBar = ({ setCity }) => {
  let input = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setCity(input.current.value);
      }}
    >
      <input
        ref={input}
        className="form-control my-3"
        type="text"
        placeholder="Search For a City"
      />
    </form>
  );
};

export default SearchBar;
