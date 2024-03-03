// import React from 'react'

function TaskCard({task}) {
  return (
    <div>
        id: {task.id}<br />
        title: {task.title}<br />
        <hr />
    </div>
  )
}

export default TaskCard