import React from 'react'
import samimg from "./assets/sampleimg.webp"
export default function Advisors() {
  return (
    <div className="mt-[200px]">
      <p className='text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b to-[#234EB0] from-[#9010B0] w-[700px] mt-[100px] ml-[100px]'>Mentors and advisors</p>
      <div className="grid grid-cols-3 gap-8 mx-[150px] mt-[100px]">

       <div className="text-[30px] flex flex-col">
       <img src={samimg} className="w-[200px] h-[200px] rounded rounded-full mx-auto" alt=" not found"/>
       <p className='text-[30px] mt-2 font-extrabold text-center'>Dr. Omkar</p>
       <p className='text-[30px] font-bold text-center'>Principal Project Scientist</p>
       <p className='text-[30px] font-bold text-center'>IIT Madras</p> 
       </div>
    
       <div className="text-[30px] flex flex-col">
       <img src={samimg} className="w-[200px] h-[200px] rounded rounded-full mx-auto" alt=" not found"/>
       <p className='text-[30px] mt-2 font-extrabold text-center'>Akhil Tripathi</p>
       
       <p className='text-[30px] font-bold text-center border border-[3px] border-[#9010B0] rounded rounded-full text-[#9010B0] mt-4'>Message him now</p> 
       </div>
    
       <div className="text-[30px] flex flex-col">
       <img src={samimg} className="w-[200px] h-[200px] rounded rounded-full mx-auto" alt=" not found"/>
       <p className='text-[30px] mt-2 font-extrabold text-center'>Vivek Dwiwedi</p>
       
       <p className='text-[30px] font-bold text-center border border-[3px] border-[#9010B0] rounded rounded-full text-[#9010B0] mt-4'>Message him now</p> 
       </div>
    
    </div>
    </div>
  )
}
