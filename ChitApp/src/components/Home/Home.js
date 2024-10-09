import React, {useEffect, useState} from 'react';
import {FetchUsersUrl} from "../../resources/configurations/config";
import axios from "axios";
import MailIcon from '@mui/icons-material/Mail';
import './Home.css'
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {pink} from "@mui/material/colors";
import {faker} from '@faker-js/faker'
import {Chit} from "../../models/Chit";
import EventNoteIcon from '@mui/icons-material/EventNote';
import CallIcon from '@mui/icons-material/Call';
import {DataGrid} from "@mui/x-data-grid";

function Home({dataFetcherResponse}){

    const [response,setResponse]=useState('');
    const [chits,setChits]=useState([]);

    useEffect(() => {
        handleOnLoad()
    }, []);

    const columns = [
        { field: 'id', headerName: 'Id',width: 300 },
        { field: 'chitId', headerName: 'Chit Id',width: 300 },
        { field: 'chitValue', headerName: 'Chit Value', width: 300 },
        { field: 'dueAmount', headerName: 'Due Amount', width: 300 },
        { field: 'nextAuctionDate', headerName: 'Next Auction Date', width: 300 }
    ]
    function handleOnLoad(){
       let data=new Array();

       for(let i=0;i<100;i++){
            data.push(new Chit(i,faker.number.int(1000000,10000000),
                faker.number.int(100000,200000),faker.date.birthdate({ min: 2024, max: 2025, mode: 'year' }).toDateString(),
                faker.number.int(10000,20000)))
       }
       setChits(data);
      // if(dataFetcherResponse.length>0) {
          console.log(dataFetcherResponse);
          let filteredData = dataFetcherResponse.data.filter(item => item.email === (sessionStorage.getItem("email")))
           console.log(filteredData);
           setResponse(filteredData);
     //  }

      /*  axios.get(FetchUsersUrl).then(resp=>{
          /!*
            let filteredData= response.data.filter(item=>(item.genre.includes('Action')));
            console.log(filteredData)
            setResponse(filteredData);

           *!/
            let filteredData=resp.data.data.filter(item=>item.email===(sessionStorage.getItem("email")))
            console.log(filteredData);
            setResponse(filteredData);
        })
    */

    }

    return(
        <div >
            {
                (response.length>0) &&(
                   response.map(item=>{
                       console.log(item)
                       return (

                           <div className="Home-header">
                               <Avatar
                                   alt="Remy Sharp"
                                   src={item.avatar}
                                   sx={{width: 150, height: 150}}
                               />


                               <div className="center">

                                   <div>
                                       <h1>Welcome, {item.first_name} &nbsp;&nbsp;{item.last_name} </h1>
                                       <div className="Dashboard">

                                           <CallIcon fontSize="small" color="success"></CallIcon>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<h4>{faker.number.int(9950000000,9959999999)} </h4>
                                           &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<MailIcon fontSize="small"
                                                                                           color="warning"></MailIcon>
                                           &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<h4 className="AccountCircle">{item.email} </h4>
                                       </div>
                                   </div>

                               </div>
                           </div>


                       )
                   })
                )

            }
            {
                (chits.length > 0) && (
                    <DataGrid   rows={chits}
                                columns={columns}
                                initialState={{
                                    ...chits.initialState,
                                    pagination: { paginationModel: { pageSize: 5 } },
                                }}
                                pageSizeOptions={[5, 10, 25]}/>
                    /*<List>
                        {
                            (chits.map(item => {
                                return (
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <EventNoteIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={item.chitId} secondary={item.chitValue} />

                                    </ListItem>
                                )

                        }))
                        }
                    </List>*/

                )


            }
        </div>
    )




}


export default Home;
