// import React from 'react'
import {useNavigate} from "react-router-dom";

function TaskCard({task}) {
  const navigate = useNavigate()

  const onClick = ()=>{
    navigate("/tasks/" + task.id)
  }

  return (
    <div onClick={onClick}>
        id: {task.id}<br />
        title: {task.title}<br />
        <hr />
    </div>
  )
}

export default TaskCard