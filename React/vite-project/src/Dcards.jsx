import react from "react";
import { useState } from "react";
import  "./Dcards.css";
const Dcards =()=>{
    return (
        <>
      <div className="parent">
       <form>
        <label >Firstname:</label>
        <input type="text"></input><br/>
        <label >Lastname:</label>
        <input type="text"></input><br/>
        <label >Emial-address:</label>
        <input type="text"></input><br/>
        <button>Add Data</button>
       </form>
       </div>
        </>
       
    );
}
export default Dcards;