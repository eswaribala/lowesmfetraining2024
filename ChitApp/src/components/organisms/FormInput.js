import React from 'react';
import {TextField} from "@mui/material";

const FormInput = ({ ...props }) => {
    return (
        <div style={{ marginBottom: '10px' }}>
            <label>{props.label}</label>
            <TextField
                fullWidth
                margin="dense"
              /*  props has children name,type onchange etc.,*/
                {...props}
            />


            {props.error && <span style={{ color: 'red' }}>{props.error}</span>}
        </div>
    );
};

export default FormInput;