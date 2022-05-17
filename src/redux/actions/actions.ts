import { todoTask } from "../../utils/data/types";
import { ADD_TODO, TOGGLE_TODO, SET_FILTER, DELETE_TODO, CLEAR_TODO, FETCH_TODO, UPDATE_TODO } from "./types";

export const addTodo = (title: string) => ({
    type: ADD_TODO,
    payload: {
        title
    }
});

export const deleteTodo = (id: number) => ({
    type: DELETE_TODO,
    payload: {
        id
    }
});

export const clearTodo = () => ({
    type: CLEAR_TODO,
});

export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const updateTodo = (id: number, title: string) => ({
    type: UPDATE_TODO,
    payload: { id, title }
});

export const fetchTodo = (todos: todoTask[]) => ({
    type: FETCH_TODO,
    payload: { todos }
});

export const setFilter = (filter: string) => ({ type: SET_FILTER, payload: { filter } });
