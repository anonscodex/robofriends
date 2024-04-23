import React from "react";
import { PixelArtCard }  from 'react-pixelart-face-card' 

const Card = ({name, stack}) => {
    return(
       <div className="py-5">
            <div className="flex gap-10 py-9 px-9 max-w-sm mx-auto bg-black rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:gap-10 sm:space-y-0 sm:space-x-6">

                        <PixelArtCard className="w-full h-56 object-cover object-center"  random={true} size={200} tags={['human-female','human-male']}/>
                    <div className="px-5 py-10">

                        <h2 className="text-xl font-bold text-white ">{name}</h2>
                        <p className="text-white mt-2">{stack}</p>

                        <div className="py-5">
                            
                            <button class="px-4 py-1 text-sm text-white font-semibold rounded-full border border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">Message</button>
                            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/000000/github.png" alt="github" className="bg-color-white"/>
                        </div>
                    </div>
    
            </div>
        
         </div>
    )
}

export default Card;