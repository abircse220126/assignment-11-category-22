import React from 'react';
import useRole from '../../Hooks/useRole';
import { GiH2O } from 'react-icons/gi';
import BorrowerDashBoard from '../BorrowerDashBoard/BorrowerDashBoard';
import ManagerDashBoard from '../ManagerDashBoard/ManagerDashBoard';
import AdminDashBoard from '../AdminDashboard/AdminDashBoard';

const DashBoardPage = () => {
    const { role }=useRole()
    return (
        <div>
           {role==="borrower" && <BorrowerDashBoard></BorrowerDashBoard>}
           {role==="manager" && <ManagerDashBoard></ManagerDashBoard>}
           {role==="admin" && <AdminDashBoard></AdminDashBoard>}
        </div>
    );
};

export default DashBoardPage;