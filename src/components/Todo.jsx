import React, { useState } from 'react'

const Todo = () => {
    const [task, setTask] = useState('')
    return (
        <div className='container row'>
            <h1 className='mt-3 text-white'>To-Do App</h1>
            <div className="col-8">
                <input
                    type='text'
                    name='task'
                    value={task}
                    placeholder='write your task....'
                    className='form-control'
                    onChange={(e)=>setTask(e.target.value)}
                />
            </div>
            <div className="col-4">
                <button className="btn btn-primary form-control material-icons">➕</button>
            </div>
        </div>
    )
}

export default Todo;
