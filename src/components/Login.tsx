import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate('/home');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <h1 className="text-3xl font-bold text-center text-emerald-800 mb-8">Login</h1>
        </div>
    );
};

export default Login;