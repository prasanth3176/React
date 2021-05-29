import React, {useContext} from 'react';
import {UserContext} from './componentA'

const ComponentC = () => {
    const contextObject = useContext(UserContext)
    const name = contextObject.sampleData
    const dataEnable = contextObject.dataEnable
    console.log(name, dataEnable);
const data = (
    name.map((element) => {
        return (
          <div key={element.id} className={'grid-container'}>
              <div>
                
                  <b>{element.first_name} {element.last_name}</b><br></br>
                  {element.email}
                  </div>
                  <div>
               
                <img src={element.avatar} />
              </div>
          </div>
        );
    })
)
    

    return ( 
      <div>
        {dataEnable ? <div><h1>Fetched Data using useContext</h1>
        <div>{data}</div></div> : null}
      </div>
    );
}

export default ComponentC