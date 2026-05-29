import { useState } from 'react'
import InputField from '../../components/InputField'

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
            setError("")
        }
        
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-12 rounded-xl shadow-md w-full max-w-xl">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Welcome to House Showcase
                </h1>
                <p className="text-sm text-gray-500 mb-6">Please sign in to continue</p>
                <InputField
                label="Email"
                type="email"
                placeholder="Please enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <InputField
                label="Password"
                type="password"
                placeholder="Please enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    className="w-full bg-blue-400 mt-3 py-2 rounded-lg text-white"
                    onClick={handelLogin}>Login</button>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            
        </div>

    )
}

export default LoginPage;