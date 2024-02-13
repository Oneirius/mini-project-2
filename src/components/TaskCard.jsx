import { Link } from "react-router-dom";
import "./TaskCard.css";

function TaskCard(props) {
    const {id, title, description, assignee, status,  priority, createdDate, dueDate} = props.task;
    
    return(
        <li className="task-card" key={id}>
            <p id="card-header">{id} {title}</p>
            <p id="card-description">{description}</p>
            <div id="card-data">
                <p>Assigned: {assignee} - Priority: {priority} </p>  
                <p>Created: {createdDate}  Due Date: {dueDate}</p>
            </div>
            <div id="card-button-row">
                <Link to={`/details/${id}`}>
                    <button>🔎</button>
                </Link>
                <Link to={`/edit/${id}`}>
                    <button>✏️</button>
                </Link>
                <button onClick={()=>{props.deleteTask(id)}}>🗑️</button>
                <span>{status === "Done" ? "✅" : "❌"}</span>
                
            </div>
        </li>
    )
}

export default TaskCard;

