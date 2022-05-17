import { todoTask } from "../../data/types";
import { request } from "../api";

export const getTodosAPI = async () => {
    const { data } = await request.get(`/tasks`);
    return data;
};

export const addTodoAPI = async (newTask: any) => {
    const { data } = await request.post(`/tasks`, newTask);
    return data;
};

export const deleteTodoAPI = async (taskId: number) => {
    const { data } = await request.delete(`/tasks/${taskId}`);
    return data;
};

export const updateTodoAPI = async (updatedTask: todoTask) => {
    const { data } = await request.put(`/tasks/${updatedTask.id}`, updatedTask);
    return data;
};