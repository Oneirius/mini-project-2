import taskArray from "../kanban.json/"
import { useParams, Link } from "react-router-dom";
import {useState, useEffect} from "react";

function ItemDetailsPage() {
    const [task, setTask]=useState(null)
    const taskId = useParams().id; 
    const taskDetails = taskArray.find((task)=> String(task.id === taskId))
    console.log(taskDetails)

    const getTask = ()=>{
        
        //setTask(taskArray[taskId])
        // console.log(taskArray);
        // console.log(taskId)
        const {title, description, assignee, priority, status, createdDate, dueDate} = taskDetails;
    }

    useEffect(()=>{
        getTask();
    }, [])

    return(
        <div>
            <h1>Task Details</h1>
            <p>{taskDetails.title}</p>
            <p>{taskDetails.assignee}</p>
            <p>{taskDetails.description}</p>
            <p>{taskDetails.priority}</p>
            <p>{taskDetails.status}</p>
            <p>{taskDetails.createdDate}</p>
            <p>{taskDetails.dueDate}</p>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    )
}

export default ItemDetailsPage;