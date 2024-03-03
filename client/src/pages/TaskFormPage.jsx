// import React from 'react'
import {useForm} from "react-hook-form";
import { createTask } from "../api/tasks.api";

const TaskFormPage = () => {
  const {register, handleSubmit, formState: { errors}} = useForm();

  const onSubmit = handleSubmit(async data =>{
    console.log(data);
    const res = await createTask(data); // call to the api
    console.log(res)
    // return false;
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="title" {...register("title", {required: true})}/>
        {errors.title && <span>Ocurrio un error</span>}

        <textarea rows="3" placeholder="description" {...register("description", {required: true})} ></textarea>
        {errors.description && <span>Ocurrio un error</span>}
        
        <button>Save</button>
      </form>

    </div>
  )
}

export default TaskFormPage