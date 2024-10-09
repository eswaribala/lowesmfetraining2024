import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { MyTicketsWrapper } from './MyTickets.styled';
import {Chit} from "../../models/Chit";
import {faker} from "@faker-js/faker";
import {MyTicket, Status} from "../../models/MyTicket";
import {DataGrid} from "@mui/x-data-grid";

function MyTickets() {
    const [tickets, setTickets] = useState([]);
    useEffect(() => {
       generateTickets()
    }, []);

    function generateTickets(){
        let data=new Array();

        for(let i=0;i<100;i++){
            data.push(new MyTicket(i,faker.person.firstName(),
                Status[faker.number.int({min:1, max:3})],
                faker.number.int(1000000,10000000),
                faker.number.int(100000,200000),
                faker.number.int(10000,20000),
                faker.date.birthdate({ min: 2024, max: 2025, mode: 'year' }).toDateString(),
                ));
        }
        setTickets(data);
        sessionStorage.setItem("tickets", JSON.stringify(data));
    }

    const columns = [
        { field: 'id', headerName: 'Id',width: 300 },
        { field: 'name', headerName: 'Name',width: 300 },
        { field: 'status', headerName: 'Status',width: 300 },
        { field: 'chitId', headerName: 'Chit Id',width: 300 },
        { field: 'chitValue', headerName: 'Chit Value',width: 300 },
        { field: 'dueAmount', headerName: 'Due Amount',width: 300 },
        { field: 'auctionDate', headerName: 'Auction Date',width: 300 },
    ]

    return(
        <div>
        {
        (tickets.length > 0) && (
            <DataGrid rows={tickets}
                      columns={columns}
                      initialState={{
                          ...tickets.initialState,
                          pagination: {paginationModel: {pageSize: 5}},
                      }}
                      pageSizeOptions={[5, 10, 25]}/>
            )
          }
        </div>
    )

}



export default MyTickets;
