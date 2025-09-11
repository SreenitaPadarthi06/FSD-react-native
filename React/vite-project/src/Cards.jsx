import React from "react";
import "./Dynamiccards.css";

const Cards = ({myData}) => {
    console.log(myData)
    return(
        <>
         <div className="parent">
              {myData.map(ele => (
                    <div className="card" key={ele.brand}>
                    <div className="logo"></div>
                    <div className="content">
                        <div className="price">Price : {ele.price}</div>
                        <div className="brand">Brand : {ele.brand}</div>
                    </div>
                </div>
                ))}
            </div>
            </>
    )
}

export default Cards;

