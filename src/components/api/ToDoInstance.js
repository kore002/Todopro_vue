import axios from "axios"

const Instance = axios.create({
    baseURL: import.meta.env.VITE_SOME_TODO_BASE_URL
})

export default Instance;