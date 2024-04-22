import React from "react";
import { PixelArtCard }  from 'react-pixelart-face-card' 

const Card = ({name, stack}) => {
    return(
       <div className="py-5">
            <div className="gap-10 py-9 px-9 max-w-lg mx-auto bg-black rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:gap-10 sm:space-y-0 sm:space-x-6">

                        <PixelArtCard className="w-full h-56 object-cover object-center"  random={true} size={200} tags={['human-female','human-male']}/>
                    <div className="px-6 py-4">

                        <h2 className="text-xl font-bold text-white ">{name}</h2>
                        <p className="text-white mt-2">{stack}</p>

                        <div className="py-5">
                            <button class="px-4 py-1 text-sm text-white font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
                        </div>
                    </div>
    
            </div>
        
         </div>
    )
}

export default Card;