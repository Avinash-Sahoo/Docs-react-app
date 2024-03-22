import React, { useRef } from 'react'
import Card from './card'
import { arr } from '../Data/cardData';
function Foreground() {

const ref =useRef(null);
    
    return (
        <div ref={ref} className="fixed flex gap-7 w-full h-full bg-zinc-800/60 p-7">
            {
                arr.map((item, index) => (
                    <Card data={item} reference={ref}/>
                ))

            }
           
        </div>
    )
}

export default Foreground