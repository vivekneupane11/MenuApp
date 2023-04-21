"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [q,setQ] = useState('')
  const { push } = useRouter();


  const handleSearchInput = (e)=>{
  setQ(e.target.value)
  }
  const submitSearch=()=>{
    push(`/?q=${q}`)
    }
    const handleKeyboardSubmit = (e)=>{
      if(e.key === 'Enter'){
        push(`/?q=${q}`)

      }
    }
  return (
<>
<div className="form-control m-auto my-4 w-[70%]  md:w-[50%] relative   ">

  <div className="input-group flex justify-center items-center input shadow-2xl    p-0">
    <input type="search" onKeyDown={handleKeyboardSubmit} onChange={handleSearchInput} placeholder="Search Menu..." className="input  w-[100%] focus:outline-none text-yellow-600 placeholder:text-yellow-600 " />
    <button onClick={submitSearch} className="btn btn-square   bg-yellow-300  hover:bg-yellow-500 border-yellow-300 hover:border-yellow-500">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
</>

  )
}
