import React, { MouseEventHandler } from 'react'
import {NavLink} from 'react-router-dom'
import { AiOutlineUser} from "react-icons/ai";

type props = {
  onClick: MouseEventHandler<HTMLDivElement>
}

function Navbar({onClick}:props) {
  
  return (
<nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
   <NavLink to='/'>
   <p  className="flex items-center">
        <img src={require('../../Assets/logo4.png')} className="h-[120px]  mr-3 w-[140px] hidden md:block" alt="Logo" />
        <span className="self-center block md:hidden text-black text-xl font-semibold whitespace-nowrap dark:text-white">TarVio</span>
    </p>
    </NavLink> 
    <div onClick={onClick}>

    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2  text-sm text-black rounded-lg md:hidden " aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    </div>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-[50px] md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li className="block py-2 pl-3 pr-4 text-black bg-white font-serif rounded md:bg-transparent md:text-zinc-600 md:text-md md:font-bold  md:p-0 dark:text-white" aria-current="page" >
            <NavLink to='/'>
            HOME
            </NavLink>
        </li>
        <li className="block py-2 pl-3 pr-4 text-black md:hover:bg-none bg-white font-serif rounded md:bg-transparent md:text-zinc-600 md:text-md md:font-bold  md:p-0 dark:text-white"  >
            <NavLink to='/destination'>
            DESTINATIONS
            </NavLink>
        </li>
        <li className="block py-2 pl-3 pr-4 text-black md:hover:bg-none bg-white font-serif rounded md:bg-transparent md:text-zinc-600 md:text-md md:font-bold  md:p-0 dark:text-white" >
            <NavLink to='/about'>
            ABOUTS
            </NavLink>
        </li>
        <li className="block py-2 pl-3 pr-4 text-black md:hover:bg-none bg-white font-serif rounded md:bg-transparent md:text-zinc-600 md:text-md md:font-bold  md:p-0 dark:text-white"  >
            <NavLink to='/service'>
            SERVICES
            </NavLink>
          
        </li>
        <li className="block py-2 pl-3 pr-4 text-black md:hover:bg-none bg-white font-serif rounded md:bg-transparent md:text-zinc-600 md:text-md md:font-bold  md:p-0 dark:text-white"  >
            <NavLink to='/contact'>
            CONTACTS
            </NavLink>
          
        </li>
        <li className="block py-2 pl-3 pr-4 text-black md:hover:bg-none bg-white font-serif rounded md:bg-transparent md:text-zinc-600 md:text-md md:font-bold  md:p-0 dark:text-white"  >
            <NavLink to='/booking'>
            BOOK NOW
            </NavLink>
          
        </li>
        <li className="block py-2 pl-3 pr-4 text-black  md:hover:bg-none bg-white font-serif rounded md:bg-transparent md:text-zinc-600 md:text-xl  md:font-bold  md:p-0 dark:text-white"  >
            <NavLink to='/profile'>
            <AiOutlineUser/>
            </NavLink>
          
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar