import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from "./routes/root";
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from "react-router-dom";
import ErrorPage from './routes/error-page';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
