import React, {useState} from 'react'


const Login = () => {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleEmail = (evt) => {
        let val = evt.target.value;
        setEmail(val);
        return 0
    }

    const handleLoginId = (evt) =>{
        let val = evt.target.value;
        setLoginId(val);
       
    }
    const handlePass = (evt) =>{
        let val = evt.target.value;
        setPassword(val);
       
    }
    const handleLogin =() => {
        return 0
    }
    return (
        <div className="w-full pt-40">
            <div className="bg-blue-400 dark:bg-slate-800 p-8 rounded shadow-md  md:w-96  flex flex-col items-center mb-auto mt-auto mx-auto">

            <h2 className="text-white text-2xl font-semibold mb-6">Sign Up</h2>

           
            <div className="mb-4">
                <label for="username" className="block text-sm font-medium text-gray-600">Username</label>
                <input type="text" id="username" value={loginId} onChange={handleLoginId}
                name="username" className="mt-1 p-2 w-full border rounded-md"/>

            </div>

            <div className="mb-4">
                <label for="password" className="block text-sm font-medium text-gray-600">Email</label>
                <input type="text" id="email" name="email" 
                    onChange={handleEmail}
                    value={email}
                    className="mt-1 p-2 w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label for="password" className="block text-sm font-medium text-gray-600">Password</label>
                <input type="password" id="password" name="password" 
                    onChange={handlePass}
                    value={password}
                    className="mt-1 p-2 w-full border rounded-md"
                />
            </div>
            <div className="mb-6">
                <button  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
                    onClick={handleLogin}
                >
                    Log In
                </button>
            </div>
            
            </div>
        </div>
        
    )
}

export default Login;