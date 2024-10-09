import React, {useContext} from 'react';
import {faker} from '@faker-js/faker'

//import {MyContext} from "../Dashboard/Dashboard";

const FAQ = ({dataFetcherResponse}) => {
    //const { email, setEmail } = useContext(MyContext);
    return (
        <div>
           {/* <h1>{email}</h1>
            <button onClick={() => setEmail(faker.internet.email())}>
                Click me
            </button>
*/}

            <ul>
                {dataFetcherResponse.map((item) => (
                    <li key={item.id}>{item.address.city}->{item.address.zipcode}</li> // Assuming item objects have id and title properties
                ))}
            </ul>


        </div>
    );
}


export default FAQ;
