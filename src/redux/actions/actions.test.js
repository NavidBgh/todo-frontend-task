import { addTodo } from "./actions";
import { ADD_TODO } from "./types";

describe('ADD_TODO action', () => {

    it('should return type and "new task" title', () => {
        const resultState = addTodo('new task');

        expect(resultState).toMatchObject({ type: ADD_TODO, payload: { title: 'new task' } });
    });
});