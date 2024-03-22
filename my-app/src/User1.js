import React, { createContext } from 'react';
import User3 from './User3';
export const context=React.createContext()

const User1 = () => {
    let name="mounika"
    return (
        <div>
           <context.Provider value={name}>
            <User3/>
            </context.Provider> 
        </div>
    );
};

export default User1;