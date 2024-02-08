import DataBase from "../kanban.json"; // Moved the json here so it can be passed as props to the components that need it
import TaskList from "../components/TaskList.jsx"
import TaskForm from "../components/TaskForm.jsx"
import { useState } from "react";

function DashboardPage() {
const [database, setDatabase]=useState(DataBase);
    return(
        <>
            <div>
                <h2>Dashboard Page</h2>
                <TaskForm database={database} setDatabase={setDatabase}/>
                <TaskList database={database}/>
            </div>
        </> 
    )
}
export default DashboardPage;