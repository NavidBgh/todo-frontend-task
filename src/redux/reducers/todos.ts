import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CLEAR_TODO, FETCH_TODO, UPDATE_TODO } from "../actions/types";
import { cloneDeep, findIndex, remove } from 'lodash';
import { addTodoAPI, deleteTodoAPI, updateTodoAPI } from "../../utils/services/todos";
import { todoTask } from "../../utils/data/types";

const initialState: todoTask[] = [];

export const todos = (state: any = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO: {
      const { title } = action.payload;
      const currState = cloneDeep(state);
      addTodoAPI({
        title: title,
        status: 'todo'
      });
      currState.push({
        title: title,
        status: 'todo',
        id: state.length === 0 ? 1 : state[state.length - 1].id + 1
      });
      return currState;
    }

    case DELETE_TODO: {
      const { id } = action.payload;
      const currState = cloneDeep(state);
      deleteTodoAPI(id);
      remove(currState, (obj: todoTask) => obj.id === id);
      return currState;
    }

    case CLEAR_TODO: {
      const currState = cloneDeep(state);
      remove(currState, (obj: todoTask) => {
        if (obj.status === 'done') {
          deleteTodoAPI(obj.id);
          return obj;
        }
      });
      return currState;
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const currState = cloneDeep(state);
      let status = '';
      let index = findIndex(currState, (todo: todoTask) => todo.id === id)
      if (currState[index].status === 'todo') {
        status = 'done';
      } else {
        status = 'todo';
      }
      currState[index].status = status;
      updateTodoAPI(currState[index]);
      return currState;
    }

    case UPDATE_TODO: {
      const { id, title } = action.payload;
      const currState = cloneDeep(state);
      let index = findIndex(currState, (todo: todoTask) => todo.id === id)
      currState[index].title = title;
      updateTodoAPI(currState[index]);
      return currState;
    }

    case FETCH_TODO: {
      const { todos } = action.payload;
      return todos;
    }

    default:
      return state;
  }
}
