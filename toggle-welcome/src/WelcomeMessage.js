import React, { useState } from 'react';

function WelcomeMessage({ userName }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
                color: '#fff',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <div
                style={{
                    background: '#fff',
                    color: '#333',
                    padding: '2rem',
                    borderRadius: '15px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    textAlign: 'center',
                    maxWidth: '400px',
                    width: '100%',
                }}
            >
                <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                    {isLoggedIn ? `Welcome, ${userName}!` : 'Please log in'}
                </h1>
                <button
                    onClick={toggleLogin}
                    style={{
                        padding: '0.8rem 1.5rem',
                        fontSize: '1rem',
                        borderRadius: '25px',
                        border: 'none',
                        background: isLoggedIn
                            ? 'linear-gradient(135deg, #ff416c, #ff4b2b)'
                            : 'linear-gradient(135deg, #56ab2f, #a8e063)',
                        color: '#fff',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                    onMouseOver={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                        e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                    }}
                >
                    {isLoggedIn ? 'Log Out' : 'Log In'}
                </button>
            </div>
        </div>
    );
}

export default WelcomeMessage;