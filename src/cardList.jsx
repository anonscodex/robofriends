import React from "react";

import Card from "./Card";

const CardList = ({portfolio}) => {

    const cardComponent = portfolio.map((user, i) => {
        return( <Card
         key= {i} 
         name={portfolio[i].name} 
         stack={portfolio[i].stack}
           /> )
    })

    
    return(

        <div>
            {cardComponent}
        </div>
    );
}


export default CardList