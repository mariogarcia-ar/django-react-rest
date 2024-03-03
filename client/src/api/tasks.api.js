import axios from "axios";

const taskApi = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
})

export const getAllTasks = () => {
    return taskApi.get('tasks')
}

export const getTask = (id) => {
    return taskApi.get(`tasks/${id}`)
}

export const createTask = (task) => {
    task.done = false;
    return taskApi.post('tasks/', task)
}

export const updateTask = (id, task) => {
    task.done = false;
    return taskApi.put(`tasks/${id}/`, task)
}

export const deleteTask = (id) => {
    return taskApi.delete(`tasks/${id}`)
}