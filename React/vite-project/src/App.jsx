import React from "react";
// import CARDS from './Cards'
// // import CV from './CV'
// // import Dynamiccards from './Dynamiccards';
// import './Dynamiccards.css';
// function App() {
//  const products=[
//         {price:3000,brand:"PUMA"},
//         {price:3200,brand:"USA"},
//         {price:2000,brand:"WROGN"},
//         {price:2021,brand:"Levi's"}
//     ];
//   return (
//     <>
//       <CARDS myData = {products}/>
//     </>
//   )
// }

import Conditions from "./Conditions";
import Conditions2 from "./Conditions2";
import Dcards from "./Dcards.jsx";
 function App() {

//To get either component 1 or 2

  // const [x, setX] = useState(0);
  // return (
  //   <div>
  //     {x === 0 ? <Conditions /> : <Conditions2 />}
  //     <button onClick={() => setX(x === 0 ? 1 : 0)}>
  //       Click me
  //     </button>
  //   </div>
  // );

//For count increment

//   const [Data,setData]=useState(0);
//     const incre=()=>{
//             setData(Data+1);
//     }
//     const decre=()=>{
//       setData(Data-1);
//     }    
//   return(
//     <>
//     <button onClick={incre}>incremenet</button>
//     <button onClick={decre}>decrement</button>
//     <h1>Count:{Data}</h1>
//     </>
//   );
  return (
    <>
    <Dcards/>
    </>
  );

 }

export default App;
