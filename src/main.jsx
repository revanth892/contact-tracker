import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from "./routes/root";
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from "react-router-dom";
import ErrorPage from './routes/error-page';
import Contact from './routes/contact';
const router = createBrowserRouter([
  {
      path: "/",
      element: <Root />,
      errorElement:<ErrorPage />,
    Children: [
      {
        path:"contacts/:contactId",
        element:<Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
