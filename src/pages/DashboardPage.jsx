import DataBase from "../kanban.json"; // Moved the json here so it can be passed as props to the components that need it
import TaskList from "../components/TaskList.jsx"
import TaskForm from "../components/TaskForm.jsx"
import { useState } from "react";
import "./DashboardPage.css";

function DashboardPage() {
const [database, setDatabase]=useState(DataBase);
    return(
        <>
            <div id="dashboard">
                <h2 id="dash-header">Dashboard Page</h2>
                <TaskForm database={database} setDatabase={setDatabase}/>
                <TaskList database={database}/>
            </div>
        </> 
    )
}
export default DashboardPage;