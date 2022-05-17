import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, fetchTodo, toggleTodo } from "../../redux";
import { todoTask } from "../../utils/data/types";
import { getTodosAPI } from "../../utils/services/todos";
import { SVG } from "../SVG";
import "./toDoTask.scss";

export const ToDoTask = () => {
  const [inputEdit, setInputEdit] = useState<number>(0);
  const dispatch = useDispatch();

  const todos: todoTask[] = useSelector((state: any) => state.todos);
  const activeFilter: string = useSelector((state: any) => state.filter);

  const handleRemoveTask = (taskId: number) => {
    dispatch(deleteTodo(taskId));
    toast("Task removed");
  };

  const handleToggleTask = (taskId: number) => {
    dispatch(toggleTodo(taskId));
  };

  useEffect(() => {
    const getTodos = async () => {
      const result = await getTodosAPI();
      dispatch(fetchTodo(result));
    };

    getTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="todo-list">
      {todos
        ?.filter((todo: todoTask) => {
          if (activeFilter === "all") {
            return todo;
          } else {
            if (todo.status === "todo") return todo;
            else return null;
          }
        })
        .map((todo: todoTask, index: number) => (
          <div className="todo-row" key={index}>
            <input
              type="checkbox"
              className="todo-row__check"
              onChange={() => handleToggleTask(todo.id)}
              checked={todo.status === "done" && true}
            />
            <input
              type="text"
              className={`todo-row__input ${inputEdit === todo.id && "active"}`}
              onBlur={() => setInputEdit(0)}
              value={todo.title}
              readOnly={!inputEdit}
              onDoubleClick={() => setInputEdit(todo.id)}
            />
            <div
              className="todo-row__delete"
              onClick={() => handleRemoveTask(todo.id)}
            >
              <SVG icon="close" />
            </div>
          </div>
        ))}
    </div>
  );
};
