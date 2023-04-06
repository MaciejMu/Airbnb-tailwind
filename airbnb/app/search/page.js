import React from "react";

const Search = ({ guestNum }) => {
  // console.log(guestNum);
  return (
    <section className="flex-grow pt-14 px-6">
      <p className="text-xs">300+ stays for {guestNum} number of guests</p>
      <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
      <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
        <button className="button">Cancelation Flexability</button>
        <button className="button">Type of Place</button>
        <button className="button">Price</button>
        <button className="button">Rooms and Beds</button>
        <button className="button">More filters</button>
      </div>
    </section>
  );
};

export default Search;
