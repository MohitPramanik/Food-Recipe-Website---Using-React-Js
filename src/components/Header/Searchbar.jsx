import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { moveSearch, toggleActive } from "../Animation";

function Searchbar() {
    const [isActive, setIsActive] = useState(true); // to toggle search button

    return (
        <>
            <div
                id="searchBox"
                className="bg-white w-60 h-10 rounded-full flex justify-center overflow-hidden relative"
            >

                {/* ------------------- Search box -----------------------*/}
                <input
                    type="text"
                    id="searchArea"
                    placeholder="Search"
                    className="w-full absolute h-10 px-3 z-0 outline-none"
                />

                {/* --------------------Movable icon area -------------------*/}
                <div
                    className="bg-red-900 flex justify-start items-center w-full ps-3 cursor-pointer z-10 text-white"
                    id="search"
                    onClick={() => toggleActive(isActive, setIsActive)}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    {isActive && <span className="ps-2">Search</span>}
                </div>

            </div>
        </>
    );
}

export default Searchbar;
