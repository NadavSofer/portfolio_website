import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/NSlogo.jpeg-removebg-preview.png'

const Navbar = () => {
    let isHidden = true;

    const handleCollapseButton = () => {
        const button = document.getElementById('navbar-default');
        
        if (isHidden) {
            button.classList.remove('hidden');
            isHidden = false;
        } else {
            button.classList.add('hidden');
            isHidden = true;
        }
        console.log(isHidden);
    }

    return (
        <nav  className="border-gray-200 bg-black">
            <div  className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 md:py-0 mr-2 ml-2 md:mx-auto">
                <Link to="/"  className="flex items-center">
                    <img src={logo}  className="h-16 mr-3 md:ml-2" alt="Logo" />
                </Link>
                <button onClick={handleCollapseButton} data-collapse-toggle="navbar-default" type="button"  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span  className="sr-only">Open main menu</span>
                    <svg  className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div  className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul  className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded bg-gray-700 md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-900 border-gray-700">
                        <li>
                            <Link to="/About"  className="block py-2 pl-3 pr-4 md:border-0 md:p-4 text-white duration-500 hover:bg-blue-700 active:bg-blue-900">About</Link>
                        </li>
                        <li>
                            <Link to="/Projects" className="block py-2 pl-3 pr-4 md:border-0 md:p-4 text-white duration-500 hover:bg-blue-700 active:bg-blue-900">Projects</Link>
                        </li>
                        <li>
                            <Link to="/Contact"  className="block py-2 pl-3 pr-4 md:border-0 md:p-4 text-white duration-500 hover:bg-blue-700 active:bg-blue-900">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar