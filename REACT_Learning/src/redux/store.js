import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter'
import todoReducer from './slices/todos'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer,
    },
})

// Export types for TypeScript (if you decide to use TypeScript later)
// export const getState = store.getState
// export const dispatch = store.dispatch

