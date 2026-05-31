import { createBrowserRouter } from "react-router-dom";
import LoginPage  from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import ProtectedRoute from "../ProtectedRoute";
import Layout from "../components/Layout";

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
                element: <Layout />,
                children: [
                    {
                        path: '/my-order',
                        element: <div></div>
                    }
                ]
            }
        ]
    }
])

export default router