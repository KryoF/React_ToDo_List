import {useState} from 'react'
import styles from './App.module.css'

const App = () => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleNewTasks = () => {
    if(newTask.trim() !== ''){
      setTasks((prevTask) => [...prevTask, newTask.trim()]);
      setNewTask('');
    }
  };

  return (
  <main className={styles.container}>
    <h1>ToDo List</h1>
      <div>
        <input 
          type="text" 
          placeholder="Add a new task" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleNewTasks}>Add</button>
    </div>

    <div>
      <h2>Pending:</h2>
      <ul>
       {tasks.map((task, index) => (
        <li key={index}>{task}</li>
       ))}
      </ul>
    </div>
  </main>
  )
}

export default App