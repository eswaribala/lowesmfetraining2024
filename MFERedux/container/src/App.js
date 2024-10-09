import logo from './logo.svg';
import './App.css';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getCountries} from "./dataslicer";

function App() {
  const dispatcher=useDispatch()
  useEffect(() => {
    dispatcher(getCountries());
  }, [dispatcher]);
  return (
    <div className="App">

    </div>
  );
}

export default App;
