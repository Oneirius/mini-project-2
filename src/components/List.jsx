// import DataBase from "../kanban.json";
import { useState } from "react";
import TaskCard from "./TaskCard.jsx";
import "./List.css"

function List(props) {
    const database = props.database;
    const setDatabase = props.setDatabase;


    function deleteTask (taskID){
        const newTaskList = database.filter((ele)=>{
            return taskID !== ele.id 
        })
        console.log(newTaskList);
        setDatabase(newTaskList);
    }

    return(
        <ul>
            {
            database.map((task)=>{
                return <TaskCard key={task.id} task={task} deleteTask={deleteTask} setDatabase={setDatabase}/>
                
            })
            }
        </ul>
    )
}

export default List;
