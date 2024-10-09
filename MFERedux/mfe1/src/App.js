import './App.css';
import {useSelector} from "react-redux";

function App() {
  const data=useSelector((state)=>state.countries.data);
  const status=useSelector((state)=>state.countries.status);

  return (
    <div className="App">

          {status=='loading' &&
              <p>Loading the Data ....</p>
          }

          {
            status == 'error' &&
                  <p>Data Error ....</p>
          }

          {
            status == 'completed' &&

                data.map(item=>{
                  return(
                      <p>{item.name}</p>
                  )
                })

          }

    </div>
  );
}

export default App;
