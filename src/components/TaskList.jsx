import List from "./List"
import "./TaskList.css";
// import { useState } from "react";

function TaskList(props) { // Need to have props here to inherit the database from parent
const database = props.database // store the inherited json data in a variables

    return(
        <div id="task-container">
            <h2 id="task-header">Task list</h2>
            <List database={database}/> {/*pass database prop to chiold*/}
        </div>
    )
}

export default TaskList;