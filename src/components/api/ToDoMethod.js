import Instance from "./ToDoInstance";
const POST_URL = import.meta.env.VITE_SOME_TODO_POST_URL;
const GET_URL = import.meta.env.VITE_SOME_TODO_GET_URL;
const DEL_URL = import.meta.env.VITE_SOME_TODO_DEL_URL;
const CHECK_URL = import.meta.env.VITE_SOME_TODO_CHECK_URL;
const PUT_URL = import.meta.env.VITE_SOME_TODO_PUT_URL;

const TODO_POST = async(title, enddate) => {
    try {
        const response = await Instance.post(POST_URL,{
            todotitle: title,
            todoenddate: enddate
        });
        console.log(response.data);
    } catch (error) {
        
        console.log(error);
    }
}
const TODO_GET = async() => {
    try {
        const response = await Instance.get(GET_URL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        
        console.log(error);
    }
}
const TODO_DEL = async(id) => {
    try {
        const response = await Instance.post(DEL_URL,{
            todoid: id
        });
        console.log(response.data);
    } catch (error) {
        
        console.log(error);
    }
}
const TODO_CHECK = async(TODOid, TODOcheck) => {
    try {
        const response = await Instance.post(CHECK_URL,{
            todocheck: TODOcheck,
            todoid: TODOid
        });
        console.log(response.data);
    } catch (error) {
        
        console.log(error);
    }
}
const TODO_PUT = async(id, title) => {
    try {
        const response = await Instance.post(PUT_URL,{
            todoid: id,
            todotitle: title
        });
        console.log(response.data);
    } catch (error) {
        
        console.log(error);
    }
}
const ToDoMethod = {
    TODO_POST,
    TODO_GET,
    TODO_DEL,
    TODO_CHECK,
    TODO_PUT
}

export default ToDoMethod;