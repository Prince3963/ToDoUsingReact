import React from 'react'

const App = () => {

    function handleClick(e) {
      console.log(e.target);
      
    }

    function handleChange(e) {
      console.log(e.target.value);
    }
  return (
    <div className='bg-red-200  min-h-screen justify-center flex items-center'>
      <div className='bg-gray-400 p-10 cursor-pointer rounded-lg text-3xl font-bold text-gray-800'>
        <input onChange={handleChange} type="text" name="text" id="text" placeholder='Enter your text'/>
        <button onClick={handleClick} className='cursor-pointer'>Click me</button>
      </div>
    </div>
  )
}

export default App