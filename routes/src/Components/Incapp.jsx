import React from 'react'

function Incapp({name="appa ke pappa", about, btn}) {
    return (
        <div className='bg-blue-100 my-2'>
            <h1>{name}</h1>
            <p>{about}</p>
            <button className='bg-[#010101]'  >{btn || "Learn more"}</button>
        </div>
    )
}

export default Incapp