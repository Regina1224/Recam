import { Outlet } from 'react-router-dom'
import { Search } from 'lucide-react'

const Layout = () => {
   
    return(
        <div className="min-h-screen bg-gray-50">
            {/* Top area */}
            <header className="bg-white flex justify-between items-center px-12 py-4 shadow-sm">
                <div>
                    <p className="text-sm text-gray-500 mb-1">Hi, Jane Doe</p>
                    <h1 className="text-xl font-bold">My Order</h1>
                </div>
                <div className="relative flex items-center">
                    <Search className="absolute left-3 text-gray-400 w-4 h-4" />
                    <input placeholder="Search My Order" className="border border-gray-300 rounded-lg pl-9 px-4 py-2 text-sm" />
                </div>
            </header>
            {/* Content area */}
            <main>
                <Outlet />
            </main>
            
        </div>

    )
}

export default Layout;