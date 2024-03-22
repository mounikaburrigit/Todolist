import React, { useContext } from 'react';
import { context } from "./User1";


const User3 = () => {
    const r=useContext(context)
    return (
        <div>
            <h1>{r}</h1>
        </div>
    );
};

export default User3;