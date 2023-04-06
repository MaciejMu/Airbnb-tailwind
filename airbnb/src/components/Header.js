"use client";
import React, { useState } from "react";
import Image from "next/image";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [guestNum, setGuestNum] = useState(1);
  const [state, setState] = useState({
    selection: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  });

  const resetInput = () => {
    setSearchInput("");
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          fill
          alt=""
          style={{ objectFit: "contain", objectPosition: "left" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        ></input>
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 p-2 border-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            onChange={(item) => setState({ ...state, ...item })}
            months={1}
            rangeColors={["#FD5B61"]}
            minDate={new Date()}
            direction="vertical"
            scroll={{ enabled: true }}
            ranges={[state.selection]}
          />
          <div className="flex items-center border-b mb-4 pt-5">
            <h2 className="text-xl flex-grow">Number of Guests</h2>
            <UsersIcon className="h-6 p-1 bg-red-400 text-white rounded-full" />
            <input
              value={guestNum}
              min={1}
              max={20}
              onChange={(e) => setGuestNum(e.target.value)}
              type="number"
              className="outline-none w-12 pl-2 text-lg text-red-400"
            ></input>
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button className="flex-grow text-red-400 bold font-semibold">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
