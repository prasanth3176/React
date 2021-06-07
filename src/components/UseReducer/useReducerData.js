import React, {useReducer} from 'react';

const initialState = 0
const objectState = {
    fc: 10,
    sc: 20
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return state + action.value
        case 'decrement':
            return state - action.value
        case 'reset':
            return initialState
        case 'objFCReset':
            return objectState.fc
        case 'objSCReset':
                return objectState.sc
        default:
            return state
    }

}

const Counter = () => {

    const [count, dispatcher] = useReducer(reducer, initialState)
    const [count2, dispatcher2] = useReducer(reducer, objectState.fc)
    const [count3, dispatcher3] = useReducer(reducer, objectState.sc)

    return (
      <div>
        <div>
        <div><p>Counter -> {count} </p></div>
        <button onClick={() => dispatcher({type: 'increment', value: 5})}>Increment</button> 
        <button onClick={() => dispatcher({type: 'decrement', value: 5})}>Decrement</button>
        <button onClick={() => dispatcher({type: 'reset'})}>Reset</button>
      </div>
        <div>
        <div><p>Counter -> {count2} </p></div>
        <button onClick={() => dispatcher2({type: 'increment', value: 15})}>Increment</button>
        <button onClick={() => dispatcher2({type: 'decrement', value: 10})}>Decrement</button>
        <button onClick={() => dispatcher2({type: 'objFCReset'})}>Reset</button>
      </div>
      <div>
        <div><p>Counter -> {count3} </p></div>
        <button onClick={() => dispatcher3({type: 'increment', value: 25})}>Increment</button>
        <button onClick={() => dispatcher3({type: 'decrement', value: 15})}>Decrement</button>
        <button onClick={() => dispatcher3({type: 'objSCReset'})}>Reset</button>
      </div>
      </div>
    );
}

export default Counter