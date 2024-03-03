import axios from "axios";

export const getAllTasks = () => {
    const url = "http://127.0.0.1:8000/api/tasks/";
    return axios.get(url)
}