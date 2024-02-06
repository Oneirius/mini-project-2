import dataBase from "../kanban.json";

function TaskList() {
    return(
        <div>
            <ul>
                {
                dataBase.map((database)=>{
                    return <li key={dabase.id}>{dataBase.title}</li>
                })
                }
                </ul>
        </div>
    )
}

export default TaskList;