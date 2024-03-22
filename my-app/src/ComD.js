import React, { useContext } from 'react';
import { Name } from "./ComA";

const ComD = () => {
    const data=useContext(Name)
    return (
        <div>
            <h1>name:{data.firstname}</h1>
            <h1>surename:{data.lastname}</h1>
        </div>
    );
};

export default ComD;