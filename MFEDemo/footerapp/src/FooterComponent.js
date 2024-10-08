import React, {useEffect, useState} from 'react'
import {Branch} from "./Branch";
import {faker} from '@faker-js/faker'
function FooterComponent(){
    const [branches,setBranches]=useState([]);
    useEffect(() => {
         generateBranches();
    }, []);

    function generateBranches(){
        let data=new Array();
        for(let i=0;i<5;i++){

            data.push(new Branch(faker.number.int({min:1, max:3}),
                 faker.company.name(), faker.location.city())
                );

        }
        setBranches(data);
    }

    return(
        <div>
            {
            (branches.length > 0) && (
               <ul>
                   {
                       (branches.map(item => {
                           return (
                               <div>
                                   <li>{item.branchId}</li>
                                   <li>{item.branchName}</li>
                                   <li>{item.city}</li>
                               </div>
                           )

                       }))
                   }
               </ul>
            )
            }
        </div>
        )
}