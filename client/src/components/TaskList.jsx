import {useEffect, useState} from 'react'
import { getAllTasks } from '../api/tasks.api';
import TaskCard from './TaskCard';

function TaskList() {
    const [tasks, setTasks] = useState([])

    // useEffect is a React Hook that lets you synchronize a component with an external system.
    useEffect(() =>{
        console.log('Task List loaded');
        async function loadTasks(){
            const res = await getAllTasks();
            setTasks(res.data);
            console.log(res);
        }
        loadTasks();

    }, []);

    return (
        <div>
            {tasks.map(task =>(
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    )
}

export default TaskList