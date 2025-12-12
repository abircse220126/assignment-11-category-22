import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layout/MainLayout/MainLayout.jsx';
import Home from './Component/HomePage/Home/Home.jsx';
import Register from './Component/Authentication/Register/Register.jsx';
import AuthProvider from './Context/AuthProvider/AuthProvider.jsx';
import Login from './Component/Authentication/Login/Login.jsx';
import AllLoanPages from './Pages/AllLoanPages/AllLoanPages.jsx';
import ViewDetails from './Pages/ViewDetails/ViewDetails.jsx';
import axios from 'axios';
import LoanFormPage from './Pages/LoanFormPage/LoanFormPage.jsx';
import MyLoanPage from './Pages/MyLoanPage/MyLoanPage.jsx';
import DashBoardLayout from './Layout/DashboardLayout/DashBoardLayout.jsx';
import DashBoardPage from './DashBoard/DashBoardPage/DashBoardPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        Component:Register
      },
      {
        path:"/login",
        Component:Login
      },
      
      {
        path:"/home",
        Component:Home
      },
      {
        path:"/all-loan",
        Component:AllLoanPages
      },
      {
        path:"/view-details/:id",
        loader:({params})=>axios.get(`http://localhost:3000/loan/${params.id}`),
        Component:ViewDetails
      },
      {
        path:"/loan-form",
        Component: LoanFormPage ,
      },
      {
        path:"/my-loan",
        Component:MyLoanPage
      }
    ]
  },
  
  {
    path:"/dashboard",
    Component:DashBoardLayout,
    children:[
      {
        index:true,
        Component:DashBoardPage
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
)
