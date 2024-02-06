function TaskCard(props) {
    const task = props.task;
    
    return(
        <li className="task-card" key={task.id}>
            <p>{task.id}</p>
            <p>{task.title}</p>
            <p>{task.description}</p>
            <p>{task.assignee}</p>
            <p>{task.status}</p>
            <p>{task.priority}</p>
            <p>{task.createdDate}</p>
            <p>{task.dueDate}</p>
            {task.status === "Done" ? "✅" : "❌"}
            <button onClick={()=>{props.deleteTask(task.id)}}>🗑️</button>
        </li>
    )
}

export default TaskCard;
