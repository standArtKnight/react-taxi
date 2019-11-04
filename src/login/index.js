import React from 'react';
import {LoginForm} from './LoginForm';

export const Login = ({ setPage }) => {
    return (
        <> 
            <LoginForm setPage={setPage} />
        </>
    );
};