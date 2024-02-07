
function TaskCard({task}) {
    const {id, title, description, assignee, status,  priority, createdDate, dueDate} = task;
    console.log(task)
 
    
    return(
        <li className="task-card" key={task.id}>
            <p>{id}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{assignee}</p>
            <p>{status}</p>
            <p>{priority}</p>
            <p>{createdDate}</p>
            <p>{dueDate}</p>
            {status === "Done" ? "✅" : "❌"}
            <button onClick={()=>{props.deleteTask(id)}}>🗑️</button>
        </li>
    )
}

export default TaskCard;
