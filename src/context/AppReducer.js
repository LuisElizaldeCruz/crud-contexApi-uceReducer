import React from 'react'

export default function appReducer(state, action) {
    switch (action.type) {
        case "ADD_TASK":
            return {
                tasks: [...state.tasks, action.payload]
            }
        case "DELETE_TASK":
            return{
                tasks: []
            }
        default:
            break;
    }
}
