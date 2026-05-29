import { createBrowserRouter } from "react-router-dom";
import LoginPage  from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import ProtectedRoute from "../ProtectedRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: '/my-order',
                element: <div>My Order Page</div>
            }
        ]
    }
])

export default router