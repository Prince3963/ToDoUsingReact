import React from 'react'
import { useState } from 'react'

function Todo() {

    const [addTask, setAddTask] = useState("")
    const [task, setTask] = useState([])

    function handleAddtask(e) {
        if (addTask.trim() === "") return
        setTask([...task, addTask])
        //Input field clear karse
        setAddTask("")
    }

    function handleDelete(e) {
        const newTask = [...task]
        newTask.splice(e, 1)
        setTask(newTask)
    }

    function handelEdit(e) {
        const newTask = [...task]
        const updatedTask = prompt("Edit your task", newTask[e])
        newTask[e] = updatedTask
        setTask(newTask)
    }


    return (
        <>
            <div className='justify-start items-center w-full bg-gray-600 flex flex-col m-10 rounded'>
                {/* Top div */}
                <div className='flex justify-center items-center p-6 mt-6 flex-col border-red-50 rounded-lg border-2 gap-5 '>
                    <h1 className='text-4xl text-amber-400 font-bold '>To Do List</h1>
                </div>

                {/* Text */}
                <div className='relative w-full p-2 mt-4'>
                    <input
                        type="text"
                        value={addTask}
                        onChange={(e) => setAddTask(e.target.value)}
                        className="h-10 w-full border-2 border-red-50 text-2xl rounded-lg text-amber-400 font-bold p-7 pl-2 focus:outline-none"
                        placeholder="Enter a task..."
                    />
                    <button
                        onClick={handleAddtask}
                        className="lg:absolute right-4 bg-gray-700 active:scale-95 cursor-pointer font-bold w-32 text-amber-400 p-2 rounded-lg mt-2">Add Task</button>
                </div>

                {/* Tasks */}
                <div
                    className='w-full items-center pl-2 pr-2 rounded-md '>
                    <h3 className='text-2xl'>Your Tasks : </h3><br />

                    {task.map((task, e) => (
                        <div  className='justify-between flex w-full text-2xl bg-gray-500 border-2 border-red-50 font-bold text-amber-200 p-4 rounded-lg mb-2'>
                            <div key={e}>
                                {task}
                            </div>
                            <div className='gap-6 flex'>
                                <button
                                    onClick={() => handelEdit(e)}
                                    className='active:scale-95  cursor-pointer bg-gray-700 font-bold text-amber-400 p-2 rounded-lg w-32'>Edit</button>
                                <button
                                    onClick={() => handleDelete(e)}
                                    className='active:scale-95 cursor-pointer bg-gray-700 font-bold text-amber-400 p-2 rounded-lg w-32' >Delete</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div >
        </>
    )
}

export default Todo