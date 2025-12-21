import React, { useState } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContex';

const ThemeProvider = ({children}) => {

    const [dark , setdark]=useState(false)

    return (
       <ThemeContext value={{dark,setdark}}>
        {children}
       </ThemeContext>
    );
};

export default ThemeProvider;