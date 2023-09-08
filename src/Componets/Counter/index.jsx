import {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const addOne = () => {
        setCount (count +1)
    }
    const minusOne = () => {
        setCount (count -1)
    }
  return (
    <div>
        <h3>Current Count: {count}</h3>
        {count>20 ? <p>Wow that is a high number!</p> : <></>}
        <button onClick={addOne}>Add +</button>
        <button onClick={ minusOne} >Subtract -</button>

    </div>
  )
}

export default Counter
