import List from "./List"
// import { useState } from "react";

function TaskList(props) { // Need to have props here to inherit the database from parent
const database = props.database // store the inherited json data in a variables

    return(
        <div>
            <h2>Task list</h2>
            <List database={database}/> {/*pass database prop to chiold*/}
        </div>
    )
}

export default TaskList;