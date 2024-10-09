import React from 'react'
import {Button} from "@mui/material";

export function CustomButton({text,color,variant,type}){



    return(

        <Button fullWidth variant={variant} color={color} type={type} sx={{height:'50px',mt:'10px'}}>
            {text}
        </Button>

    )

}