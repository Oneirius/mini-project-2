// import DataBase from "../kanban.json";
import { useState } from "react";
import TaskCard from "./TaskCard.jsx";
import "./List.css"

function List(props) {
    const database = props.database


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
            database.map((task)=>{
                return <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
                
            })
            }
        </ul>
    )
}

export default List;
