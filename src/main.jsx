import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
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
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/jobs/:id",
        element: <DetailsJob></DetailsJob>,
        loader: ({params}) => fetch(`../public/data/jobs.json`),
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
