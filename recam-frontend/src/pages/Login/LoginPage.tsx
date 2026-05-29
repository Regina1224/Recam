import { useState } from 'react'

const LoginPage = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')

    const handelLogin = () => {
        if (email === '' || password === ''){
            setError('Please fill in all fields')
        }else{
            console.log('email:', email)
            console.log('password:', password)
        }
        
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-18 rounded-xl shadow-md w-full max-w-xl">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Welcome to House Showcase
                </h1>
                <p className="text-sm text-gray-500 mb-6">Please sign in to continue</p>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Please enter your email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-4'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        placeholder="Please enter your password"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <button 
                    className="w-full bg-blue-400 mt-3 py-2 rounded-lg text-white"
                    onClick={handelLogin}>Login</button>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            
        </div>

    )
}

export default LoginPage;