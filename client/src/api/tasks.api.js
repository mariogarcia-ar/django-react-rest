import axios from "axios";

const taskApi = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
})

export const getAllTasks = () => {
    return taskApi.get('tasks')
}

export const createTask = (task) => {
    task.done = false;
    return taskApi.post('tasks/', task)
}