import React from 'react'
import {TextField} from "@mui/material";


export function CustomTextField({id,label,type,value,onBlur,onChange,error,helperText}){

    return(
        <TextField id={id}  label={label} type={type} value={value}

                   onBlur={e=>onBlur(e)}
                   onChange={e=>onChange(e)}
                   error={error}
                   helperText={helperText}
                   fullWidth variant="outlined" sx={{mb:2}}>

        </TextField>
    )
}