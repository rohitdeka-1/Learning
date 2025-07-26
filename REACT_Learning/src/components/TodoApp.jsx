import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
  addTodo, 
  toggleTodo, 
  deleteTodo, 
  editTodo, 
  setFilter, 
  clearCompleted 
} from '../redux/slices/todos'

const TodoApp = () => {
  const [inputText, setInputText] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')
  
  const { todos, filter } = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed
    if (filter === 'active') return !todo.completed
    return true // 'all'
  })

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (inputText.trim()) {
      dispatch(addTodo(inputText.trim()))
      setInputText('')
    }
  }

  const handleEditStart = (todo) => {
    setEditingId(todo.id)
    setEditText(todo.text)
  }

  const handleEditSave = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, text: editText.trim() }))
    }
    setEditingId(null)
    setEditText('')
  }

  const handleEditCancel = () => {
    setEditingId(null)
    setEditText('')
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const activeCount = todos.length - completedCount

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '20px auto', 
      padding: '20px',
      border: '2px solid #ddd',
      borderRadius: '10px',
      backgroundColor: '#f8f9fa'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Redux Todo App</h2>
      
      {/* Add Todo Form */}
      <form onSubmit={handleAddTodo} style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="What needs to be done?"
            style={{
              flex: 1,
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px'
            }}
          />
          <button 
            type="submit"
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Add Todo
          </button>
        </div>
      </form>

      {/* Filter Buttons */}
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        {['all', 'active', 'completed'].map(filterType => (
          <button
            key={filterType}
            onClick={() => dispatch(setFilter(filterType))}
            style={{
              backgroundColor: filter === filterType ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              margin: '0 5px',
              borderRadius: '5px',
              cursor: 'pointer',
              textTransform: 'capitalize'
            }}
          >
            {filterType}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div style={{ marginBottom: '20px', textAlign: 'center', fontSize: '14px', color: '#666' }}>
        Total: {todos.length} | Active: {activeCount} | Completed: {completedCount}
      </div>

      {/* Todo List */}
      <div>
        {filteredTodos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
            {filter === 'all' ? 'No todos yet!' : `No ${filter} todos!`}
          </p>
        ) : (
          filteredTodos.map(todo => (
            <div 
              key={todo.id} 
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                margin: '5px 0',
                backgroundColor: 'white',
                border: '1px solid #ddd',
                borderRadius: '5px',
                textDecoration: todo.completed ? 'line-through' : 'none',
                opacity: todo.completed ? 0.7 : 1
              }}
            >
              {/* Toggle Checkbox */}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                style={{ marginRight: '10px' }}
              />
              
              {/* Todo Text or Edit Input */}
              {editingId === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleEditSave(todo.id)
                    if (e.key === 'Escape') handleEditCancel()
                  }}
                  style={{
                    flex: 1,
                    padding: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '3px',
                    marginRight: '10px'
                  }}
                  autoFocus
                />
              ) : (
                <span 
                  style={{ flex: 1, marginRight: '10px', cursor: 'pointer' }}
                  onDoubleClick={() => handleEditStart(todo)}
                >
                  {todo.text}
                </span>
              )}
              
              {/* Action Buttons */}
              <div>
                {editingId === todo.id ? (
                  <>
                    <button
                      onClick={() => handleEditSave(todo.id)}
                      style={{
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        padding: '5px 10px',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        marginRight: '5px',
                        fontSize: '12px'
                      }}
                    >
                      Save
                    </button>
                    <button
                      onClick={handleEditCancel}
                      style={{
                        backgroundColor: '#6c757d',
                        color: 'white',
                        border: 'none',
                        padding: '5px 10px',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEditStart(todo)}
                      style={{
                        backgroundColor: '#ffc107',
                        color: 'black',
                        border: 'none',
                        padding: '5px 10px',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        marginRight: '5px',
                        fontSize: '12px'
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch(deleteTodo(todo.id))}
                      style={{
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        padding: '5px 10px',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Clear Completed Button */}
      {completedCount > 0 && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            onClick={() => dispatch(clearCompleted())}
            style={{
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Clear Completed ({completedCount})
          </button>
        </div>
      )}
      
      <div style={{ marginTop: '20px', fontSize: '12px', color: '#666', textAlign: 'center' }}>
        <p>💡 Double-click on a todo to edit it</p>
        <p>This todo app demonstrates advanced Redux patterns!</p>
      </div>
    </div>
  )
}

export default TodoApp
