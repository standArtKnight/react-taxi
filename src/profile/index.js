import React, { useContext } from 'react';
import UserContext from "../UserContext.js";

export const Profile = () => {
    const user = useContext(UserContext);
    return (
        <> 
            {user.isLoggedIn ? <h1>Profile</h1> : <h1>Сначала залогиньтесь</h1>}
        </>
    );
};