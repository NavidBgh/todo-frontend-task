import { useState } from "react";
import SVG from "../SVG/SVG";
import "./toDoTask.scss";

export const ToDoTask = () => {
  const [state, setState] = useState(false);

  return (
    <div className="todo-list">
      <div className="todo-row">
        <input type="checkbox" className="todo-row__check" checked />
        <input
          type="text"
          className={`todo-row__input ${state && "active"}`}
          onBlur={() => setState(false)}
          placeholder="salam aizmz"
          readOnly={!state}
          onDoubleClick={() => setState(true)}
        />
        <div className="todo-row__delete">
          <SVG icon="close" />
        </div>
      </div>
    </div>
  );
};
