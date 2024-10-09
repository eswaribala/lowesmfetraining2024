import React, {useEffect, useState} from 'react';

import DashboardMenu from "../DashboardMenu/DashboardMenu";
import { createContext } from 'react';

export const TicketContext = createContext("");
const Dashboard = () => {
    const [tickets, setTickets] = useState([]);
    useEffect(() => {
        setTickets(sessionStorage.getItem("tickets"))
    }, [tickets]);
    return(
        <div>
            <TicketContext.Provider value={{ tickets, setTickets}}>
               <DashboardMenu/>
            </TicketContext.Provider>
        </div>
    );
}



export default Dashboard;
