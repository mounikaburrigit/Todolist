import React, { createContext } from 'react';
import ComD from './ComD';
export const Name=React.createContext()

const ComA = () => {
    const obj={
        firstname:"mounika",
        lastname:"burri",
    }
    return (
        <div>
            <Name.Provider value={obj}>
            <ComD/>
            </Name.Provider>
            
        </div>
    );
};

export default ComA;