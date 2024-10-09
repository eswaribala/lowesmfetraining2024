import './App.css';
import React from 'react'
import {useSelector} from "react-redux";

function App() {
  const data=useSelector((state)=>state.countries.data);
  const status=useSelector((state)=>state.countries.status);

  return (
      <div>
          <h2>MFE 1: Data List</h2>
          {status == 'loading' &&
              <p>Loading the Data ....</p>
          }

          {
              status == 'error' &&
              <p>Data Error ....</p>
          }

          {
              (status === 'completed') && (
                  <ul>
                      {
                          (data.map(item => {
                              return (
                                  <div>
                                      <li>{item.name} </li>

                                  </div>
                              )

                          }))
                      }
                  </ul>
              )

          }

      </div>
  );
}

export default App;
