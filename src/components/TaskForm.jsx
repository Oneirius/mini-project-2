import { useState } from "react";

function TaskForm(props) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const database = props.database;
  const setDatabase = props.setDatabase;

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id,
      title,
      description,
      assignee,
      status,
      priority,
      createdDate,
      dueDate,
    };

    setDatabase([newTask, ...database]);
    console.log(database);

    setId("");
    setTitle("");
    setDescription("");
    setAssignee("");
    setStatus("");
    setPriority("");
    setCreatedDate("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create new Task</h3>
      <div>
        <label>
          Task ID
          <input
            value={id}
            name="taskID"
            type="text"
            placeholder="Task ID"
            onChange={(event) => {
              setId(event.target.value);
            }}
          ></input>
        </label>
        <label>
          Task Title
          <input
            value={title}
            name="taskTitle"
            type="text"
            placeholder="Task Title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></input>
        </label>
        <label>
          Task Description
          <input
            value={description}
            name="taskDescription"
            type="text"
            placeholder="Task Description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></input>
        </label>
        <label>
          Assigned to
          <input
            value={assignee}
            name="taskAssignee"
            type="text"
            placeholder="Assignee"
            onChange={(event) => {
              setAssignee(event.target.value);
            }}
          ></input>
        </label>
        <label>
          Status
          <select
            value={status}
            name="taskStatus"
            type="text"
            placeholder="Status"
            onChange={(event) => {
              setStatus(event.target.value);
            }}
          >
            <option value="">-- None --</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <label>
          Priority
          <select
            value={priority}
            name="taskPriority"
            type="date"
            placeholder="Priority"
            onChange={(event) => {
              setPriority(event.target.value);
            }}
          >
            <option value="">-- None --</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <label>
          Created
          <input
            value={createdDate}
            name="taskCreationDate"
            type="date"
            placeholder="Created On"
            onChange={(event) => {
              setCreatedDate(event.target.value);
            }}
          ></input>
        </label>
        <label>
          Due Date
          <input
            value={dueDate}
            name="taskDueDate"
            type="date"
            placeholder="Due by"
            onChange={(event) => {
              setDueDate(event.target.value);
            }}
          ></input>
        </label>
        <button type="submit">Create New Task</button>
      </div>
    </form>
  );
}

export default TaskForm;
