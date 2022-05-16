import { request } from "../api";

export const getTodosAPI = async () => {
    const { data } = await request.get(`/`);
    return data;
};

export const addTodoAPI = async () => {
    const { data } = await request.post(`/`);
    return data;
};

export const deleteTodoAPI = async (taskId: number) => {
    const { data } = await request.delete(`?${taskId}`);
    return data;
};

export const updateTodoAPI = async () => {
    const { data } = await request.put(`/`);
    return data;
};