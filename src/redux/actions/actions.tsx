import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../types/types"

const addTask = (task: string) => {
    return { type: ADD_TASK, payload: task }
}
const editTask = (updatedTask: string) => {
    return { type: EDIT_TASK, payload: updatedTask }
}
const deleteTask = (id: number) => {
    return { type: DELETE_TASK, payload: id }
}

export { addTask, deleteTask, editTask }