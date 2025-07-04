import React from 'react'

const App = () => {
  const name = "John"
  const age = 20

  return (
    <>
    <div className='text-5xl'>App</div>
    <h1>Hi my name is { name }</h1>
    <h1>Im { age } years old</h1>
</>
  )
}

export default App