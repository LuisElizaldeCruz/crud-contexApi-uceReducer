import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";


const initialState = {
    tasks: [
        {
            id: "1",
            description: "done description",
            done: false,
            title: "title one"
        },
        {
            id: "2",
            description: "done description",
            done: false,
            title: "title two"
        }
    ]
}

export const GlobalContext = createContext(initialState);



export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, initialState);

    const addTask = (task) => {
        dispatch({ type: "ADD_TASK", payload:task})
    }

    const deleteTask = () =>{
        dispatch({type: "DELETE_TASK"});
    }

    return (
        <GlobalContext.Provider value={{ ...state, addTask, deleteTask }}>
            {children}
        </GlobalContext.Provider>
    )
}