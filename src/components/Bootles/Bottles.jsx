import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
const Bottles = () => {
    const [bottles, setBottles] = useState([])
    useEffect(() => {
        fetch("Bottles.json")
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
    return (
        <div>
        <h3>Bottles Here : {bottles.length}</h3>

         <div style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)"}}>
         {
               bottles.map(bottle => <Bottle
                 bottle = {bottle}
                  key={bottle.id}>
                  </Bottle>)
            }
         </div>
   
        </div>
    );
};
export default Bottles;