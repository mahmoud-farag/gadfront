import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header h-20 pr-1 pl-2 w sm:pr-7 sm:pl-7 flex items-center justify-between bg-gray-900 shadow-xl shadow-black-800'>
             <div className="logo text-white"> logo her</div>
             <nav className='w-40  sm:pr-0 sm:w-80   '>
                 <ul className=' p-0 m-0    flex justify-evenly sm:justify-around   items-center' >
                  <li className=""> <Link  className='btn  rounded-md   w-30 p-2  font-light bg-red-800 font-mono   sm:font-bold text-gray-200' to='/zawya'>zawya </Link></li>
                  <li className='w-auto'> <Link  className='btn rounded-md  p-2 font-light bg-red-800 font-mono   sm:font-bold text-gray-200' to='/menof'>menof </Link> </li>
                 </ul>
             </nav>
        </div>
    )
}
