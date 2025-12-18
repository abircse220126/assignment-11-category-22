import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./Layout/MainLayout/MainLayout.jsx";
import Home from "./Component/HomePage/Home/Home.jsx";
import Register from "./Component/Authentication/Register/Register.jsx";
import AuthProvider from "./Context/AuthProvider/AuthProvider.jsx";
import Login from "./Component/Authentication/Login/Login.jsx";
import AllLoanPages from "./Pages/AllLoanPages/AllLoanPages.jsx";
import ViewDetails from "./Pages/ViewDetails/ViewDetails.jsx";
import axios from "axios";
import LoanFormPage from "./Pages/LoanFormPage/LoanFormPage.jsx";
import MyLoanPage from "./Pages/MyLoanPage/MyLoanPage.jsx";
import DashBoardLayout from "./Layout/DashboardLayout/DashBoardLayout.jsx";
import DashBoardPage from "./DashBoard/DashBoardPage/DashBoardPage.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ManageUser from "./Admin/ManageUser/ManageUser.jsx";
import AllLoan from "./Admin/AllLoan/AllLoan.jsx";
import UpdatedLoan from "./Admin/UpdatedLoan/UpdatedLoan.jsx";
import LoanApplication from "./Admin/LoanApplication/LoanApplication.jsx";
import AddLoan from "./Manager/AddLoan/AddLoan.jsx";
import ManageLoan from "./Manager/ManageLoan/ManageLoan.jsx";
import UpdateLoan from "./Manager/UpdateLoan/UpdateLoan.jsx";
import PendingLoan from "./Manager/PendingLoan/PendingLoan.jsx";
import ApproveLoan from "./Manager/ApproveLoan/ApproveLoan.jsx";
import Profile from "./Component/Profile/Profile.jsx";
import UpdateUserStatus from "./Admin/UpdateUserStatus/UpdateUserStatus.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },

      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/all-loan",
        Component: AllLoanPages,
      },

      {
        path: "/view-details/:id",
        loader: ({ params }) =>
          axios.get(`http://localhost:3000/loan/${params.id}`),
        Component: ViewDetails,
      },
      {
        path: "/loan-form/:id",
        loader: ({ params }) =>
          axios.get(`http://localhost:3000/loan/${params.id}`),
        Component: LoanFormPage,
      },
    ],
  },

  {
    path: "dashboard",
    Component: DashBoardLayout,
    children: [
      {
        index: true,
        Component: DashBoardPage,
      },
      {
        path: "my-loan",
        Component: MyLoanPage,
      },
      {
        path: "manage-user",
        Component: ManageUser,
      },
      {
        path: "all-loan",
        Component: AllLoan,
      },
      {
        path: "update-loan/:id",
        loader: ({ params }) =>
          axios.get(`http://localhost:3000/loan/${params.id}`),
        Component: UpdatedLoan,
      },
      {
        path: "loan-application",
        Component: LoanApplication,
      },
      {
        path: "add-loan",
        Component: AddLoan,
      },
      {
        path: "manage-loan",
        Component: ManageLoan,
      },
      {
        path: "pending-loan",
        Component: PendingLoan,
      },
      {
        path: "loan-approve",
        Component: ApproveLoan,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "user-status/:id",
        loader: ({ params }) =>
          axios.get(`http://localhost:3000/users/${params.id}`),
        Component: UpdateUserStatus,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />,
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
