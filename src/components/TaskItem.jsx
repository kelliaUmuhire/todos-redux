import React from "react";
import { useDispatch } from "react-redux";
import { markAsDone } from "../redux/taskSlice";

export default function TaskItem({ task, removeTask }) {
  const dispatch = useDispatch();
  const markTaskAsDone = () => {
    dispatch(markAsDone({ id: task.id }));
  };
  return (
    <div className="task">
      <input type="checkbox" checked={task.done} onChange={markTaskAsDone} />
      <div>{task.name}</div>
      <div onClick={() => removeTask(task.id)} className="remove">
        delete
      </div>
    </div>
  );
}
