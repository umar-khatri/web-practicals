import React, { useState } from 'react';

function WelcomeMessage({ defaultName }) {
    const [name, setName] = useState(defaultName);

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const resetName = () => {
        setName(defaultName);
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
            <div className="card shadow p-4 text-center" style={{ maxWidth: '400px', width: '100%' }}>
                <h1 className="mb-4">Welcome, {name}!</h1>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleInputChange}
                />
                <button className="btn btn-primary me-2" onClick={resetName}>
                    Reset Name
                </button>
            </div>
        </div>
    );
}

export default WelcomeMessage;