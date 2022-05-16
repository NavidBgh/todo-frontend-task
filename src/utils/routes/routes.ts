import ToDoList from "../../pages/ToDoList"

interface route{
    path: string,
    component: any,
    private: boolean,
    exact: boolean
}

export const routes : route[] = [
    {
        path: '/',
        component: ToDoList,
        private: false,
        exact: true
    }
]