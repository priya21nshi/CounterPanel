import React, { useState } from 'react'
import { HiArrowTurnLeftDown } from "react-icons/hi2";
import { HiArrowTurnRightDown } from "react-icons/hi2";
import { toast } from 'react-toastify';

const Operation = () => {
    const [count,setcount]=useState(0)

const Decrement=()=>{
  count<=0?toast.warn("Number can't go below Zero"):setcount(count-1)
}




  return (
    <div className='bg-gray-900 min-h-screen '>
    
    <div className='flex flex-col items-center justify-center w-full h-screen relative   '>
    <div className='bg-gray-900 rounded-3xl z-10 shadow-lg md:w-[40vw] max-w-lg w-full '>
          <p className='text-teal-600 text-2xl text-center font-semibold'>INCREMENT/ DECREMENT FUNCTIONALITY</p>
          </div>
          


    {/* <div className='flex items-center justify-center h-screen '> */}
        <div className='bg-white z-20 rounded-3xl shadow-lg md:w-[40vw] md:h-[40vh] max-w-lg w-full '>
        

        <div className='flex items-center justify-center pt-6'>
        
        <button className='border border-slate-500 rounded-lg px-6 py-2 h-15 w-35 text-lg font-semibold shadow-sm text-white bg-[#064E3B]'>{count}</button>
        
        </div>
        <div className='flex items-center justify-evenly'>
        <HiArrowTurnLeftDown className='text-black md:h-20 md:w-15 h-10 w-10' />
        <HiArrowTurnRightDown  className='text-black md:h-20 md:w-15 h-10 w-10'  />
        </div>
        <div className='flex md:flex-row flex-col justify-evenly items-center gap-4 '>
        

        <button onClick={()=>setcount(count+1)} className=' border border-slate-500 rounded-lg px-6 py-4 shadow-sm w-full md:h-20 md:w-40 text-white bg-[#de6a12]'>INCREMENT</button>
        <button onClick={()=>Decrement()} className=' border border-slate-500 rounded-lg px-6 py-4 shadow-sm  w-full md:h-20 md:w-40 text-white bg-[#1E3A8A]'>DECREMENT</button>
        </div>
        </div>
    {/* </div> */}
    </div>
    

   

    </div>
  )
}

export default Operation