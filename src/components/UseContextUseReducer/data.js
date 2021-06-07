import React, { useReducer, useEffect } from 'react';
import ComponentA from './ComponentA';
const axios = require('axios')

export const CountContext = React.createContext();
const initialState = {
    isLoading: true,
    error: '',
    post: {},
}  

const reducer = (state, action) => {
    switch(action.type) {
        case 'fetchData':
            return {
                isLoading: false,
                error: '',
                posts: action.payload
            }
        case 'error':
            return {
                isLoading: false,
                posts: {},
                error: action.payload
            }

        default:
                return state
    }

}

const Data = () => {
    const [sampleData,dispatch] = useReducer(reducer,initialState)
    useEffect(()=>{
        const url = `https://reqres.in/api/users`
       axios.get(url)
        .then(res => {
            dispatch({type: 'fetchData', payload: res.data.data})
        })
        .catch(err => {
            dispatch({type: 'error', payload: err})
        });        
    },[])   
     return (
        <CountContext.Provider value={{sampleData: sampleData}}>
            <ComponentA />
        </CountContext.Provider>
    )

    
}

export default Data
