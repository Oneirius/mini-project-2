import DataBase from "../kanban.json";

function TaskList() {
    return(
        <div>
            <h1>Task list</h1>
            <ul>
                {
                DataBase.map((DataBase)=>{
                    console.log(DataBase.title)
                    return <li key={DataBase.id}>
                            {DataBase.title}{DataBase.status === "Done" ? "✅" : "❌"}
                            </li>
                    
                })
                }
                </ul>
        </div>
    )
}

export default TaskList;