import React from 'react';

import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../main/Main';
import Home from '../pages/home/Home';
import Colleges from '../pages/colleges/Colleges';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Admission from '../pages/admission/Admission';
import MyCollege from '../pages/myCollege/MyCollege';
import CollegeDetails from '../pages/collegeDetails/CollegeDetails';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "colleges",
            element: <Colleges></Colleges>
        },
        {
          path: ":id",
          element: <CollegeDetails></CollegeDetails>,
          loader: ({params}) => fetch(`college.json/${params.id}`)
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: "register",
            element: <Register></Register>
        },
        {
          path: "admission",
          element: <Admission></Admission>
        },
        {
          path: "myCollege",
          element: <MyCollege></MyCollege>
        },
        
    ]
    },
  ]);

export default router;