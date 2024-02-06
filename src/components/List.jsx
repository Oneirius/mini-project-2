import DataBase from "../kanban.json";
import { useState } from "react";
import TaskCard from "./TaskCard.jsx";

function List() {

    const [taskArray, setTasks] = useState(DataBase);

    function deleteTask (taskID){
        const newTaskList = taskArray.filter((ele)=>{
            return taskID !== ele.id 
        })
        console.log(newTaskList);
        setTasks(newTaskList);
    }

    return(
        <ul>
            {
            taskArray.map((task)=>{
                return <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
                
            })
            }
        </ul>
    )
}

export default List;
