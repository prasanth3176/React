import React, {useContext, useState} from 'react';
import {CountContext} from './data'

const ComponentC = () => {
    const contextObject = useContext(CountContext)
    console.log(contextObject);
    const name = contextObject.sampleData.posts
    // const dataEnable = contextObject.dataEnable
let data = null;

if(name && name.length) {

    data  = (
    
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
        
}

const [dataEnabled, setDataEnabled] = useState(false)
    

    return (
      <div>
        <div>
           <button onClick={()=> setDataEnabled(!dataEnabled)}>{dataEnabled ? `HIDE`: `SHOW`}</button> 
          {dataEnabled ? <div>{data}</div> : null}
        </div>
      </div>
    );
}

export default ComponentC