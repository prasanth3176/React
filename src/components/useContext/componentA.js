import React, {useEffect, useState} from "react";
import ComponentB from "./componentB";
const axios = require('axios')

export const UserContext = React.createContext();

const ComponentA = () => {
    const [sampleData, setSampleData] = useState([])
    const [dataEnable, setDataEnable] = useState(false)
    // const [timer, setTimer] = useState(null)

    useEffect(()=>{
        const url = `https://reqres.in/api/users`
       axios.get(url)
        .then(res => {
            setSampleData(res.data.data)
        })
        .catch(err => {
            console.log(err);
        });        
    },[])
  
//   useEffect(() => {
//     const timerVal = setInterval(() => {
//       setTimer(timer + 1);
//     }, 1000);
//     return () => clearInterval(timerVal);
//   });
    
  return (
    <div className='App-header'>
        <UserContext.Provider value={{sampleData: sampleData, dataEnable: dataEnable}}>
            {/* {timer} */}
            <button onClick={() => setDataEnable(!dataEnable)}>{!dataEnable ? `SHOW DATA`: `HIDE DATA` }</button>
            <ComponentB />
        </UserContext.Provider>
    </div>
  );
};

export default ComponentA;
