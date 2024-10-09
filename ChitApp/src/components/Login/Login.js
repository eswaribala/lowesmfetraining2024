import React, {useEffect, useRef, useState} from 'react';
import {Box, Button, Snackbar, TextField} from "@mui/material";
import './Login.css'
import {CustomTextField} from "../atoms/CustomTextField";
import {CustomButton} from "../atoms/CustomButton";
import  * as yup from 'yup';
import {useFormik} from "formik";
import axios from "axios";
import {LoginUrl} from '../../resources/configurations/config'
import {Alert} from "@mui/lab";
import ReCAPTCHA from "react-google-recaptcha";


function Login({...props}){

    //step1 snackbar
    const [open,setOpen]=useState(false);
    const [pass,setPass]=useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
        console.log("Captcha value:", value);
    };

    const yupValidationSchema=yup.object({
        email:yup.string("Enter Email").email("Enter Valid Email").required("Must Enter email"),
        password:yup.string("Enter Password").required("Must Enter password")
    })

    const formik=useFormik({
        initialValues:{
            email:"eve.holt@reqres.in",
            password:"Test@123"
        },
        validationSchema:yupValidationSchema,


        onSubmit:function(values){

            // Check if CAPTCHA is solved
            if (!captchaValue) {
                setErrorMessage("Please verify that you are not a robot.");
                return;
            }
            let data={
                "email":values.email,
                "password":values.password
            }


           axios.post(LoginUrl,data).then(response=>{
               console.log(response.data.token);
               sessionStorage.setItem("email",data.email);
               setOpen(true)
               props.LoginState(true);

           },error=>{
               alert(error);
               setPass(true);

           })

            /*
            fetch(LoginUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: data
            }).then(response=>{
                console.log(response);
                setOpen(true)
            },error=>{
                alert(error);
                setPass(true);
            })

             */
        }
    })

     function handleClose(){
        setOpen(false);
     }

     function handleForgotPassword(){
         props.ForgotPasswordState(true);
     }

     function handleNewUser(){
            props.NewUserState(true);
     }

    return(
        <Box sx={{p: 2, width: '30%'}}>
            <p> Forgot Password?
                <a href="#" onClick={handleForgotPassword}>Forgot Password</a>
            </p>
            <Snackbar open={open}
                      autoHideDuration={5000}
                      onClose={handleClose}
                      sx={{
                          '&.MuiSnackbar-root': {top: '1%', left: '50%'}
                      }}>
                <Alert onClose={handleClose}
                       severity="success"
                       variant="filled"
                       sx={{

                           width: '100%'
                       }}>
                    Login Successful
                </Alert>

            </Snackbar>


            <form onSubmit={formik.handleSubmit}>
                <fieldset>
                    <legend className="legend">Customer Login</legend>
                    <CustomTextField id="email" label="Email" type="email" value={formik.values.email}
                                     onBlur={formik.handleBlur}
                                     onChange={formik.handleChange}
                                     error={formik.errors.email && Boolean(formik.errors.email)}
                                     helperText={formik.touched.email && formik.errors.email}

                    />
                    {
                        (pass) ? <p>Invalid Password</p> : <p></p>

                    }
                    <CustomTextField id="password" label="Password" type="password" value={formik.values.password}
                                     onBlur={formik.handleBlur}
                                     onChange={formik.handleChange}
                                     error={formik.errors.password && Boolean(formik.errors.password)}
                                     helperText={formik.touched.password && formik.errors.password}


                    />


                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_SITE_KEY} // Replace this with your actual site key
                        onChange={handleCaptchaChange}
                    />
                    {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
                    {/* <CustomTextField id="captcha" label="captcha"/>*/}
                    <CustomButton text="Login" type="submit" color="success" variant="contained"></CustomButton>

                </fieldset>

            </form>
            <p> New User?
                <a href="#" onClick={handleNewUser}>New User</a>
            </p>
        </Box>
    )

}


export default Login;
