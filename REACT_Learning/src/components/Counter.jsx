import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/slices/counter'

const Counter = () => {
  // Get the current count value from the Redux store
  const count = useSelector((state) => state.counter)
  
  // Get the dispatch function to send actions
  const dispatch = useDispatch()

  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center', 
      border: '2px solid #ccc', 
      borderRadius: '10px',
      margin: '20px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>Redux Counter</h2>
      <div style={{ fontSize: '2rem', margin: '20px 0' }}>
        Count: <span style={{ color: '#007bff', fontWeight: 'bold' }}>{count}</span>
      </div>
      
      <div>
        <button 
          onClick={() => dispatch(increment())}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            margin: '0 10px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Increment (+)
        </button>
        
        <button 
          onClick={() => dispatch(decrement())}
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            margin: '0 10px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Decrement (-)
        </button>
      </div>
      
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p>This counter uses Redux to manage state!</p>
        <p>The count value is stored in the Redux store and shared across components.</p>
      </div>
    </div>
  )
}

export default Counter
