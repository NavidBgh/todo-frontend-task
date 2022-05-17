import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, fetchTodo, toggleTodo } from "../../redux";
import { todoTask } from "../../utils/data/types";
import { getTodosAPI } from "../../utils/services/todos";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
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

  const toDoTaskRow = ({ index, style, data }: any) => {
    return (
      <div className="todo-row" key={index} style={style}>
        <input
          type="checkbox"
          className="todo-row__check"
          onChange={() => handleToggleTask(data[index]?.id)}
          checked={data[index]?.status === "done" && true}
        />
        <input
          type="text"
          className={`todo-row__input ${
            inputEdit === data[index]?.id && "active"
          }`}
          onBlur={() => setInputEdit(0)}
          value={data[index]?.title}
          readOnly={!inputEdit}
          onDoubleClick={() => setInputEdit(data[index]?.id)}
        />
        <div
          className="todo-row__delete"
          onClick={() => handleRemoveTask(data[index]?.id)}
        >
          <SVG icon="close" />
        </div>
      </div>
    );
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
      <AutoSizer>
        {({ height, width }) => {
          let todoData = todos.filter((todo: todoTask) => {
            if (activeFilter === "all") {
              return todo;
            } else {
              if (todo.status === "todo") return todo;
              else return null;
            }
          });

          return (
            <List
              height={height}
              itemCount={todoData.length}
              itemSize={45}
              width={width}
              itemData={todoData}
            >
              {toDoTaskRow}
            </List>
          );
        }}
      </AutoSizer>
    </div>
  );
};
