import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/'; // Redirect to login
        }

        fetch('http://localhost:4000/dashboard', {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch((err) => console.error(err));
    }, []);

    return <div>{message}</div>;
}

export default Dashboard;

