import React, { useState } from 'react'

const Todo = () => {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])
    const addTask = (e) => {
        if (task) {
            const newTask = { id: new Date().getTime().toString(), title: task };
            setTasks([...tasks, newTask])
            localStorage.setItem('locatTasks', JSON.stringify([...tasks, newTask]));
            setTask('')
        }
    }
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
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>
            <div className="col-4">
                <button onClick={addTask} className="btn btn-primary form-control material-icons">➕</button>
            </div>
            <div className="badge">
                You have
                {
                    !tasks.length ? 'No tasks'
                        : tasks.length == 1 ? 'One tasks'
                            : tasks.length > 1 ? ` ${tasks.length} tasks`
                                : null
                }
            </div>
        </div>
    )
}

export default Todo;
