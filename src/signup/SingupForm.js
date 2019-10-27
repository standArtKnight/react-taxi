import React from "react";

export const SingupForm = ({ setPage }) => {
    const onSubmit = e => {
        e.preventDefault();
        setPage('profile');
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type="email" name="email" label="email" placeholder="Email" />
            </div>
            <div>
                <input type="text" name="firstname" label="firstname" placeholder="Name" />
            </div>
            <div>
                <input type="text" name="surname" label="surname" placeholder="Surname" />
            </div>
            <div>
                <input type="password" name="password" label="password" placeholder="Password" />
            </div>
            <button>Singup</button>
        </form>
    );
}