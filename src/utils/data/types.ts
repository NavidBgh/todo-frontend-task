export interface route {
    path: string,
    component: any,
    private: boolean,
    exact: boolean
}

export interface todoTask {
    title: string,
    status: string,
    id: number
}