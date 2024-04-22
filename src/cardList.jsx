import React from "react";


import { portfolio } from "./Portfolio";

const cardList = ({portfolio}) => {
    <div>
        <Card name={portfolio[0].name} stack={portfolio[0].stack}  />
        <Card name={portfolio[1].name} stack={portfolio[1].stack} />
        <Card name={portfolio[2].name} stack={portfolio[2].stack} />
        <Card name={portfolio[3].name} stack={portfolio[3].stack} />
    </div>
}

export default cardList