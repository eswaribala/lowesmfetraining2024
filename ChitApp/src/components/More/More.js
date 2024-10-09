import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { MoreWrapper } from './More.styled';
import {Link, Outlet, Route, Routes, useLocation} from "react-router-dom";
import {Box, Tab, Tabs} from "@mui/material";
import {TabContext} from "@mui/lab";
import Home from "../Home/Home";
import DuePayments from "../DuePayments/DuePayments";
import MyTickets from "../MyTickets/MyTickets";
import Receipts from "../Receipts/Receipts";
import BranchLocator from "../BranchLocator/BranchLocator";
import NewVacancy from "../NewVacancy/NewVacancy";
import FAQ from "../FAQ/FAQ";

function More(){
    const location = useLocation();
    const [value, setValue] = useState(location.pathname);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{p: 2, width: '40%', marginLeft:'25%',     backgroundColor:'lightBlue', fontSize:'large', justifyContent:'center'}}>

            <TabContext value={value}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="branchlocator" value="/more/branchlocator" component={Link} to={
                        `/more/branchlocator?location1=chennai&location2=bangalore`}/>
                    <Tab label="newvacancy" value="/more/newvacancy" component={Link} to="/more/newvacancy" />
                    <Tab label="faq" value="/more/faq" component={Link} to="/more/faq" />
                </Tabs>

                {/* Renders child components based on the route */}
                <Outlet />
            </TabContext>
        </Box>
    );
}

export default More;
