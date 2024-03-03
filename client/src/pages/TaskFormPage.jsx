import {useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import { createTask , deleteTask, getTask, updateTask} from "../api/tasks.api";

const TaskFormPage = () => {
  const {register, handleSubmit, formState: { errors}, setValue} = useForm();
  const navigate = useNavigate()
  const params = useParams()
  const [task, setTask] = useState({})

  useEffect(()=>{
    async function loadData(){
      let res = await getTask(params.id);
      setTask(res.data)
      setValue('title', res.data.title)
      setValue('description', res.data.description)
    }
    if(params.id)
      loadData();

  },[])

  const onSubmit = handleSubmit(async data =>{
    console.log(data);
    if(params.id){
      const res = await updateTask(params.id, data); // call to the api
    }else{
      const res = await createTask(data); // call to the api
    }
    // console.log(res)
    navigate('/tasks')
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
      {task && <h1>{task.title}</h1>}
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