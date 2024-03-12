import React, { useState } from 'react';
const Bottle = ({bottle}) => {
    const {name, img, price} = bottle;
    
    return (
        <div style={{border:"2px solid yellow",margin:"20px",borderRadius:"20px" }}>
            <h4>Bottle Name: {name}</h4>
            <img style={{width:"200px"}} src = {img} alt="" />
            <p>Price : $ {price}</p>
            <button style={{margin:'10px', background:"green",color:"white"}}>Pharses</button>
        </div>
    );
};
export default Bottle;