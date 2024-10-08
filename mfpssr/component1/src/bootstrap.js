import React from 'react';
import ReactDOM from 'react-dom/client';

import Component1 from "./Component1";
//Mount function to start the app
const root = ReactDOM.createRoot(document.getElementById('component1-id'));

const mount=()=> {
    root.render(
        <React.StrictMode>

                <Component1/>,

        </React.StrictMode>
    );

}

//if we are in development, call mount immediately
if(process.env.NODE_ENV === 'development'){

    mount();
}

//we are running through container export mount
export {mount};