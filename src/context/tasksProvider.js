import axios from "axios"
import { useMemo, useState } from "react"
import { useQuery } from "react-query"
import { TasksContext } from "./context"

export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState({})
    const [showSortByOptions, setShowSortByOptions] = useState(false)

    const value = useMemo(() => ({
        tasks,
        setTasks,
        setShowSortByOptions,
        showSortByOptions
    }), [showSortByOptions, tasks])
    

    const getTasks = useQuery(
        [],
        () => axios.get('https://api.quicksell.co/v1/internal/frontend-assignment '),{
            onSuccess: (res) => setTasks(res?.data),
            onError: (error) => console.log(error)
        }
    )

    return(
        <TasksContext.Provider value={value}>
            {children}
        </TasksContext.Provider>
    )

}