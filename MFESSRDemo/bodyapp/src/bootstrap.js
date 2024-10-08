import React from 'react';
import ReactDOM from 'react-dom/client';
import {BodyComponent} from "./BodyComponent";

//Mount function to start the app
const root = ReactDOM.createRoot(document.getElementById('body-component'));

const mount=()=> {
    root.render(
        <React.StrictMode>

            <BodyComponent/>

        </React.StrictMode>
    );

}

//if we are in development, call mount immediately
if(process.env.NODE_ENV === 'development'){

    mount();
}

//we are running through container export mount
export {mount};