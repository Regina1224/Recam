import { useState } from "react";
import InputField from "../../components/InputField";

const RegisterPage = () => {
    const [firstname, setFirstname] = useState<string>("")
    const [lastname, setLastname] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string>("")

    const handelRegister = () => {
        if (!firstname || !lastname || !email || !password){
            setError("Please fill in all fields")
        }else{
            console.log(firstname)
            console.log(lastname)
            console.log(email)
            console.log(password)
            setError("")
        }
        
    }


    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-12 rounded-xl shadow-md w-full max-w-xl">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Create your account
                </h1>
                <p className="text-sm text-gray-500 mb-6">Register as an agent</p>
                <InputField
                label="First Name"
                type="text"
                placeholder="Please enter your first name"
                value={firstname}
                onChange={(e)=> setFirstname(e.target.value)}
                />
                <InputField
                label="Last Name"
                type="text"
                placeholder="Please enter your last name"
                value={lastname}
                onChange={(e)=> setLastname(e.target.value)}
                />
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
                    onClick={handelRegister}>Register</button>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}


            </div>
        </div>
    )
}

export default RegisterPage;