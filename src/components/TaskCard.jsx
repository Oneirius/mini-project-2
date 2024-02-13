import { Link } from "react-router-dom";
import "./TaskCard.css";

function TaskCard(props) {
    const {id, title, description, assignee, status,  priority, createdDate, dueDate} = props.task;
    
    return(
        <li className="task-card" key={id}>
            <p id="card-header">{id} {title}</p>
            <p id="card-description">{description}</p>
            <div id="card-data">
                <p>{assignee}   {priority}   {status === "Done" ? "✅" : "❌"}</p>
                <p>{createdDate} // {dueDate}</p>
                <Link to={`/details/${id}`}>
                    <button>🔎</button>
                </Link>
                <Link to={`/edit/${id}`}>
                    <button>✏️</button>
                </Link>
                <button onClick={()=>{props.deleteTask(id)}}>🗑️</button>
            </div>
        </li>
    )
}

export default TaskCard;

