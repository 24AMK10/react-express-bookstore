import React, {useState}  from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Navbar = () => {
    // const navigate = useNavigate();
    // const [ navbar, setNavbar ] = useState(false);
   
    return (
        <div>
            <nav className="w-full fixed bg-blue-400 dark:bg-slate-800  shadow">
                <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to='/'>
                            <h2 className="text-3xl font-black text-white">The Store</h2>

                        </Link>
                    </div>
                    <div className="flex items-right py-3 pr-2">
                       
                        <button className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg 
                            shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 
                            focus:ring-opacity-75"
                           
                        >
                            <Link to='/login'>
                                Log In
                            </Link>
                           
                        </button>
                        <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg 
                            shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 
                            focus:ring-opacity-75"

                        >
                            <Link to='/sign-up'>
                                Sign Up
                            </Link>
                           
                        </button>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;