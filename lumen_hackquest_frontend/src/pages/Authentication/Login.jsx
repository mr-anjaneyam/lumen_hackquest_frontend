import React, { useState } from 'react';
import styles from '../../assets/styles/Login.module.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Username:', username);
        console.log('Login Password:', password);
    };

    return (
        <div className={styles['login-container']}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles['login-form-group']}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={styles['login-form-group']}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={styles['login-radio-input']}>
                    <input
                        type="radio"
                        id="user-type"
                        name="LoginType"
                        value="User"
                    />
                    <label htmlFor="user-type">User</label>

                    <input
                        type="radio"
                        id="staff-type"
                        name="LoginType"
                        value="Staff"
                    />
                    <label htmlFor="developer-type">Staff</label>

                    <input
                        type="radio"
                        id="manager-type"
                        name="LoginType"
                        value="Manager"
                    />
                    
                    <label htmlFor="developer-type">Manager</label>

                    <input
                        type="radio"
                        id="administrator-type"
                        name="LoginType"
                        value="Administrator"
                    />
                    <label htmlFor="administrator-type">Administrator</label>
                </div>
                <div className={styles['login-form-group']}>
                    <button type="submit" className={styles['login-button']}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
