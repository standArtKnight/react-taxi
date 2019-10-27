import React from 'react';
import {SingupForm} from './SingupForm';

export const Singup = ({ setPage }) => {
    return (
        <> 
            <h1>Singup</h1>
            <SingupForm setPage={setPage} />
        </>
    );
};