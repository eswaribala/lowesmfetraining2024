import React from 'react';
import ReusableForm from "../organisms/ReusableForm";



const validate = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Username is required';
    }

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email is invalid';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Please confirm your password';
    } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
};

const RegistrationForm = ({NewUserState}) => {
    const fields = [
        { name: 'username', label: 'Username', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'password', label: 'Password', type: 'password' },
        { name: 'confirmPassword', label: 'Confirm Password', type: 'password' },
    ];

    const handleSubmit = (formData) => {
        console.log('Form Submitted:', formData);
        NewUserState(false);
        // Make API call or handle registration logic here
    };

    return (
        <div>
            <h2>Register</h2>
            <ReusableForm fields={fields} onSubmit={handleSubmit} validate={validate} />
        </div>
    );
};

export default RegistrationForm;
