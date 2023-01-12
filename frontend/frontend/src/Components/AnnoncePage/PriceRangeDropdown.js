import React, { useState, useContext } from 'react'
import { HouseContext } from './HouseContext';
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";


const PriceRangDropdown = () => {
  const { Periode, setPeroide } = useContext(HouseContext);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const Periodes = [
    {
      value: 'Price range (any)',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
    {
      value: '160000 - 190000',
    },
    {
      value: '190000 - 220000',
    },
    {
      value: '20000 - 30000',
    },
    {
      value: '30000 - 40000',
    },
  ];
  return (
    <div className="w-60 font-medium h-80">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center  rounded ${!selected && "text-gray-700"
          }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Periode"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${open ? "max-h-60" : "max-h-0"
          } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter a periode"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {Periodes?.map((Periode, index) => (
          <li
            key={index}
            className={`p-2 text-sm hover:bg-violet-800 hover:text-white
${Periode?.value === selected?.toLowerCase() &&
              "bg-violet-700 text-white"
              }
${Periode?.value.startsWith(inputValue)
                ? "block"
                : "hidden"
              }`}
            onClick={() => {
              if (Periode?.value !== selected.toLowerCase()) {
                setSelected(Periode.value);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {Periode.value}
          </li>
        ))}
      </ul>
    </div>);
};
export default PriceRangDropdown;
