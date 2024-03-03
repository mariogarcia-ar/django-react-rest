import {useEffect} from 'react'
import { getAllTasks } from '../api/tasks.api';

function TaskList() {
    // useEffect is a React Hook that lets you synchronize a component with an external system.
    useEffect(() =>{
        console.log('Task List loaded');
        async function loadTasks(){
            const res = await getAllTasks();
            console.log(res);
        }
        loadTasks();

    }, []);

    return (
        <div>TaskList</div>
    )
}

export default TaskList