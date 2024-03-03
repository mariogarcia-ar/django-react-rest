// import React from 'react'
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import { createTask , deleteTask} from "../api/tasks.api";

const TaskFormPage = () => {
  const {register, handleSubmit, formState: { errors}} = useForm();
  const navigate = useNavigate()
  const params = useParams()

  const onSubmit = handleSubmit(async data =>{
    console.log(data);
    const res = await createTask(data); // call to the api
    console.log(res)
  })

  const onDelete = async (id)=>{
    const res = confirm("Are you sure?");
    if(res){
      await deleteTask(params.id);
      navigate('/tasks')
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="title" {...register("title", {required: true})}/>
        {errors.title && <span>Ocurrio un error</span>}

        <textarea rows="3" placeholder="description" {...register("description", {required: true})} ></textarea>
        {errors.description && <span>Ocurrio un error</span>}
        
        <button>Save</button>

        {params.id && <button onClick={(e)=>onDelete(params.id)}>Delete</button> }
      </form>

    </div>
  )
}

export default TaskFormPage