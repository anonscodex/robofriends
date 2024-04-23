import React from "react";

const Header = ({searchfield, searchChange}) => {
    return (
        <div className="flex h-18 bg-black sm:justify-between">
            <h3 className="text-white my-5 px-8 font-sans font-bold">DevMeme</h3>
            <input type="search" placeholder="Search Dev" onChange={searchChange} className="h-5 mt-5 rounded-sm border border-green-200 hover:text-black  hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2 "></input> 
        </div>
    )
} 

export default Header