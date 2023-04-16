import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./redux/taskSlice";
import TaskItem from "./components/TaskItem";

function App() {
  //To get the value of new task
  const [newTask, setNewTask] = useState("");
  const todos = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const addNewTask = () => {
    if (newTask.length === 0) {
      alert("Invalid task value");
      return;
    }
    dispatch(addTask({ task: newTask }));
    setNewTask("");
  };

  const removeTask = (id) => {
    dispatch(deleteTask({ id }));
  };

  return (
    <div className="App">
      <div className="form">
        <input
          type="text"
          name="newTask"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addNewTask}>Add new task</button>
      </div>
      <div style={{ width: "40%" }}>
        <div className="uncompleted">
          <h3>List of uncompleted tasks</h3>
          <div>
            {todos.map(
              (task) =>
                !task.done && (
                  <TaskItem removeTask={removeTask} task={task} key={task.id} />
                )
            )}
          </div>
        </div>
        <div className="completed">
          <h3>List of completed tasks</h3>
          <div>
            {todos.map(
              (task) =>
                task.done && (
                  <TaskItem removeTask={removeTask} task={task} key={task.id} />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
