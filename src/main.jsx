import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import DetailsJob from './Components/DetailsJob/DetailsJob.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appliedJob",
        element: <AppliedJobs></AppliedJobs>,
        loader :()=>fetch(`/public/data/jobs.json`),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/jobs/:id",
        element: <DetailsJob></DetailsJob>,
        loader: ({}) => fetch(`/public/data/jobs.json`),  // do not load all data,load data only what you need....
        
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
