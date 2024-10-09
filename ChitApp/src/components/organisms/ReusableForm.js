import React, { useState } from 'react';
import FormInput from './FormInput';
import {CustomButton} from "../atoms/CustomButton";
import {Box} from "@mui/material";

const ReusableForm = ({ fields, onSubmit, validate }) => {
    const [formValues, setFormValues] = useState(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
    );
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formValues))
        const errors = validate(formValues);
        if (Object.keys(errors).length === 0) {
            onSubmit(formValues);
        } else {
            setFormErrors(errors);
        }
    };

    return (
       <Box sx={{p: 2, width: '100%'}}>
        <form onSubmit={handleSubmit}>
            {fields.map((field) => (
                <FormInput
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    value={formValues[field.name]}
                    onChange={handleChange}
                    error={formErrors[field.name]}

                />
            ))}
            <CustomButton text="Register" type="submit" color="success" variant="contained"></CustomButton>
        </form>
       </Box>
    );
};

export default ReusableForm;