import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../types/types";


const initialState = {
    tasks: [
        {
            id: 1,
            desc: "title",
            isCompleted: false,
            created_date: "may 20 2020"
        },
        {
            id: 2,
            desc: "title 2",
            isCompleted: true,
            created_date: "may 20 2020"
        }
    ],
    alert: false
}

type actionProps = {
    payload: any,
    type: string
}
const reducer = (state = initialState, action: actionProps) => {
    const { payload, type } = action;
    switch (type) {
        case ADD_TASK:
            return state;
        case EDIT_TASK:
            return state
        case DELETE_TASK:
            return state
        default:
            return state;
    }
}

export { reducer }