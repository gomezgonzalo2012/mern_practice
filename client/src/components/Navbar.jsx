import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div className='bg-zinc-800 flex justify-between px-10 py-3'>
      <Link to={"/"}>
        <h1 className='text-[30px] text-white hover:text-amber-400 font-bold'>React MySQL</h1>
      </Link>
        <ul className='flex  text-white gap-3'>
              <li className='hover:text-amber-400'><Link to={"/"}>Home</Link></li>
              <li className='hover:text-amber-400' ><Link to={"/new"}>Create Task</Link></li>
        </ul>
    </div>
  )
}

export default Navbar