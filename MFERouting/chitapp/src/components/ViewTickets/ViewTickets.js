import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { ViewTicketsWrapper } from './ViewTickets.styled';
import {DataGrid} from "@mui/x-data-grid";
import {TicketContext} from "../Dashboard/Dashboard";
import {List, ListItem, ListItemText} from "@mui/material";
import {faker} from "@faker-js/faker";
function ViewTickets(){
    const { tickets, setTickets } = useContext(TicketContext);
    const columns = [
        { field: '_id', headerName: 'Id',width: 300 },
        { field: '_name', headerName: 'Name',width: 300 },
        { field: '_status', headerName: 'Status',width: 300 },
        { field: '_chitId', headerName: 'Chit Id',width: 300 },
        { field: '_chitValue', headerName: 'Chit Value',width: 300 },
        { field: '_dueAmount', headerName: 'Due Amount',width: 300 },
        { field: '_auctionDate', headerName: 'Auction Date',width: 300 },
    ]

    let ticketsData;
    return(
        <div>
            {
              (tickets.length>0)&&(

                    /*JSON.parse(tickets).forEach(ticket => {
                       console.log(ticket._chitId);

                       })*/


                    (ticketsData=JSON.parse(tickets))&&

                                <DataGrid rows={ticketsData}
                                          getRowId={(row) => faker.number.int({min:1, max:100})}
                                          columns={columns}
                                          initialState={{
                                              ...tickets.initialState,
                                              pagination: {paginationModel: {pageSize: 5}},
                                          }}
                                          pageSizeOptions={[5, 10, 25]}/>

                   )


            }


            <h1>Hi</h1>
        </div>
    )
}

export default ViewTickets;
