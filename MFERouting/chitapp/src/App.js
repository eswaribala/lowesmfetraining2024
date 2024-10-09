import './App.css';
import {Component, useState} from "react";
import {Logo} from './components/logo/Logo'
import {Timer} from './components/Timer/Timer'
import Banner from './components/Banner/Banner'
import Login from './components/Login/Login'
import Dashboard from "./components/Dashboard/Dashboard";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import RegistrationForm from "./components/Registration/Registration";
/*
class App extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <div>
            <h1>Chit App</h1>
        </div>);
    }
}
*/
export function App({...props}) {

    const [loginStatus, setLoginStatus] = useState(false);
    const [forgotPasswordStatus, setForgotPasswordStatus] = useState(false);
    const [registrationStatus, setRegistrationStatus] = useState(false);

    function handleLoginStatus(value) {
        setLoginStatus(value);
    }

    function handleForgotPassword(value) {
        setForgotPasswordStatus(value);
    }

    function handleNewUser(value) {
        setRegistrationStatus(value);
    }

    let content;
    if((!forgotPasswordStatus) &&(!registrationStatus))
        content=<Login LoginState={handleLoginStatus} NewUserState={handleNewUser} ForgotPasswordState={handleForgotPassword}></Login>
    else if((!registrationStatus) && (!loginStatus))
         content=<ForgotPassword ForgotPasswordState={handleForgotPassword}></ForgotPassword>
    else
        content=<RegistrationForm NewUserState={handleNewUser}></RegistrationForm>



    return (
        <div>
            <header className="App-header">
                <Logo/>
                <h1 className="multicolortext">{props.name} </h1>
                <Timer/>
            </header>
            {
                (!loginStatus)?
                        <section className="Section-header">
                            <Banner/>
                            {content}

                        </section>
                    :

                        <section>
                            <Dashboard/>

                        </section>

            }

        </div>
    );
}
//export default App;
