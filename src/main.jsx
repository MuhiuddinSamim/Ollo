import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import './index.css'
import router from './Route/Routes';
import AuthProviders from './Components/Authprovider/AuthProviders';

ReactDOM.createRoot(document.getElementById("root")).render(
<AuthProviders>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
</AuthProviders>

)
