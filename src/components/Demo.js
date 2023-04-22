import React,{useState, useMemo} from "react";
import { findPrime } from "../utils/helper";


const Demo = ()=>{
   const [number, setNumber] = useState()


   const prime = useMemo(()=>findPrime(number),[number])

    return(
        <div className="w-1/3 h-1/2 border border-black m-5 p-5">
            <div>
                <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)} className='w-full h-10 border border-black p-3'/>
            </div>
            <div className="m-4 text-lg font-bold">Nth Prime: {prime}</div>
        </div>
    )
}

export default Demo;