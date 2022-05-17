import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/actions/index";
import { clearTodo } from "../../redux";
import "./Footer.scss";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { todoTask } from "../../utils/data/types";

export const Footer = () => {
  const todos: todoTask[] = useSelector((state: any) => state.todos);
  const activeFilter: string = useSelector((state: any) => state.filter);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const handleClearTodo = () => {
    dispatch(clearTodo());
  };

  const handleFilterSelect = (filterType: string) => {
    history.replace(`?filter=${filterType}`);
    dispatch(setFilter(filterType));
  };

  useEffect(() => {
    if (location.search.includes("filter=todo")) {
      dispatch(setFilter("todo"));
    }
    // eslint-disable-next-line
  }, []);

  return todos.length > 0 ? (
    <div className="footer">
      <div className="footer__text">
        <span>
          {todos.filter((todoTask: any) => todoTask.status === "todo").length}
        </span>
        items left
      </div>
      <div className="footer__tools">
        <div
          className={`footer__filter ${activeFilter === "all" && "active"}`}
          onClick={() => handleFilterSelect("all")}
        >
          all
        </div>
        <div
          className={`footer__filter ${activeFilter === "todo" && "active"}`}
          onClick={() => handleFilterSelect("todo")}
        >
          active
        </div>
      </div>
      <div className="footer__button" onClick={() => handleClearTodo()}>
        Clear completed
      </div>
    </div>
  ) : null;
};
