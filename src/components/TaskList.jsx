import { React, useContext } from 'react'
import { GlobalContext } from "../context/GlobalContext";

const TaskList = () => {
  const { tasks, deleteTask } = useContext(GlobalContext);//use context utiliza global context creado
  console.log(tasks);
  return (
    <div className='flex justify-center'>
      <button onClick={() => deleteTask()}>
        delete all
      </button>
      <div className='w-6/12'>
        {tasks.map((task) => (
          <div className='bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between' key={task.id}>
            <div>
            <h1>{task.title}</h1>
            <h6>{task.id}</h6>
            </div>
            <div>
              <button>Edit</button>
              <button>delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default TaskList