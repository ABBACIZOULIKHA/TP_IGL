import React, { useState, useContext } from 'react';
import { HouseContext } from './HouseContext';
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const Footer = () => {
    const { country,setCountry, countries } = useContext(HouseContext);
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);

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
                    : "Wilaya"}
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
                        placeholder="Enter a properity"
                        className="placeholder:text-gray-700 p-2 outline-none"
                    />
                </div>
                {countries?.map((country, index) => (
                    <li
                        key={index}
                        className={`p-2 text-sm hover:bg-violet-800 hover:text-white
          ${country?.toLowerCase() === selected?.toLowerCase() &&
                            "bg-violet-700 text-white"
                            }
          ${country?.toLowerCase().startsWith(inputValue)
                                ? "block"
                                : "hidden"
                            }`}
                        onClick={() => {
                            if (country?.toLowerCase() !== selected.toLowerCase()) {
                                setSelected(country);
                                setOpen(false);
                                setInputValue("");
                            }
                        }}
                    >
                        {country}
                    </li>
                ))}
            </ul>
        </div>

    );
};
export default Footer;

