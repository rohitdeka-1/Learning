import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  filter: 'all' // 'all', 'completed', 'active'
}

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(), // Simple ID generation
        text: action.payload,
        completed: false,
        createdAt: new Date().toISOString()
      }
      state.todos.push(newTodo)
    },
    
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    
    editTodo: (state, action) => {
      const { id, text } = action.payload
      const todo = state.todos.find(todo => todo.id === id)
      if (todo) {
        todo.text = text
      }
    },
    
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    
    clearCompleted: (state) => {
      state.todos = state.todos.filter(todo => !todo.completed)
    }
  }
})

export const { 
  addTodo, 
  toggleTodo, 
  deleteTodo, 
  editTodo, 
  setFilter, 
  clearCompleted 
} = todoSlice.actions

export default todoSlice.reducer
