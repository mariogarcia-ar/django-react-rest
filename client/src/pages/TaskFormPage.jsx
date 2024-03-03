// import React from 'react'
import {useForm} from "react-hook-form";

const TaskFormPage = () => {
  const {register, handleSubmit, formState: { errors}} = useForm();

  const onSubmit = handleSubmit( data =>{
    console.log(errors);
    console.log(data);
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