import ToDoList from "../../pages/ToDoList"
import { route } from "../data/types"

export const routes : route[] = [
    {
        path: '/',
        component: ToDoList,
        private: false,
        exact: true
    }
]