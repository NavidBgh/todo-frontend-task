import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CLEAR_TODO, FETCH_TODO } from "../actions/types";
import { cloneDeep, findIndex, remove } from 'lodash';
import { addTodoAPI, deleteTodoAPI, updateTodoAPI } from "../../utils/services/todos";
import { todoTask } from "../../utils/data/types";

const initialState: todoTask[] = [];

export const todos = (state: any = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO: {
      const { title } = action.payload;
      const result = cloneDeep(state);
      const res: any = addTodoAPI({
        title: title,
        status: 'todo'
      })
        .then(res => res.id);
      result.push({
        title: title,
        status: 'todo',
        id: res.id
      });
      return result;
    }

    case DELETE_TODO: {
      const { id } = action.payload;
      const result = cloneDeep(state);
      deleteTodoAPI(id);
      remove(result, (obj: todoTask) => obj.id === id);
      return result;
    }

    case CLEAR_TODO: {
      const result = cloneDeep(state);
      remove(result, (obj: todoTask) => obj.status === 'done');
      return result;
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const result = cloneDeep(state);
      let status = '';
      let index = findIndex(result, (todo: todoTask) => todo.id === id)
      if (result[index].status === 'todo') {
        status = 'done';
      } else {
        status = 'todo';
      }
      result[index].status = status;
      updateTodoAPI(result[index]);
      return result;
    }

    case FETCH_TODO: {
      const { todos } = action.payload;
      return todos;
    }

    default:
      return state;
  }
}
