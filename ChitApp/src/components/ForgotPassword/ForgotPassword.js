import React, { useState } from "react";
import {ForgotPasswordUrl} from "../../resources/configurations/config";
import {Box, Button, TextField} from "@mui/material";

const ForgotPassword = ({ForgotPasswordState}) => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    // Email input change handler
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Email validation
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Submit handler for the forgot password form
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setError("");
        setMessage("Please check your email for password reset instructions.");

        // Simulate an API call to trigger password reset email
        // Replace this with actual API request

        fetch(ForgotPasswordUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              setMessage("Password reset email sent successfully.");
              ForgotPasswordState(false);
            } else {
              setError("Failed to send password reset email.");
            }
          })
          .catch((err) => {
            setError("An error occurred. Please try again.");
          });

    };

    return (
        <Box sx={{p: 2, width: '30%'}}>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Enter your email address:</label>
                    <TextField
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        fullWidth
                        variant="outlined"
                        margin="dense"
                        sx={{mb:2}}
                    />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {message && <p style={{ color: "green" }}>{message}</p>}
                <Button type="submit" fullWidth variant="contained" color="success">Send Password Reset Email</Button>
            </form>
        </Box>
    );
};

export default ForgotPassword;

