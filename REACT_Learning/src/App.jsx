import './App.css'
import Counter from './components/Counter'
import TodoApp from './components/TodoApp'

function App() {
  const name = "Rohit"
  const newName = <h2>Redux Learning with React</h2>

  return (
    <>
      <div>
        <h1>Hello my name is {name}</h1>
        {newName}
        
        {/* Redux Counter Component */}
        <Counter />
        
        {/* Redux Todo App Component */}
        <TodoApp />
      </div>
    </>
  )
}

export default App
