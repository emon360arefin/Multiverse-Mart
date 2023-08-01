import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    RouterProvider,
} from "react-router-dom";
import router from './Routes/Router';
import AuthProvider from './Providers/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
    <React.StrictMode> 
        <RouterProvider router={router} />
=======
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
>>>>>>> cbf1f92c90b0646fafbb9abd26f066fdecbd96d0
    </React.StrictMode>,
)
