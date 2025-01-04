import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // To link to the login page
import styles from '../../assets/styles/Login.module.css';

const RegisterUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        if (!/^[A-Za-z ]+$/.test(name)) {
            alert('Name can only contain letters and spaces.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            alert('Phone number must be 10 digits.');
            return;
        }

        // If validation passes
        console.log('Registered:', { name, email, password, gender, phone });
        // Add registration logic here (e.g., send data to the backend)
    };

    const handleClear = () => {
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setGender('');
        setPhone('');
    };

    return (
        <div className={styles['login-container']}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles['login-form-group']}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles['login-form-group']}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                        required
                    />
                </div>
                <div className={styles['login-form-group']}>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={styles['login-radio-input']}>
                    <label>Gender:</label>
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="Male"
                            onChange={(e) => setGender(e.target.value)}
                        />
                        <label htmlFor="male">Male</label>
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="Female"
                            onChange={(e) => setGender(e.target.value)}
                        />
                        <label htmlFor="female">Female</label>

                </div>
                <div className={styles['login-form-group']}>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        pattern="[0-9]{10}"
                        required
                    />
                </div>
                <div className={styles['login-form-group']}>
                    <button type="submit" className={styles['login-button']}>
                        Register
                    </button>
                    <button
                        type="button"
                        className={styles['login-button']}
                        onClick={handleClear}
                    >
                        Clear
                    </button>
                    <button
                        type="button"
                        className={styles['login-button']}
                        onClick={() => window.history.back()}
                    >
                        Cancel
                    </button>
                </div>
            </form>
            <div className={styles['login-form-group']}>
                <p>
                    Already have an account?{' '}
                    <Link to="/login" className={styles['login-link']}>
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterUser;
