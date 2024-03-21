import React, {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(prevCount => prevCount + 1)
  }

  function decrement(){
    setCount(prevCount => prevCount - 1)
  }

  function reset(){
    setCount(0)
  }

  return (
    <div className='container my-5'>
     <div className='card text-center my-5'>
      <div className='card-body'>
        <h1>Counter App</h1>
        <div className='my-5'>
          <h2>{count}</h2>
          <button className='btn btn-success px-3 mx-2' onClick={increment}>Increment</button>
          <button className='btn btn-danger px-3 mx-2' onClick={decrement}>Decrement</button>
          <button className='btn btn-secondary px-4 mx-2' onClick={reset}>Reset</button>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
