import List from "./List"
import "./TaskList.css"
// import { useState } from "react";

function TaskList(props) { // Need to have props here to inherit the database from parent
const database = props.database // store the inherited json data in a variable
const setDatabase = props.setDatabase;

    return(
        <div id="task-container">
            <h2 id="task-header">Task list</h2>
            <div id="task-column-headers" >
                <div id="column-to-do" className="task-column">
                    <h2>To Do</h2>
                </div>
                <div id="column-in-progress" className="task-column">
                    <h2>In Progress</h2>
                </div>
                <div id="column-done" className="task-column">
                    <h2>Done</h2
                ></div>
            </div>
            <List database={database} setDatabase={setDatabase}/> {/*pass database prop to chiold*/}
        </div>
    )
}

export default TaskList;