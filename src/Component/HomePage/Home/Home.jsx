import React, { use } from 'react';
import { AuthContext } from '../../../Context/AuthContext/AuthContext';

const Home = () => {
    const {user}=use(AuthContext)

    console.log(user)

    return (
        <div>
            <h2>this is home page</h2>
        </div>
    );
};

export default Home;