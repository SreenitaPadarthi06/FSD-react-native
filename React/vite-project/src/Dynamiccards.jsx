import React from "react";
import "./Dynamiccards.css"
class Dynamiccards extends React.Component{
    render()
    { const products=[
        {price:3000,brand:"PUMA"},
        {price:3200,brand:"Nivas"},
        {price:2000,brand:"Sree"},
        {price:2021,brand:"Kar"}
    ];
        return(
            <div className="parent">
                {products.map(ele => (
                    <div className="card" key={ele.brand}>
                    <div className="logo"></div>
                    <div className="content">
                        <div className="price">Price : {ele.price}</div>
                        <div className="brand">Brand : {ele.brand}</div>
                    </div>
                </div>
                ))}
            </div>
        )
    }
}
export default Dynamiccards;