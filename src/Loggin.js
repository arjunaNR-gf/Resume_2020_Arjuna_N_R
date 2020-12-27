import React, { useEffect, useState } from 'react';

export default function Logg()
{
    const [val1,setval1]=useState("");
   
      const val=()=>
      {
          alert(val1);
      }

    
    return(
        <div>
            <label>Enter Name</label><input value={val1} 
            onChange={e=>setval1(e.target.value)}/>
            <button onClick={val}></button>
           

        </div>
    )
}



