import React, { useState, useContext, useEffect } from 'react';
import { BiChevronDown } from "react-icons/bi";
import { HouseContext } from './HouseContext';
import { AiOutlineSearch } from "react-icons/ai"

const CountryDropdown = () => {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    <div className="w-60 font-medium h-60 ">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center  rounded ${!selected && "text-gray-700"
          }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Country"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${open ? "max-h-60" : "max-h-0"
          } `}
      >
        <div className="flex items-center top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {countries?.map((country) => (
          <li
            key={country?.name}
            className={`p-2 text-sm hover:bg-violet-800 hover:text-white
            ${country?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-violet-700 text-white"
              }
            ${country?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
              }`}
            onClick={() => {
              if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(country?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {country?.name}
          </li>
        ))}
      </ul>
    </div>
  );

};
export default CountryDropdown;
