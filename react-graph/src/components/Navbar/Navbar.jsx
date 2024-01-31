import React, {useState}  from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Navbar = () => {
    // const navigate = useNavigate();
    const [ navbar, setNavbar ] = useState(false);
    const handleLogInBtn = () => {

    }
    return (
        <div>
            <nav className="w-full fixed bg-blue-400 dark:bg-slate-800  shadow">
                <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <h2 className="text-3xl font-black text-white">The Store</h2>
                    </div>
                    <div className="flex items-right py-3 pr-2">
                        <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg 
                            shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 
                            focus:ring-opacity-75"
                            onClick={handleLogInBtn}
                        >
                            Log In
                        </button>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;