import { ADD_TODO } from "../actions/types";
import { todos } from "./todos";

describe('todo reducer', () => {
    it('should return task 1 and 2', () => {
        const resultState = todos(
            [
                {
                    id: 1,
                    title: 'task 1',
                    status: 'done'
                }
            ],
            {
                type: ADD_TODO,
                payload: {
                    title: 'task 2'
                }
            });
        expect(resultState).toEqual([
            { id: 1, title: 'task 1', status: 'done' },
            { id: 2, title: 'task 2', status: 'todo' }
        ]);
    });
});