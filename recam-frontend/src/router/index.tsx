import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    }
])

export default router