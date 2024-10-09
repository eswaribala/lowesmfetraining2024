import React, {useEffect, useState} from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Link, Navigate, Outlet, Route, Routes, useLocation} from "react-router-dom";
import Home from "../Home/Home";
import {DuePayments} from "../DuePayments/DuePayments";
import MyTickets from "../MyTickets/MyTickets";
import Receipts from "../Receipts/Receipts";
import More from "../More/More";
import Login from "../Login/Login";
import BranchLocator from "../BranchLocator/BranchLocator";
import NewVacancy from "../NewVacancy/NewVacancy";
import FAQ from "../FAQ/FAQ";
import DataFetcher from "../DataFetcher/DataFetcher";
import {FetchUsersUrl} from "../../resources/configurations/config";
import ViewTickets from "../ViewTickets/ViewTickets";

// Wrap ItemList with withData HOC
const EnhancedItemList = DataFetcher('https://jsonplaceholder.typicode.com/users')(FAQ);
const HomeWrapper=DataFetcher(FetchUsersUrl)(Home);

function DashboardMenu(){

   /* const [value,setValue]=useState("1");
    useEffect(() => {

    }, []);
    function handleChange(event,value){
           setValue(value)
    }*/
    const location = useLocation();
    const [value, setValue] = useState(location.pathname);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <div>
        <Box sx={{p: 2, width: '40%', marginLeft:'25%',     backgroundColor:'lightBlue', fontSize:'large', justifyContent:'center'}}>
            <TabContext value={value} onChange={handleChange}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value}    centered>
                        <Tab label="Home" component={Link} to={"/home"} value={"/home"}  />
                        <Tab label="Due Payments"  component={Link} to={"/duepayments"} value={"/duepayments"}  />
                        <Tab label="My Tickets"  component={Link} to={"/mytickets"} value={"/mytickets"}   />
                        <Tab label="Receipts" component={Link} to={"/receipts"} value={"/receipts"}   />
                        <Tab label="View Tickets" component={Link} to={"/viewtickets"} value={"/viewtickets"}   />
                        <Tab label="More" component={Link} to={"/more"} value={"/more"}   />

                    </Tabs>
                </Box>
               {/* <TabPanel value="1">Home</TabPanel>
                <TabPanel value="2">My Tickets</TabPanel>
                <TabPanel value="3">Due Payments</TabPanel>
                <TabPanel value="4">Receipts</TabPanel>
                <TabPanel value="5">More</TabPanel>*/}
            </TabContext>
        </Box>
        <Routes>

            <Route path={"/home"}  element={<HomeWrapper/>}/>
            <Route path={"/duepayments"}  element={<DuePayments/>}/>
            <Route path={"/mytickets"}  element={<MyTickets/>}/>
             <Route path={"/receipts"}  element={<Receipts/>}/>
            <Route path={"/viewtickets"}  element={<ViewTickets/>}/>
            <Route path={"/more"}  element={<More/>}>
                <Route path={"/more/branchlocator"} element={<BranchLocator/>}/>
                <Route path={"/more/newvacancy"}  element={<NewVacancy/>}/>
                <Route path={"/more/faq"}  element={<EnhancedItemList/>}/>
            </Route>

        </Routes>

        </div>
    )
}

export default DashboardMenu;
