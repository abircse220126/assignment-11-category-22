import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { use } from 'react';

const ManageUser = () => {
 
    const {data}=useQuery({
        queryKey:["borrower" , "pending"],
        queryFn:()=>{
            const result= axios.get("http://localhost:3000/applicationform")
            return result
        }
    })

    const applications=data?.data
    console.log(applications)

    return (
        <div>
            <h2>this is manage user section</h2>
        </div>
    );
};

export default ManageUser;